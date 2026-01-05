import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:4000";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    message: "",
    telefono: "",
    // honeypot anti-bot (campo invisible)
    companyWebsite: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica
    if (
      !formData.name ||
      !formData.email ||
      !formData.title ||
      !formData.message ||
      !formData.telefono
    ) {
      toast.error("Por favor, llena todos los campos");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Ingrese un correo válido");
      return;
    }

    const tel = String(formData.telefono).trim();
    if (tel.length != 10) {
      toast.error("Ingrese un teléfono válido");
      return;
    }

    setIsLoading(true);

    try {
      const resp = await fetch("http://localhost:3000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.title,  
          phone: formData.telefono,  
          message: formData.message,
          companyWebsite: formData.companyWebsite, // honeypot
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok === false) {
        toast.error(data?.message || "Error al enviar el mensaje, inténtelo de nuevo.");
        return;
      }

      toast.success("Mensaje enviado exitósamente! Te contactaremos lo más rápido posible.");
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          title: "",
          message: "",
          telefono: "",
          companyWebsite: "",
        });
        setSubmitted(false);
      }, 2000);
    } catch {
      toast.error("Error de red. Inténtelo de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#f4832c] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#083351] mb-2">Muchas Gracias!</h3>
        <p className="text-gray-600">Hemos recibido tu mensaje, nos contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Honeypot oculto */}
      <div className="hidden">
        <label>Website</label>
        <input
          type="text"
          name="companyWebsite"
          value={formData.companyWebsite}
          onChange={handleChange}
          autoComplete="off"
          tabIndex={-1}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
          required
        />
      </div>

      <input
        type="text"
        name="title"
        placeholder="Nombre de la empresa"
        value={formData.title}
        onChange={handleChange}
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
        required
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        inputMode="tel"
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
        required
      />

      <textarea
        name="message"
        placeholder="Cuéntanos sobre tu negocio y tus expectativas"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500 resize-none"
        required
      ></textarea>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-gray-600 text-sm">
        Te responderemos con la mayor brevedad posible.
      </p>
    </form>
  );
}
