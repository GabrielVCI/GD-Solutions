import { Router } from "express";
import { z } from "zod";
import { postContact } from "../controllers/contact.controller";
import { contactRateLimit } from "../middlewares/rateLimit";
import { validateBody } from "../middlewares/validate";
import { env } from "../config/env";

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(2, "Nombre requerido"),
  email: z.email("Email inválido"),
  company: z.string().min(2, "Empresa requerida"), // viene de title
  phone: z.string().min(8, "Teléfono inválido"),
  message: z.string().min(10, "Mensaje muy corto"),

  // honeypot
  companyWebsite: z.string().optional(),
});

router.post("/", contactRateLimit, validateBody(ContactSchema), postContact);

export default router;
