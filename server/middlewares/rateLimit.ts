import rateLimit from "express-rate-limit";
import { env } from "../config/env";

export const contactRateLimit = rateLimit({
  windowMs: env.rateLimit.windowMs, // ej 15 min
  max: env.rateLimit.max,           // ej 6
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, message: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." },
});
