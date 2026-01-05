import type { VercelRequest, VercelResponse } from "@vercel/node";
import React from "react";
import { Resend } from "resend";
import type { IncomingMessage, ServerResponse } from "http";
import { env } from "./env.js";
import ContactAdminEmail from "../react-email-starter/emails/ContactAdminEmail.jsx";
import ContactClientEmail from "../react-email-starter/emails/ContactClientEmail.jsx";
// ---------- Tipos base ----------
type Req = IncomingMessage & { body?: any };
type Res = ServerResponse;
// ---------- Global rate map ----------
declare global {
  var __gd_rateMap:
    | Map<string, { count: number; resetAt: number }>
    | undefined;
}

const rateMap =
  globalThis.__gd_rateMap ??
  new Map<string, { count: number; resetAt: number }>();

globalThis.__gd_rateMap = rateMap;

// ---------- Resend ----------
const resend = new Resend(env.resend.apiKey);

// ---------- Helpers ----------
function json(res: Res, status: number, payload: unknown) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
}

function sanitize(v: unknown): string {
  return String(v ?? "").replace(/\r/g, "").trim();
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry =
    rateMap.get(ip) ??
    { count: 0, resetAt: now + env.rateLimit.windowMs };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + env.rateLimit.windowMs;
  }

  entry.count++;
  rateMap.set(ip, entry);

  return entry.count <= env.rateLimit.max;
}

function getIp(req: Req): string {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string") return xf.split(",")[0].trim();
  return req.socket.remoteAddress ?? "unknown";
}

// ---------- Handler ----------
export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    return json(res, 405, { ok: false });
  }

  // Origin check (opcional)
  if (
    env.allowedOrigins.length &&
    !env.allowedOrigins.includes(req.headers.origin ?? "")
  ) {
    return json(res, 403, { ok: false });
  }

  const ip = getIp(req);

  if (!rateLimit(ip)) {
    return json(res, 429, { ok: false, message: "Rate limit exceeded" });
  }

  const body = req.body ?? {};

  // Honeypot
  if (sanitize(body.website)) {
    return json(res, 200, { ok: true });
  }

  const name = sanitize(body.name);
  const email = sanitize(body.email);
  const message = sanitize(body.message);

  if (!name || !email || !message) {
    return json(res, 400, { ok: false, message: "Campos requeridos" });
  }

  if (!isValidEmail(email)) {
    return json(res, 400, { ok: false, message: "Email inválido" });
  }

  // Email a GD Solutions

const meta = [
  `ip=${ip}`,
  `ua=${String(req.headers["user-agent"] || "").slice(0, 160)}`,
  `origin=${String(req.headers.origin || "")}`,
].join(" | ");

await resend.emails.send({
  from: env.mail.from,
  to: [env.mail.to],
  replyTo: email,
  subject: `Nuevo contacto: ${name}`,
  react: <ContactAdminEmail name={name} email={email} message={message} meta={meta} />,
});


  // Confirmación al cliente
  if (env.sendConfirmation) {
    await resend.emails.send({
      from: env.mail.from,
      to: [email],
      subject: "Hemos recibido tu mensaje - GD Solutions",
      react: React.createElement(ContactClientEmail, { name }),
    });
  }

  return json(res, 200, { ok: true });
}
 
