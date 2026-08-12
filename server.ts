import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '3000', 10) || 3000;

app.use(express.json());

// Lazy-initialization utility for Gemini API to prevent app crash if key is missing
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
    return null;
  }
  
  if (!aiClient) {
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST API Endpoints
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    apiConfigured: !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY"
  });
});

// AI Data Analysis Endpoint
app.post("/api/analyze-data", async (req, res) => {
  const { dataSummary, targetSector, focusQuestion } = req.body;
  
  if (!dataSummary) {
    return res.status(400).json({ error: "Missing dataSummary in request body" });
  }

  const sectorStr = targetSector ? `Target Sector: ${targetSector}` : "General Multi-Sector";
  const questionStr = focusQuestion ? `Strategic Question: ${focusQuestion}` : "Identify main opportunities and threats";

  const prompt = `You are the Chief AI Data Scientist at DNA TECH (Data Neutral Analysis Technology) in Addis Ababa, Ethiopia.
Your mission is to perform a highly professional, empirical statistical and business analysis of the following primary research dataset or context.
Do not sound like a generic chatbot. Sound like a elite consulting analyst (similar to Palantir or McKinsey).

### DATASET OR CONTEXT SUMMARY:
${dataSummary}

### STRATEGIC FOCUS:
- ${sectorStr}
- ${questionStr}

Provide your response in a structured JSON format containing the following fields:
1. executiveSummary (string, high-level strategic overview, ~3 sentences)
2. keyStatisticalFindings (array of strings, each showing a quantitative inference or correlation)
3. swotAnalysis (object with fields: strengths: array, weaknesses: array, opportunities: array, threats: array)
4. strategicActionPlan (array of objects, each with fields: goal (string), action (string), timeline (string), keyImpactMetric (string))
5. dataReliabilityIndex (number between 0 and 100, explaining our confidence in this dataset)

Return ONLY the raw JSON string matching the schema. No markdown formatting blocks around the JSON.`;

  try {
    const ai = getAiClient();
    
    if (!ai) {
      // Graceful local fallback to provide pristine, high-fidelity mock analysis
      // This prevents the application from failing or displaying ugly error panels, matching platform requirements.
      console.log("Gemini API key is not configured or is default. Returning local simulated intelligence report.");
      
      const sectorTag = targetSector || "Retail & SMEs";
      return res.json({
        isDemoMode: true,
        executiveSummary: `[DEMO INTELLIGENCE REPORT] The provided dataset for ${sectorTag} shows clear demand clusters. However, operations are currently constrained by transport logistics and administrative overhead, which represents a key challenge for local scaling.`,
        keyStatisticalFindings: [
          `Primary concern: approximately 72% of surveyed participants cited transport logistics as their major margin-squeezing bottleneck.`,
          `Secondary concern: capital accessibility shows a negative correlation (-0.68) with business age, indicating early-stage startups suffer disproportionately.`,
          `Demographic density: survey completion rates were highest (79.8%) within low-income sub-cities, representing highly accurate baseline community voices.`
        ],
        swotAnalysis: {
          strengths: ["Ethical primary data collection methods", "Local community trust and high focus-group engagement", "Multilingual enumerator network"],
          weaknesses: ["High geographical transport cost overheads", "Limited statistical literacy among early-stage SME owners", "Fragmented local logistics infrastructure"],
          opportunities: ["Fostering communal shipping hubs", "Delivering real-time pricing alerts through simple digital channels", "Aligning development non-profit funds with geocoded community audits"],
          threats: ["Regulatory policy shifts in retail pricing", "Market saturation from foreign industrial distributors", "Fluctuating regional transit corridors"]
        },
        strategicActionPlan: [
          {
            goal: "Establish Communal Logistics Hubs",
            action: "Pool transport resources with local marketing cooperatives like Ghion Solution",
            timeline: "Short-term (1-3 months)",
            keyImpactMetric: "Reduce raw logistics overhead by 15-20%"
          },
          {
            goal: "Deploy Interactive SMS Price Alerts",
            action: "Broadcast daily demand indices to cooperative farmers and local small traders",
            timeline: "Medium-term (3-6 months)",
            keyImpactMetric: "Increase trader margin retention by up to 12%"
          },
          {
            goal: "Secure Geocoded Project Baselines",
            action: "Design survey schemas targeting O&M audits for active NGO partners",
            timeline: "Long-term (Ongoing)",
            keyImpactMetric: "Attract 4x higher donor investment conversions"
          }
        ],
        dataReliabilityIndex: 88
      });
    }

    // Call actual server-side Gemini API
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2
      }
    });

    const responseText = response.text?.trim() || "{}";
    
    // Safely parse JSON to verify correctness before returning to client
    let jsonResult;
    try {
      jsonResult = JSON.parse(responseText);
    } catch (e) {
      // In case formatting slipped, we strip markdown blocks manually
      const cleanJsonStr = responseText
        .replace(/^```json\s*/i, "")
        .replace(/```$/, "")
        .trim();
      jsonResult = JSON.parse(cleanJsonStr);
    }

    res.json({
      isDemoMode: false,
      ...jsonResult
    });

  } catch (error: any) {
    console.error("Gemini API call failed:", error);
    res.status(500).json({ 
      error: "Error processing intelligence report.",
      details: error.message || error 
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
