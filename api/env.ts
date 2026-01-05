function required(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Falta variable de entorno: ${name}`);
  return v;
}

function numberEnv(name: string, fallback: number): number {
  const v = process.env[name];
  return v ? Number(v) : fallback;
}

export const env = {
  // General (local / legacy)
  port: numberEnv("PORT", 4000),
  corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:3000",

  // Resend
  resend: {
    apiKey: required("RESEND_API_KEY"),
  },

  // Email
  mail: {
    from: process.env.MAIL_FROM ?? "GD Solutions <onboarding@resend.dev>",
    to: required("MAIL_TO"),
  },

  // Rate limit
  rateLimit: {
    windowMs: numberEnv("CONTACT_RATE_LIMIT_WINDOW_MS", 15 * 60 * 1000),
    max: numberEnv("CONTACT_RATE_LIMIT_MAX", 6),
  },

  // Opcionales
  allowedOrigins: (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean),

  sendConfirmation:
    (process.env.SEND_CONFIRMATION ?? "true").toLowerCase() === "true",
};
