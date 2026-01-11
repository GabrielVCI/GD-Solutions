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

import type { IncomingMessage, ServerResponse } from "http";

// CommonJS requires
const React = require("react") as typeof import("react");
const { Resend } = require("resend") as typeof import("resend");

// Emails React
const ContactAdminEmail = require("../react-email-starter/emails/ContactAdminEmail.jsx");
const ContactClientEmail = require("../react-email-starter/emails/ContactClientEmail.jsx");

// ----- Tipos base -----
type Req = IncomingMessage & { body?: any };
type Res = ServerResponse;

// ----- Resend -----
const resend = new Resend(process.env.RESEND_API_KEY as string);

// ----- Rate limit store -----
declare global {
  // eslint-disable-next-line no-var
  var __gd_rateMap: Map<string, { count: number; resetAt: number }> | undefined;
}

const rateMap =
  global.__gd_rateMap ??
  new Map<string, { count: number; resetAt: number }>();

global.__gd_rateMap = rateMap;

// ----- Helpers -----
function json(res: Res, status: number, payload: unknown): void {
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

function getIp(req: Req): string {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string") return xf.split(",")[0].trim();
  return req.socket?.remoteAddress ?? "unknown";
}

async function readJson(req: Req): Promise<any> {
  if (req.body && typeof req.body === "object") return req.body;

  let raw = "";
  for await (const chunk of req) raw += chunk;

  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = Number(process.env.RATE_LIMIT_WINDOW_MS ?? 60000);
  const max = Number(process.env.RATE_LIMIT_MAX ?? 10);

  const entry = rateMap.get(ip) ?? {
    count: 0,
    resetAt: now + windowMs,
  };

  if (now > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = now + windowMs;
  }

  entry.count++;
  rateMap.set(ip, entry);

  return entry.count <= max;
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

// ----- Handler -----
async function handler(req: Req, res: Res): Promise<void> {
  try {
    if (req.method !== "POST") {
      return json(res, 405, { ok: false });
    }

    if (!originAllowed(req.headers.origin as string | undefined)) {
      return json(res, 403, { ok: false });
    }

    if (!process.env.RESEND_API_KEY) {
      return json(res, 500, { ok: false, message: "Missing RESEND_API_KEY" });
    }

    if (!process.env.MAIL_FROM || !process.env.MAIL_TO) {
      return json(res, 500, { ok: false, message: "Missing MAIL_FROM/MAIL_TO" });
    }

    const ip = getIp(req);

    if (!rateLimit(ip)) {
      return json(res, 429, { ok: false, message: "Rate limit exceeded" });
    }

    const body = await readJson(req);

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

    const meta = [
      `ip=${ip}`,
      `ua=${String(req.headers["user-agent"] || "").slice(0, 160)}`,
      `origin=${String(req.headers.origin || "")}`,
    ].join(" | ");

    // Email admin
    await resend.emails.send({
      from: process.env.MAIL_FROM as string,
      to: [process.env.MAIL_TO as string],
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      react: React.createElement(ContactAdminEmail, {
        name,
        email,
        message,
        meta,
      }),
    });

    // Email confirmación
    if (String(process.env.SEND_CONFIRMATION).toLowerCase() === "true") {
      await resend.emails.send({
        from: process.env.MAIL_FROM as string,
        to: [email],
        subject: "Hemos recibido tu mensaje - GD Solutions",
        react: React.createElement(ContactClientEmail, { name }),
      });
    }

    return json(res, 200, { ok: true });
  } catch (err) {
    console.error("SEND EMAIL ERROR:", err);
    return json(res, 500, { ok: false, message: "Internal error" });
  }
}

// 👇 Export CommonJS (clave para Vercel)
module.exports = handler;
