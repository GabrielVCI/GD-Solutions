import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import { FaWhatsapp } from "react-icons/fa";

type Promo = {
  active: boolean;
  percent: number;
  untilLabel: string;
};

type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
};

type Props = {
  title?: string;
  subtitle?: string;
  whatsappPhone?: string;
  promo?: Promo;
  plans?: Plan[];
  contactHref?: string; // ruta del formulario, ej: "/contacto"
  className?: string; // por si quieres ajustar spacing
};

const DEFAULT_PLANS: Plan[] = [
  {
    name: "Básico",
    price: "RD$7,000",
    period: "pago único",
    features: [
      "Desarrollo de sitio web sencillo",
      "Hasta 4 páginas",
      "Configuración de SEO",
      "Integración de correo y WhatsApp",
      "1 Año de Hosting + Dominio Gratis",
    ],
    highlighted: false,
  },
  {
    name: "MiPymes",
    price: "RD$13,000",
    period: "pago único",
    features: [
      "Todo lo del Plan Básico",
      "2 páginas personalizadas adicionales",
      "Configuración de correo y WhatsApp",
      "6 meses de soporte",
      "2 Años de Hosting + Dominio Gratis",
    ],
    highlighted: true,
  },
  {
    name: "Empresarial",
    price: "$A MEDIDA",
    period: "mensual",
    features: [
      "Todo lo del Plan MiPymes",
      "Configuración de campaña en Google Ads",
      "Gestión de campañas",
      "Estrategia adaptada a tu presupuesto",
      "Google Analytics",
    ],
    highlighted: false,
  },
];

const DEFAULT_PROMO: Promo = {
  active: true,
  percent: 20,
  untilLabel: "marzo",
};

export default function PlansOfferSection({
  title = "Planes disponibles",
  subtitle = "Puedes elegir un plan o pedirnos recomendación según tu negocio.",
  whatsappPhone = "18495642217",
  promo = DEFAULT_PROMO,
  plans = DEFAULT_PLANS,
  contactHref = "/contacto",
  className = "",
}: Props) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
          Selección
        </p>
        <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-[#083351]">
          {title}
        </h3>
        <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, index) => {
          const original = parseDOP(plan.price);
          const hasNumericPrice = original !== null;
          const discounted =
            promo.active && hasNumericPrice ? applyDiscount(original!, promo.percent) : null;

          return (
            <div
              key={`${plan.name}-${index}`}
              className={`relative rounded-2xl border p-7 sm:p-8 transition duration-300 ${
                plan.highlighted
                  ? "border-[#083351] bg-[#083351] text-white"
                  : "border-[#e5e5e5] bg-white text-[#083351] hover:border-[#f4832c]"
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
              }}
            >
              {/* Promo pill */}
              {promo.active && (
                <div className="absolute -top-4 left-6 z-20">
                  <div
                    className={`relative overflow-hidden rounded-full border px-4 py-2 text-[11px] sm:text-xs font-semibold tracking-[0.14em] uppercase backdrop-blur-md ${
                      plan.highlighted
                        ? "bg-white/10 border-white/25 text-white/90"
                        : "bg-white border-[#083351]/15 text-[#083351]"
                    }`}
                  >
                    <span className="relative z-10">
                      -{promo.percent}% hasta {promo.untilLabel}
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
                    <h4 className="text-xl font-semibold tracking-tight">{plan.name}</h4>
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
                  {promo.active && hasNumericPrice ? (
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
                    <div className="flex flex-col gap-2">
                      <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>

                      {promo.active && (
                        <div
                          className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold border ${
                            plan.highlighted
                              ? "border-white/20 bg-white/10 text-white/90"
                              : "border-[#f4832c]/25 bg-[#f4832c]/10 text-[#f4832c]"
                          }`}
                        >
                          Ahorra {promo.percent}% del monto final
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
                      <span className={`text-sm ${plan.highlighted ? "text-white/85" : "text-gray-700"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
 

         
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota debajo */}
      <div className="mt-10 mx-auto max-w-3xl text-center">
        <p className="text-sm text-gray-600 leading-relaxed">
          Si tu negocio necesita reservas, catálogo avanzado, múltiples sucursales o campañas, te armamos un plan a medida.
        </p>
      </div>

      {/* Animations local style */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shine {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }
        .animate-shine { animation: shine 1.8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

/** Helpers */
function buildWhatsappUrl(phone: string, plan: { name: string }, promo: Promo) {
  const promoText = promo.active ? ` (con ${promo.percent}% OFF hasta ${promo.untilLabel})` : "";
  const message = `Hola GD Solutions, quiero solicitar el ${plan.name}${promoText}. Mi negocio es: ________.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function parseDOP(price: string): number | null {
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
