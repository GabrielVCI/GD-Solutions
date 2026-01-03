import { Target, Lightbulb, Heart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { FaWhatsapp } from "react-icons/fa";

/**
 * About Us Page
 * Design: Minimalist Elegance with Geometric Precision
 * - Professional section describing company goals, mission, vision, and values
 * - Tone inspires trust and credibility
 */
export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Excelencia',
      description: 'Priorizamos la excelencia en cada proyecto, construyendo cosas sitios web que exceden las expectativas'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Nos mantenemos actualizados y ofrecemos el diseño que mejor encaje con tu negocio, con ideas frescas y las tendencias'
    },
    {
      icon: Heart,
      title: 'Integridad',
      description: 'Creemos en la comunicación honesta y procesos transparentes, dejando claro todo lo que hacemos y construyendo relaciones basadas en confianza'
     },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos de cerca con nuestro clientes, entendemos su visión y nos convertimos en aliados en su éxito'
     },
  ];

  const WHATSAPP_PHONE = "18495642217";

 return (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />

    {/* Hero Section (Premium + Responsive, sin sombras) */}
    <section
      className="relative bg-[#083351] text-white overflow-hidden"
      style={{
        backgroundImage: "url(/images/hero-bg-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-[#083351]/80" />
      {/* acentos suaves */}
 

      <div className="relative container pt-28 pb-30 md:pt-36 md:pb-38">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/85 backdrop-blur-md">
             Sobre GD Solutions
          </p>

          <h1 className="mt-6 text-[2.25rem] leading-[1.06] sm:text-[2.9rem] md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-[-0.02em] max-w-2xl">
            Sobre Nosotros
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            Creamos presencia web con criterio: estructura clara, diseño limpio y una experiencia que
            guía al cliente a contactarte.
          </p>

          <div className="mt-8 flex sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hola GD Solutions, quiero conocer su proceso y ver si encajamos. ¿Podemos hablar?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#083351] px-6 py-4 font-semibold no-underline transition-colors hover:text-[#f4832c]"
            >
              <FaWhatsapp className="w-5 h-5" />
              Contáctanos
            </a>

            <Link href="/contacto">
              <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md no-underline transition-colors hover:bg-white/10">
                Formulario
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider suave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-white">
        <div
          className="absolute inset-0"
          style={{ clipPath: "polygon(0 62%, 100% 20%, 100% 100%, 0 100%)" }}
        />
      </div>
    </section>

    {/* Story Section (Premium + Responsive, sin sombras) */}
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          {/* Copy */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
              Historia
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
              Nuestra Historia
            </h2>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              GD Solutions nace con una idea simple: que un negocio dominicano pueda verse y sentirse
              sólido en internet. No se trata de “tener una web”, se trata de que el cliente confíe,
              entienda tu oferta y te escriba.
            </p>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              Cada proyecto que aceptamos se trabaja con un proceso corto: descubrimiento, estructura,
              diseño, revisión y entrega. Sin caos. Sin improvisación.
            </p>

            {/* Mini CTA (sin sombras) */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/planes" className="inline-flex items-center justify-center rounded-xl border border-[#083351]/20 px-6 py-3 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]">
                  Ver planes 
              </Link>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hola GD Solutions, mi negocio es ________. Quiero saber qué plan me conviene."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#083351] px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#0b3f66]"
              >
                <FaWhatsapp className="w-5 h-5" />
                Ayúdame a elegir
              </a>
            </div>
          </div>

          {/* Metrics */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
                En números
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                <div className="rounded-xl border border-[#e5e5e5] p-6">
                  <p className="text-4xl font-semibold tracking-tight text-[#f4832c]">50+</p>
                  <p className="mt-2 text-sm text-gray-600">Proyectos completados</p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] p-6">
                  <p className="text-4xl font-semibold tracking-tight text-[#f4832c]">20+</p>
                  <p className="mt-2 text-sm text-gray-600">Clientes recurrentes</p>
                </div>

                <div className="rounded-xl border border-[#e5e5e5] p-6">
                  <p className="text-4xl font-semibold tracking-tight text-[#f4832c]">10+</p>
                  <p className="mt-2 text-sm text-gray-600">Años construyendo producto</p>
                </div>
              </div>

              <div className="mt-8 h-px w-full bg-[#e5e5e5]" />

              <p className="mt-6 text-sm text-gray-600 leading-relaxed">
                Si quieres ver ejemplos similares a tu industria, te los compartimos directo.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hola GD Solutions, ¿pueden mostrarme ejemplos similares a mi industria?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#083351]/20 px-6 py-3 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]"
              >
                <FaWhatsapp className="w-5 h-5" />
                Ver ejemplos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Mission / Vision / Commitment (Premium, sin sombras) */}
    <section className="py-16 sm:py-20 md:py-28 bg-[#f5f5f5]">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
            Enfoque
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
            Cómo trabajamos
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            Lo importante no es “llenar secciones”, es construir una experiencia que se entienda y
            se sienta profesional.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#083351]/70">
              Misión
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#083351]">
              Claridad y resultado
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Ayudar a negocios a comunicar su oferta con orden y velocidad, para que el cliente
              entienda y contacte.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#083351]/70">
              Visión
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#083351]">
              Presencia sólida en RD
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Ser el equipo al que llaman cuando quieren un sitio que se vea serio, cargue rápido y
              convierta visitas en conversaciones.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e5e5e5] bg-white p-7">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#083351]/70">
              Compromiso
            </p>
            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#083351]">
              Proceso limpio
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Comunicación directa, revisiones claras y entregables definidos. Lo que se acuerda,
              se cumple.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values (Premium grid, sin sombras) */}
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
            Valores
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
            Lo que el cliente nota sin que se lo digas
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            La gente no compra “palabras”. Compra señales: orden, criterio y consistencia.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group rounded-2xl border border-[#e5e5e5] bg-white p-7 transition-colors duration-200 hover:border-[#f4832c]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl border border-[#e5e5e5] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#f4832c]" />
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight text-[#083351]">
                      {value.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#083351]/55">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">{value.description}</p>

                <div className="mt-6 h-px w-full bg-[#e5e5e5] group-hover:bg-[#f4832c]/40 transition-colors" />

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-[#083351]/70">Aplicado en cada entrega</span>
                  <Link href="/contacto">
                    <a className="text-sm font-semibold text-[#083351] no-underline transition-colors hover:text-[#f4832c]">
                      Hablar →
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA Section (Premium + Responsive + WhatsApp) */}
    <section className="py-16 sm:py-20 md:py-28 bg-[#083351] text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-white/70 uppercase">
            Tu negocio te representa
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            Trabajemos Juntos
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
            Escríbenos con el nombre de tu negocio y lo que quieres lograr. Te respondemos con los
            próximos pasos.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hola GD Solutions, mi negocio se llama ________. Quiero una web para ________. ¿Qué sigue?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#083351] no-underline transition-colors hover:text-[#f4832c] w-full sm:w-auto"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp
            </a>

            <Link href="/contacto">
              <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md no-underline transition-colors hover:bg-white/10 w-full sm:w-auto">
                Formulario
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Footer />

    <style>{`
      @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </div>
);

}
