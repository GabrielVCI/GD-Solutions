import { Router } from "express";
import { z } from "zod";
import { postContact } from "../controllers/contact.controller";
import { contactRateLimit } from "../middlewares/rateLimit";
import { validateBody } from "../middlewares/validate";

const router = Router();

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().min(2),
  phone: z.string().min(8),
  message: z.string().min(10),
  companyWebsite: z.string().optional(), // honeypot
});

router.post("/", contactRateLimit, validateBody(ContactSchema), postContact);

export default router;
