import nodemailer from "nodemailer";
import { env } from "../config/env";

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.secure,
  auth: { user: env.smtp.user, pass: env.smtp.pass },
});

export async function sendContactEmail(input: {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}) {
  const subject = `Nuevo contacto - ${input.company} (${input.name})`;

  const text = [
    `Nombre: ${input.name}`,
    `Empresa: ${input.company}`,
    `Email: ${input.email}`,
    `Teléfono: ${input.phone}`,
    "",
    `Mensaje:`,
    input.message,
  ].join("\n");

  await transporter.sendMail({
    from: env.mail.from,
    to: env.mail.to,
    replyTo: input.email,
    subject,
    text,
  });
}
