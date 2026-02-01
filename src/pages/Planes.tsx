import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";

/**
 * Plans Page
 * Design: Minimalist Elegance with Geometric Precision
 * - Hero section
 * - Plans grid
 * - CTA to contact
 */
export default function Plans() {
  const WHATSAPP_PHONE = "18495642217";

  // ✅ Promo
  const PROMO = {
    active: true,
    percent: 20,
    untilLabel: "marzo",
  };

  const plans = [
    {
      name: "Plan Básico",
      price: "RD$7,000",
      period: "pago único",
      features: [
        "Desarrollo de sitio web sencillo",
        "Hasta 4 páginas",
        "Configuración de SEO",
        "Integración de correo y WhatsApp",
        "1 Año de Hosting + Dominio Incluido",
      ],
      highlighted: false,
    },
    {
      name: "Plan MiPymes",
      price: "RD$13,000",
      period: "pago único",
      features: [
        "Todo lo del Plan Básico",
        "2 páginas personalizadas adicionales",
        "Configuración de correo y WhatsApp",
        "6 meses de soporte",
        "2 Años de Hosting + Dominio Incluido",
      ],
      highlighted: true,
    },
    {
      name: "Plan Empresarial",
      price: "$A MEDIDA",
      period: "mensual",
      features: [
        "Todo lo del Plan MiPymes",
        "Configuración de campaña en Google Ads",
        "Gestión de campañas",
        "Estrategia adaptada a tu presupuesto",
        "Google Analytics"
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero (Premium + Responsive, sin sombras) */}
      <section
        className="relative bg-[#083351] text-white overflow-hidden"
        style={{
          backgroundImage: "url(/images/hero-bg-1.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#083351]/80" />

        <div className="relative container pt-28 pb-30 md:pt-36 md:pb-38">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/85 backdrop-blur-md">
              Planes
            </p>

            <h1 className="mt-6 text-[2.25rem] leading-[1.06] sm:text-[2.9rem] md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-[-0.02em] max-w-3xl">
              Planes diseñados para tu negocio
            </h1>

            <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
              Elige el plan ideal para tu etapa actual. Sitios rápidos, diseño limpio y una experiencia
              que guía al cliente a escribirte.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hola GD Solutions, quiero saber cuál plan me conviene. Mi negocio es: ________."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#083351] no-underline transition-colors hover:text-[#f4832c]"
              >
                <FaWhatsapp className="w-5 h-5" />
                Hablar por WhatsApp
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md no-underline transition-colors hover:bg-white/10"
              >
                Prefiero el formulario
              </Link>
            </div>

            {/* Micro “qué incluye” (responsive) */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
              <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white/90">Carga rápida</p>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  Optimización real para móvil.
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white/90">Estructura clara</p>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  Se entiende sin explicar.
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md">
                <p className="text-sm font-semibold text-white/90">CTA directo</p>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">
                  WhatsApp y contacto a mano.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-[#f5f5f5]">
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(0 62%, 100% 20%, 100% 100%, 0 100%)" }}
          />
        </div>
      </section>

      {/* Plans (Premium + Responsive, sin sombras) */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#f5f5f5]">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
              Selección
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
              Nuestros planes
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              Precios claros. Entrega seria. Soporte cuando hace falta.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => {
              const original = parseDOP(plan.price);
              const hasNumericPrice = original !== null;
              const discounted =
                PROMO.active && hasNumericPrice
                  ? applyDiscount(original!, PROMO.percent)
                  : null;

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl border p-7 sm:p-8 transition duration-300 ${
                    plan.highlighted
                      ? "border-[#083351] bg-[#083351] text-white"
                      : "border-[#e5e5e5] bg-white text-[#083351] hover:border-[#f4832c]"
                  }`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  {/* ✅ Premium Promo Pill (por encima del card + shine) */}
                  {PROMO.active && (
                    <div className="absolute -top-4 left-6 z-20">
                      <div
                        className={`relative overflow-hidden rounded-full border px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase backdrop-blur-md ${
                          plan.highlighted
                            ? "bg-white/10 border-white/25 text-white/90"
                            : "bg-white border-[#083351]/15 text-[#083351]"
                        }`}
                      >
                        <span className="relative z-10">
                          -{PROMO.percent}% hasta {PROMO.untilLabel}
                        </span>

                        {/* Shine */}
                        <span
                          className={`pointer-events-none absolute inset-0 opacity-70 ${
                            plan.highlighted ? "opacity-60" : "opacity-80"
                          }`}
                        >
                          <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shine" />
                        </span>
                      </div>
                    </div>
                  )}
 
                  <div className="relative">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                        <p
                          className={`mt-2 text-sm ${
                            plan.highlighted ? "text-white/70" : "text-gray-600"
                          }`}
                        >
                          {plan.period}
                        </p>
                      </div>

                      <span
                        className={`text-xs font-semibold tracking-[0.14em] uppercase px-3 py-2 rounded-xl border ${
                          plan.highlighted
                            ? "border-white/25 text-white/85"
                            : "border-[#083351]/15 text-[#083351]/70"
                        }`}
                      >
                        {plan.highlighted ? "Recomendado" : "Plan"}
                      </span>
                    </div>

                    {/* Precio */}
                    <div className="mt-7">
                      {/* ✅ Plan con precio numérico: muestra descuento + ahorro */}
                      {PROMO.active && hasNumericPrice ? (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-4xl font-semibold tracking-tight">
                            {formatDOP(discounted!)}
                          </span>

                          <div
                            className={`flex flex-wrap items-center gap-2 text-sm ${
                              plan.highlighted ? "text-white/70" : "text-gray-600"
                            }`}
                          >
                            <span className="line-through opacity-80">{plan.price}</span>
                            <span
                              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${
                                plan.highlighted
                                  ? "border-white/20 bg-white/10 text-white/90"
                                  : "border-[#f4832c]/25 bg-[#f4832c]/10 text-[#f4832c]"
                              }`}
                            >
                              Ahorras {formatDOP(original! - discounted!)}
                            </span>
                          </div>
                        </div>
                      ) : (
                        // ✅ Plan empresarial (A medida): texto de ahorro sin monto fijo
                        <div className="flex flex-col gap-2">
                          <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>

                          {PROMO.active && (
                            <div
                              className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold border ${
                                plan.highlighted
                                  ? "border-white/20 bg-white/10 text-white/90"
                                  : "border-[#f4832c]/25 bg-[#f4832c]/10 text-[#f4832c]"
                              }`}
                            >
                              Ahorra {PROMO.percent}% del monto final
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div
                      className={`mt-7 h-px w-full ${
                        plan.highlighted ? "bg-white/15" : "bg-[#e5e5e5]"
                      }`}
                    />

                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#f4832c]" />
                          <span
                            className={`text-sm ${
                              plan.highlighted ? "text-white/85" : "text-gray-700"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA principal: WhatsApp con plan */}
                    <a
                      href={buildWhatsappUrl(plan, PROMO)}
                      target="_blank"
                      rel="noreferrer"
                      className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold no-underline transition-colors ${
                        plan.highlighted
                          ? "bg-[#f4832c] text-white hover:bg-[#f79a4a]"
                          : "bg-[#083351] text-white hover:bg-[#0b3f66]"
                      }`}
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      Solicitar por WhatsApp
                    </a>

                    {/* Alternativa: Form */}
                    <Link href="/contacto">
                      <a
                        className={`mt-4 block text-center text-sm no-underline hover:underline ${
                          plan.highlighted ? "text-white/75" : "text-gray-600"
                        }`}
                      >
                        Prefiero el formulario
                      </a>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nota breve debajo */}
          <div className="mt-10 mx-auto max-w-3xl text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              Si tu negocio necesita reservas, catálogo avanzado, múltiples sucursales o campañas, te armamos un plan a medida.
            </p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
              Recomendación
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
              ¿No estás seguro cuál elegir?
            </h2>
            <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
              Dinos tu tipo de negocio y qué quieres lograr. Te decimos cuál plan encaja y qué incluiría.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hola GD Solutions, ayúdenme a escoger un plan. Mi negocio es: ________. Quiero lograr: ________."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#083351] px-6 py-4 font-semibold text-white no-underline transition-colors hover:bg-[#0b3f66] w-full sm:w-auto"
              >
                <FaWhatsapp className="w-5 h-5" />
                Solicitar recomendación
              </a>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-[#083351]/20 px-6 py-4 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c] w-full sm:w-auto"
              >
                Ir al formulario
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

        /* Premium shine */
        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        .animate-shine {
          animation: shine 1.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );

  function buildWhatsappUrl(
    plan: { name: string },
    promo: { active: boolean; percent: number; untilLabel: string }
  ) {
    const promoText = promo.active ? ` (con ${promo.percent}% OFF hasta ${promo.untilLabel})` : "";
    const message = `Hola GD Solutions, quiero solicitar el ${plan.name}${promoText}. Mi negocio es: ________.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  }

  // Helpers
  function parseDOP(price: string): number | null {
    // Soporta "RD$7,000" / "RD$ 7,000" / "7000". Devuelve null si no es número (ej: "$A MEDIDA")
    const cleaned = String(price).replace(/RD\$\s?/gi, "").replace(/[,\s]/g, "").trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  }

  function applyDiscount(amount: number, percent: number) {
    const factor = (100 - percent) / 100;
    return Math.round(amount * factor);
  }

  function formatDOP(amount: number) {
    return `RD$${amount.toLocaleString("en-US")}`;
  }
}
