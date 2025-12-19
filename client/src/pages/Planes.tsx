import { CheckCircle, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

/**
 * Plans Page
 * Design: Minimalist Elegance with Geometric Precision
 * - Hero section
 * - Plans grid (same data as Home)
 * - CTA to contact
 */
export default function Plans() {
  const plans = [
    {
      name: 'Plan Básico',
      price: 'RD$8,500',
      period: 'pago único',
      features: [
        'Desarrollo de sitio web sencillo',
        'Hasta 5 páginas',
        'Configuración de SEO',
        'Integración de correo y WhatsApp',
      ],
      highlighted: false,
    },
    {
      name: 'Plan MyPymes',
      price: 'RD$13,000',
      period: 'pago único',
      features: [
        'Todo lo del Plan Básico',
        '2 páginas personalizadas adicionales',
        'Configuración de correo y WhatsApp',
        '6 meses de soporte',
      ],
      highlighted: true,
    },
    {
      name: 'Plan Empresarial',
      price: '$A MEDIDA',
      period: 'mensual',
      features: [
        'Todo lo del Plan MyPymes',
        'Configuración de campaña en Google Ads',
        'Gestión de campañas',
        'Estrategia adaptada a tu presupuesto',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-[#083351] text-white overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: 'url(/images/hero-bg-1.png)', // si quieres, cambia a /images/plans-bg.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#083351]/85"></div>
        <div className="relative container flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-3xl">
            Planes diseñados para tu negocio
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Elige el plan ideal para tu etapa actual. Sitios rápidos, diseño premium y una experiencia
            que convierte visitantes en clientes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/#contact">
              <a className="btn-primary inline-flex items-center gap-2 no-underline">
                Hablar con nosotros
                <ArrowRight className="w-5 h-5" />
              </a>
            </Link>
 
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-24 md:py-32 bg-[#f5f5f5]">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
              Nuestros planes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Elige el plan perfecto para tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#083351] text-white shadow-2xl scale-105'
                    : 'bg-white border border-[#e5e5e5] text-[#083351]'
                }`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <p className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.period}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#f4832c]" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/#contact">
                  <a
                    className={`w-full py-3 px-6 rounded font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 no-underline ${
                      plan.highlighted
                        ? 'bg-[#f4832c] text-white hover:scale-105'
                        : 'bg-[#f4832c] text-white hover:scale-105'
                    }`}
                  >
                     Solicitar Plan
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
            ¿No estás seguro cuál elegir?
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Te ayudamos a escoger el plan correcto según tu tipo de negocio, objetivo y presupuesto.
          </p>

          <Link href="/#contact">
            <a className="btn-primary inline-flex items-center gap-2 no-underline">
              Solicitar recomendación
              <ArrowRight className="w-5 h-5" />
            </a>
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
