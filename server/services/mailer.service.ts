import { Resend } from "resend";
import { env } from "../config/env";

const resend = new Resend(env.resendApiKey);

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

  const result = await resend.emails.send({
    from: env.mail.from,
    to: [env.mail.to],
    subject,
    text,
    replyTo: input.email,
  });

  return result;
}
