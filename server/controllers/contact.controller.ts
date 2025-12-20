import type { Request, Response } from "express";
import { sendContactEmail } from "../services/mailer.service";

export async function postContact(req: Request, res: Response) {
  console.log("[CONTACT] body:", req.body);

  // Honeypot
  if (typeof req.body?.companyWebsite === "string" && req.body.companyWebsite.trim()) {
    console.log("[CONTACT] honeypot triggered => not sending email");
    return res.json({ ok: true });
  }

  const { name, email, company, phone, message } = req.body as {
    name: string;
    email: string;
    company: string;
    phone: string;
    message: string;
  };

  console.log("[CONTACT] sending email via Resend...", { name, email, company, phone });

  try {
    const result = await sendContactEmail({ name, email, company, phone, message });
    console.log("[CONTACT] resend result:", result);

    return res.json({ ok: true, message: "Mensaje enviado correctamente." });
  } catch (err) {
    console.error("[CONTACT] resend error:", err);
    return res.status(500).json({
      ok: false,
      message: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
    });
  }
}
