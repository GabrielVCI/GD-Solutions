import type { Request, Response } from "express";
import { sendContactEmail } from "../services/mailer.service";

export async function postContact(req: Request, res: Response) {
  // Honeypot anti-bot: si viene lleno, asumimos bot y devolvemos ok=true sin enviar correo
  if (typeof req.body?.companyWebsite === "string" && req.body.companyWebsite.trim()) {
    return res.json({ ok: true });
  }

  const { name, email, company, phone, message } = req.body as {
    name: string;
    email: string; 
    company: string;
    phone: string;
    message: string;
  };

  try {
    await sendContactEmail({ name, email, company, phone, message });
    return res.json({ ok: true, message: "Mensaje enviado correctamente." });
  } catch (err) {
    console.error("Error enviando correo:", err);
    return res.status(500).json({
      ok: false,
      message: "No se pudo enviar el mensaje. Intenta de nuevo más tarde.",
    });
  }
}
