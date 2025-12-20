import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env";
import contactRoutes from "./routes/contact.routes";

export function createApp() {
  const app = express();

  app.use(helmet());
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));
  app.use(express.json({ limit: "50kb" }));

  // IMPORTANTE: responder preflight
app.options("*", cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));

  app.get("/api/health", (_req, res) => res.json({ ok: true }));

  app.use("/api/contact", contactRoutes);

  return app;
}
