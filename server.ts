import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10) || 3000;

app.use(express.json());

// REST API Endpoints
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString()
  });
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

    srv.on('error', (err: any) => {
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
