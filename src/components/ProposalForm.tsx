import React, { useMemo, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

type ProposalFormData = {
  negocio: string;
  contacto: string;
  telefono: string;
  email: string;

  descripcion: string;
  servicios: string;
  ciudad: string;

  logoUrl: string;
  fotosUrl: string;
  redesUrl: string;
  referenciasUrl: string;

  preferencias: string;
  notas: string;

  extraNecesidades: string;

  // honeypot anti-bot (campo invisible)
  companyWebsite: string;
};

const initialState: ProposalFormData = {
  negocio: "",
  contacto: "",
  telefono: "",
  email: "",

  descripcion: "",
  servicios: "",
  ciudad: "",

  logoUrl: "",
  fotosUrl: "",
  redesUrl: "",
  referenciasUrl: "",

  preferencias: "",
  notas: "",

  extraNecesidades: "",

  companyWebsite: "",
};

export default function ProposalForm() {
  const [formData, setFormData] = useState<ProposalFormData>(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const urlRegex = useMemo(() => /^https?:\/\/.+/i, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    // Requeridos
    if (
      !formData.negocio.trim() ||
      !formData.contacto.trim() ||
      !formData.telefono.trim() ||
      !formData.email.trim() ||
      !formData.descripcion.trim()
    ) {
      toast.error("Por favor, completa los campos obligatorios.");
      return false;
    }

    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Ingrese un correo válido.");
      return false;
    }

    // Tel: tu validación actual (10 dígitos)
    const tel = formData.telefono.replace(/\D/g, "");
    if (tel.length !== 10) {
      toast.error("Ingrese un teléfono válido (10 dígitos).");
      return false;
    }

    // Validación suave de URL: solo si el usuario escribió algo
    const urlFields: Array<{ label: string; value: string }> = [
      { label: "Logo (link)", value: formData.logoUrl },
      { label: "Fotos (link)", value: formData.fotosUrl },
      { label: "Redes sociales (links)", value: formData.redesUrl },
      { label: "Referencias (links)", value: formData.referenciasUrl },
    ];

    for (const f of urlFields) {
      const v = f.value.trim();
      if (v && !urlRegex.test(v)) {
        toast.error(`El campo "${f.label}" debe ser un link válido (http/https).`);
        return false;
      }
    }

    return true;
  };

  const buildEmailMessage = () => {
    // Este texto se envía en "message" a /api/send-email (para no cambiar tu backend)
    // Si luego quieres, lo pasamos a campos separados en el backend.
    return `
📌 Propuesta Web - Recolección de Información

1) Datos del negocio
- Negocio/Marca: ${formData.negocio}
- Contacto: ${formData.contacto}
- Teléfono: ${formData.telefono}
- Email: ${formData.email}
- Ciudad/Zona: ${formData.ciudad || "(no especificado)"}

2) Sobre el negocio
- ¿Qué hace tu negocio?: 
${formData.descripcion}

- Servicios principales:
${formData.servicios || "(no especificado)"}

3) Branding / Contenido
- Logo (link): ${formData.logoUrl || "(no enviado)"}
- Fotos (link): ${formData.fotosUrl || "(no enviado)"}
- Redes sociales (links): ${formData.redesUrl || "(no enviado)"}
- Referencias de diseño (links): ${formData.referenciasUrl || "(no enviado)"}

4) Preferencias / Notas
- Preferencias de diseño y contenido:
${formData.preferencias || "(no especificado)"}

- Notas adicionales:
${formData.notas || "(no especificado)"}

5) Otras necesidades (soluciones informáticas)
${formData.extraNecesidades || "(no especificado)"}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Mantengo la estructura que ya usas:
          name: formData.contacto,
          email: formData.email,
          company: formData.negocio,
          phone: formData.telefono,
          message: buildEmailMessage(),
          companyWebsite: formData.companyWebsite, // honeypot
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data?.ok === false) {
        toast.error(
          data?.message || "Error al enviar el formulario. Inténtelo de nuevo."
        );
        return;
      }

      toast.success("¡Información enviada! Te contactaremos lo antes posible.");
      setSubmitted(true);

      setTimeout(() => {
        setFormData(initialState);
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
        <h3 className="text-2xl font-bold text-[#083351] mb-2">
          ¡Muchas gracias!
        </h3>
        <p className="text-gray-600">
          Recibimos tu información. Te contactaremos pronto.
        </p>
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

      {/* Datos básicos */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre del negocio / marca <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="negocio"
            placeholder="Ej: Arvelo Autopart"
            value={formData.negocio}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Persona de contacto <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="contacto"
            placeholder="Nombre y apellido"
            value={formData.contacto}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
            required
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono / WhatsApp <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="telefono"
            placeholder="Ej: 8090000000"
            value={formData.telefono}
            onChange={handleChange}
            inputMode="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            * 10 dígitos (ej: 8090000000)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Ej: contacto@tuempresa.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
            required
          />
        </div>
      </div>

      {/* Sobre el negocio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Qué hace tu negocio? (explicación corta) <span className="text-red-500">*</span>
        </label>
        <textarea
          name="descripcion"
          rows={4}
          placeholder="Describe en 2-4 líneas qué haces y qué te diferencia."
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white resize-none"
          required
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Servicios principales (separados por coma)
          </label>
          <input
            type="text"
            name="servicios"
            placeholder="Ej: Mecánica general, Diagnóstico, Cambio de aceite"
            value={formData.servicios}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zona / Ciudad
          </label>
          <input
            type="text"
            name="ciudad"
            placeholder="Ej: Santo Domingo"
            value={formData.ciudad}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
        </div>
      </div>

      {/* Branding / contenido */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Logo (link)
          </label>
          <input
            type="url"
            name="logoUrl"
            placeholder="Link (Google Drive/Dropbox/WhatsApp)"
            value={formData.logoUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
          <p className="text-xs text-gray-500 mt-2">
            Si no tienes logo, indícalo en “Notas”.
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fotos del negocio (link)
          </label>
          <input
            type="url"
            name="fotosUrl"
            placeholder="Link donde estén las fotos"
            value={formData.fotosUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Redes sociales (links)
          </label>
          <input
            type="text"
            name="redesUrl"
            placeholder="Instagram, Facebook, TikTok, etc."
            value={formData.redesUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Referencias de diseño (links)
          </label>
          <input
            type="text"
            name="referenciasUrl"
            placeholder="Páginas que te gustan (3 si puedes)"
            value={formData.referenciasUrl}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferencias de diseño y contenido
        </label>
        <textarea
          name="preferencias"
          rows={4}
          placeholder="Colores, estilo (moderno/serio), secciones que quieres sí o sí..."
          value={formData.preferencias}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Notas adicionales
        </label>
        <textarea
          name="notas"
          rows={4}
          placeholder="Horarios, dirección exacta, promociones, detalles importantes..."
          value={formData.notas}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white resize-none"
        />
      </div>

      {/* Otras necesidades */}
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          ¿Tienen alguna otra necesidad de soluciones informáticas?
        </label>
        <textarea
          name="extraNecesidades"
          rows={4}
          placeholder="Ej: inventario, reportes, facturación, sistema de citas, automatizaciones..."
          value={formData.extraNecesidades}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-200 shadow-sm bg-white resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar información
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
