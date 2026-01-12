// import type { VercelRequest, VercelResponse } from "@vercel/node";
// import React from "react";
// import { Resend } from "resend";
// import type { IncomingMessage, ServerResponse } from "http";
// import { env } from "./env.js";
// import ContactAdminEmail from "../react-email-starter/emails/ContactAdminEmail.jsx";
// import ContactClientEmail from "../react-email-starter/emails/ContactClientEmail.jsx";
// // ---------- Tipos base ----------
// type Req = IncomingMessage & { body?: any };
// type Res = ServerResponse;
// // ---------- Global rate map ----------
// declare global {
//   var __gd_rateMap:
//     | Map<string, { count: number; resetAt: number }>
//     | undefined;
// }

// const rateMap =
//   globalThis.__gd_rateMap ??
//   new Map<string, { count: number; resetAt: number }>();

// globalThis.__gd_rateMap = rateMap;

// // ---------- Resend ----------
// const resend = new Resend(env.resend.apiKey);

// // ---------- Helpers ----------
// function json(res: Res, status: number, payload: unknown) {
//   res.statusCode = status;
//   res.setHeader("Content-Type", "application/json");
//   res.end(JSON.stringify(payload));
// }

// function sanitize(v: unknown): string {
//   return String(v ?? "").replace(/\r/g, "").trim();
// }

// function isValidEmail(s: string): boolean {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
// }

// function rateLimit(ip: string): boolean {
//   const now = Date.now();
//   const entry =
//     rateMap.get(ip) ??
//     { count: 0, resetAt: now + env.rateLimit.windowMs };

//   if (now > entry.resetAt) {
//     entry.count = 0;
//     entry.resetAt = now + env.rateLimit.windowMs;
//   }

//   entry.count++;
//   rateMap.set(ip, entry);

//   return entry.count <= env.rateLimit.max;
// }

// function getIp(req: Req): string {
//   const xf = req.headers["x-forwarded-for"];
//   if (typeof xf === "string") return xf.split(",")[0].trim();
//   return req.socket.remoteAddress ?? "unknown";
// }

// // ---------- Handler ----------
// export default async function handler(req: Req, res: Res) {
//   if (req.method !== "POST") {
//     return json(res, 405, { ok: false });
//   }

//   // Origin check (opcional)
//   if (
//     env.allowedOrigins.length &&
//     !env.allowedOrigins.includes(req.headers.origin ?? "")
//   ) {
//     return json(res, 403, { ok: false });
//   }

//   const ip = getIp(req);

//   if (!rateLimit(ip)) {
//     return json(res, 429, { ok: false, message: "Rate limit exceeded" });
//   }

//   const body = req.body ?? {};

//   // Honeypot
//   if (sanitize(body.website)) {
//     return json(res, 200, { ok: true });
//   }

//   const name = sanitize(body.name);
//   const email = sanitize(body.email);
//   const message = sanitize(body.message);

//   if (!name || !email || !message) {
//     return json(res, 400, { ok: false, message: "Campos requeridos" });
//   }

//   if (!isValidEmail(email)) {
//     return json(res, 400, { ok: false, message: "Email inválido" });
//   }

//   // Email a GD Solutions

// const meta = [
//   `ip=${ip}`,
//   `ua=${String(req.headers["user-agent"] || "").slice(0, 160)}`,
//   `origin=${String(req.headers.origin || "")}`,
// ].join(" | ");

// await resend.emails.send({
//   from: env.mail.from,
//   to: [env.mail.to],
//   replyTo: email,
//   subject: `Nuevo contacto: ${name}`,
//   react: <ContactAdminEmail name={name} email={email} message={message} meta={meta} />,
// });


//   // Confirmación al cliente
//   if (env.sendConfirmation) {
//     await resend.emails.send({
//       from: env.mail.from,
//       to: [email],
//       subject: "Hemos recibido tu mensaje - GD Solutions",
//       react: React.createElement(ContactClientEmail, { name }),
//     });
//   }

//   return json(res, 200, { ok: true });
// }
//  // api/send-email.cjs


// api/send-email.cjs

// api/send-email.ts

// api/send-email.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import React from "react";
import { Resend } from "resend";

// OJO: tus templates pueden quedarse en .jsx/.tsx
import ContactAdminEmail from "./ContactAdminEmail.js";
import ContactClientEmail from "./ContactClientEmail.js";


type ApiResponse =
  | { ok: true }
  | { ok: false; message?: string };

function sanitize(v: unknown): string {
  return String(v ?? "").replace(/\r/g, "").trim();
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function originAllowed(origin?: string): boolean {
  const raw = String(process.env.ALLOWED_ORIGINS ?? "").trim();
  if (!raw) return true;

  const allowed = raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return allowed.includes(origin ?? "");
}

// rate-limit simple en memoria (por instancia)
declare global {
  // eslint-disable-next-line no-var
  var __gd_rateMap:
    | Map<string, { count: number; resetAt: number }>
    | undefined;
}

const rateMap =
  globalThis.__gd_rateMap ??
  new Map<string, { count: number; resetAt: number }>();

globalThis.__gd_rateMap = rateMap;

function getIp(req: VercelRequest): string {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string") return xf.split(",")[0].trim();
  return req.socket?.remoteAddress ?? "unknown";
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60_000);
  const max = Number(process.env.RATE_LIMIT_MAX ?? 10);

  const entry = rateMap.get(ip) ?? { count: 0, resetAt: now + windowMs };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }

  entry.count++;
  rateMap.set(ip, entry);

  return entry.count <= max;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ ok: false, message: "Method not allowed" });
    }

    if (!originAllowed(req.headers.origin)) {
      return res.status(403).json({ ok: false, message: "Forbidden origin" });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const MAIL_FROM = process.env.MAIL_FROM;
    const MAIL_TO = process.env.MAIL_TO;

    if (!RESEND_API_KEY) {
      return res.status(500).json({ ok: false, message: "Missing RESEND_API_KEY" });
    }
    if (!MAIL_FROM || !MAIL_TO) {
      return res.status(500).json({ ok: false, message: "Missing MAIL_FROM/MAIL_TO" });
    }

    const ip = getIp(req);
    if (!rateLimit(ip)) {
      return res.status(429).json({ ok: false, message: "Rate limit exceeded" });
    }

    const body = (req.body ?? {}) as Record<string, unknown>;

    // Honeypot
    if (sanitize(body.website)) {
      return res.status(200).json({ ok: true });
    }

    const name = sanitize(body.name);
    const email = sanitize(body.email);
    const message = sanitize(body.message);

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, message: "Campos requeridos" });
    }
    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, message: "Email inválido" });
    }

    const meta = [
      `ip=${ip}`,
      `ua=${String(req.headers["user-agent"] || "").slice(0, 160)}`,
      `origin=${String(req.headers.origin || "")}`,
    ].join(" | ");

    const resend = new Resend(RESEND_API_KEY);

    // Admin
    await resend.emails.send({
      from: MAIL_FROM,
      to: [MAIL_TO],
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      react: React.createElement(ContactAdminEmail, {
        name,
        email,
        message,
        meta,
      }),
    });

    // Confirmación
    if (String(process.env.SEND_CONFIRMATION ?? "").toLowerCase() === "true") {
      await resend.emails.send({
        from: MAIL_FROM,
        to: [email],
        subject: "Hemos recibido tu mensaje - GD Solutions",
        react: React.createElement(ContactClientEmail, { name }),
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("SEND EMAIL ERROR:", err);
    return res.status(500).json({ ok: false, message: "Internal error" });
  }
}
