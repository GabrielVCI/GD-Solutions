import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Fuerza a cargar el .env desde la raíz del proyecto (un nivel arriba de /server)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "..", "..", ".env") });

function req(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Falta variable de entorno: ${name}`);
  return v;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",

  resendApiKey: "re_hBo9MSu8_2BavrGhFnBfQiXBoBhvn3h6L ",

  mail: {
    from: "onboarding@resend.dev",
    to: 'gdsolutionslat@gmail.com',
  },

  rateLimit: {
    windowMs: Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000),
    max: Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 6),
  },
};
