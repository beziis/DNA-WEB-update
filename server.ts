import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10) || 3000;

app.use(express.json({ limit: "20kb" }));

app.use((error: unknown, _req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (error instanceof SyntaxError && "body" in error) {
    return res.status(400).json({
      success: false,
      message: "Please check your information and try again."
    });
  }

  next(error);
});

const CONTACT_RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const CONTACT_RATE_LIMIT_MAX_REQUESTS = 5;
const contactRequestLog = new Map<string, { count: number; resetAt: number }>();

function pruneExpiredRateLimits(now: number) {
  for (const [ip, record] of contactRequestLog.entries()) {
    if (record.resetAt <= now) {
      contactRequestLog.delete(ip);
    }
  }
}

function isContactRateLimited(ipAddress: string) {
  const now = Date.now();
  pruneExpiredRateLimits(now);
  const record = contactRequestLog.get(ipAddress);

  if (!record || record.resetAt <= now) {
    contactRequestLog.set(ipAddress, { count: 1, resetAt: now + CONTACT_RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (record.count >= CONTACT_RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count += 1;
  return false;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    "\"": "&quot;"
  })[character] ?? character);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getContactMailConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number.parseInt(process.env.SMTP_PORT?.trim() || "", 10);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!host || !Number.isInteger(port) || port < 1 || port > 65535 || !user || !pass || !to || !from) {
    return null;
  }

  return {
    host,
    port,
    secure: process.env.SMTP_SECURE?.trim().toLowerCase() === "true",
    user,
    pass,
    to,
    from
  };
}

// REST API Endpoints
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/contact", async (req, res) => {
  const clientIp = req.ip || req.socket.remoteAddress || "unknown-ip";
  if (isContactRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      message: "Please wait a few minutes before sending another message."
    });
  }

  const body = req.body;
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return res.status(400).json({
      success: false,
      message: "Please check your information and try again."
    });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (
    !name || name.length > 120 || /[\r\n]/.test(name) ||
    !email || email.length > 254 || !isValidEmail(email) ||
    !message || message.length > 5000
  ) {
    return res.status(400).json({
      success: false,
      message: "Please check your information and try again."
    });
  }

  const mailConfig = getContactMailConfig();
  if (!mailConfig) {
    console.error("Contact email service is not configured.");
    return res.status(503).json({
      success: false,
      message: "The contact service is temporarily unavailable. Please try again later."
    });
  }

  const submittedAt = new Date().toISOString();
  const text = [
    "New DNA TECH website contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message
  ].join("\n");
  const html = `
    <h2>New DNA TECH website contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const transporter = nodemailer.createTransport({
      host: mailConfig.host,
      port: mailConfig.port,
      secure: mailConfig.secure,
      auth: {
        user: mailConfig.user,
        pass: mailConfig.pass
      }
    });

    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      replyTo: email,
      subject: `Website contact from ${name}`,
      text,
      html
    });

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully."
    });
  } catch {
    console.error("Contact email delivery failed.");
    return res.status(500).json({
      success: false,
      message: "We could not send your message right now. Please try again later."
    });
  }
});

// Setup Vite Dev server or production static serving
async function bootstrap() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite Middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode serving static assets...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // Start server with graceful handling for EADDRINUSE by attempting next ports
  const startServer = (port: number, attempts = 3) => {
    const srv = app.listen(port, '0.0.0.0', () => {
      console.log(`DNA TECH Platform Running at http://localhost:${port}`);
    });

    srv.on('error', (err: NodeJS.ErrnoException) => {
      if (err && err.code === 'EADDRINUSE' && attempts > 0) {
        console.warn(`Port ${port} in use. Trying port ${port + 1}...`);
        setTimeout(() => startServer(port + 1, attempts - 1), 250);
      } else {
        console.error('Server failed to start:', err);
        process.exit(1);
      }
    });
  };

  startServer(DEFAULT_PORT, 5);
}

bootstrap();
