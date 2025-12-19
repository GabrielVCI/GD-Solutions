import dotenv from "dotenv";
dotenv.config();

function req(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Falta variable de entorno: ${name}`);
  return v;
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "*",

  smtp: {
    host: req("SMTP_HOST"),
    port: Number(req("SMTP_PORT")),
    secure: (process.env.SMTP_SECURE ?? "false") === "true",
    user: req("SMTP_USER"),
    pass: req("SMTP_PASS"),
  },

  mail: {
    from: req("MAIL_FROM"),
    to: req("MAIL_TO"),
  },

  rateLimit: {
    windowMs: Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 15 * 60 * 1000),
    max: Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 6),
  },

  honeypotField: process.env.CONTACT_HONEYPOT_FIELD ?? "companyWebsite",
};
