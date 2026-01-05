import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Link } from 'wouter';
import { FaWhatsapp } from "react-icons/fa";
/**
 * Contact Page
 * - Hero section
 * - Contact form
 */
export default function Contact() {

    const WHATSAPP_PHONE = "18495642217";

  return (
  <div className="min-h-screen flex flex-col bg-white">
  <Navbar />

  {/* Hero (Premium + Responsive, sin sombras) */}
  <section
    className="relative bg-[#083351] text-white overflow-hidden"
    style={{
      backgroundImage: "url(/images/hero-bg-1.png)", // o /images/contact-bg.png
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-[#083351]/80" />
 

    <div className="relative container pt-28 pb-30 md:pt-36 md:pb-38">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/85 backdrop-blur-md">
           Contacto
        </p>

        <h1 className="mt-6 text-[2.25rem] leading-[1.06] sm:text-[2.9rem] md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-[-0.02em] max-w-2xl">
          Contáctanos
        </h1>

        <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
          Dinos qué estás construyendo y qué necesitas. Te respondemos con los siguientes pasos.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
              "Hola GD Solutions, quiero iniciar un proyecto. Mi negocio es: ________. Necesito: ________."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#083351] no-underline transition-colors hover:text-[#f4832c]"
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>

          <a
            href="#form"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md no-underline transition-colors hover:bg-white/10"
          >
            Ir al formulario
          </a>
        </div>

        {/* Micro info (simple y útil) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
          <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-white/90">Respuesta rápida</p>
            <p className="mt-1 text-xs text-white/70 leading-relaxed">
              Te contestamos con pasos claros.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-white/90">Brief guiado</p>
            <p className="mt-1 text-xs text-white/70 leading-relaxed">
              Te ayudamos a ordenar la idea.
            </p>
          </div>
          <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
            <p className="text-sm font-semibold text-white/90">Sin fricción</p>
            <p className="mt-1 text-xs text-white/70 leading-relaxed">
              WhatsApp o formulario, como prefieras.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-white">
      <div
        className="absolute inset-0"
        style={{ clipPath: "polygon(0 62%, 100% 20%, 100% 100%, 0 100%)" }}
      />
    </div>
  </section>

  {/* Form (Premium + Responsive, sin sombras) */}
  <section id="form" className="py-16 sm:py-20 md:py-28 bg-white">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
          Mensaje
        </p>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
          Escríbenos
        </h2>
        <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
          Completa el formulario. Si prefieres, también puedes escribir directo por WhatsApp.
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-2xl">
        {/* Marco del form (sin sombras) */}
        <div className="rounded-2xl border border-[#e5e5e5] p-6 sm:p-8">
          <ContactForm />

          {/* CTA secundario debajo del form */}
          <div className="mt-8 pt-6 border-t border-[#e5e5e5] flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hola GD Solutions, prefiero WhatsApp. Mi negocio es: ________. Necesito: ________."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#083351] px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#0b3f66] w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5" />
              Escribir por WhatsApp
            </a>

            <Link href="/planes">
              <a className="inline-flex items-center justify-center rounded-xl border border-[#083351]/20 px-6 py-3 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c] w-full sm:w-auto">
                Ver planes
              </a>
            </Link>
          </div>
        </div>

        {/* Nota pequeña (útil, no genérica) */}
        <p className="mt-6 text-center text-sm text-gray-600 leading-relaxed">
          Si ya tienes dominio o hosting, indícalo en el mensaje para acelerar el proceso.
        </p>
      </div>
    </div>
  </section>

  <Footer />
</div>

  );
}
