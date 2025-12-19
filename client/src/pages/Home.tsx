import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Code, Zap, BarChart3, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Home Page
 * Diseño: Elegancia minimalista con precisión geométrica
 * - Hero con fondo azul oscuro y texto blanco
 * - Vista general de servicios con íconos mínimos
 * - Sección "Por qué elegirnos"
 * - Placeholder de próximos clientes
 * - Sección de planes (CTA a WhatsApp por plan)
 * - Formulario de contacto
 */
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description:
        'Sitios web y aplicaciones a medida construidos con tecnologías modernas para un rendimiento óptimo.',
    },
    {
      icon: Zap,
      title: 'Optimización de Rendimiento',
      description:
        'Sitios web rápidos optimizados para la experiencia del usuario y el posicionamiento en buscadores.',
    },
    {
      icon: BarChart3,
      title: 'Marketing Digital',
      description:
        'Soluciones estratégicas para hacer crecer tu presencia online y conectar con tu audiencia.',
    },
  ];

  const whyChooseUs = [
    'Diseño premium inspirado en líderes de la industria',
    'Comunicación transparente y soporte real',
    'Soluciones escalables para negocios en crecimiento',
    'Desarrollo enfocado en rendimiento',
    'SEO optimizado desde el inicio',
  ];

  const plans = [
    {
      name: 'Plan Básico',
      price: 'RD$8,500',
      period: 'pago único',
      features: [
        'Hasta 5 páginas',
        'Configuración de SEO',
        'Integración de correo y WhatsApp',
        '1 año gratis de Hosting',
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
        '6 meses de soporte',
        '1 año gratis de Hosting',
      ],
      highlighted: true,
    },
    {
      name: 'Plan Empresarial',
      price: 'A MEDIDA',
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

  const WHATSAPP_PHONE = '18495642217'; // RD +1

  const buildWhatsappUrl = (plan: { name: string; price: string }) => {
    const msg =
      `Hola GD Solutions, me interesa el ${plan.name} (${plan.price}).\n\n` +
      `Mi negocio se llama: ________\n` +
      `Tipo de negocio: ________\n` +
      `Quiero una web para: ________\n\n` +
      `¿Podemos coordinar una llamada o una propuesta?`;

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-[#083351] text-white overflow-hidden"
        style={{
          backgroundImage: 'url(/images/hero-bg-1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-[#083351]/85"></div>
        <div className="relative container py-32 md:py-48 flex flex-col items-start justify-center min-h-[600px] md:min-h-[700px]">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Soluciones digitales para negocios modernos
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Creamos sitios web premium y experiencias digitales que impulsan el crecimiento. Con la
              confianza de negocios en toda Latinoamérica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contacto">
                <a className="btn-primary flex items-center justify-center gap-2 no-underline">
                  Empezar hoy
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Link>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{
            clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)',
          }}
        ></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
              Nuestros servicios
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones digitales completas adaptadas a las necesidades de tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-premium group hover:border-[#f4832c] transition-all duration-300"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="mb-6">
                    <Icon className="w-12 h-12 text-[#f4832c] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#083351] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-[#f5f5f5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-8">
                ¿Por qué elegir GD Solutions?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Combinamos excelencia en diseño, experiencia técnica y pensamiento estratégico para
                entregar sitios web que no solo se ven increíbles, sino que también generan resultados
                reales para tu negocio.
              </p>
            </div>

            <div className="space-y-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <CheckCircle className="w-6 h-6 text-[#f4832c] flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Clients Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
            Clientes con los que hemos trabajado
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Empresas de todos los tamaños confían en nosotros. Más clientes próximamente.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-24 bg-[#f5f5f5] rounded-lg flex items-center justify-center border border-[#e5e5e5] hover:border-[#f4832c] transition-colors duration-300"
              >
                <p className="text-gray-400 font-semibold">Cliente {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 md:py-32 bg-[#f5f5f5]">
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

                {/* CTA: WhatsApp con el plan preseleccionado */}
                <a
                  href={buildWhatsappUrl(plan)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-6 rounded font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 no-underline bg-[#f4832c] text-white hover:scale-105"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Solicitar Plan
                </a>

                {/* Opción secundaria */}
                <Link href="/contacto">
                  <a
                    className={`block text-center text-sm mt-3 no-underline hover:underline ${
                      plan.highlighted ? 'text-gray-200' : 'text-gray-600'
                    }`}
                  >
                    Prefiero que me contacten (formulario)
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
                Contáctanos
              </h2>
              <p className="text-lg text-gray-600">
                ¿Listo para empezar tu proyecto? Hablemos de cómo podemos ayudarte.
              </p>
            </div>

            <ContactForm />
          </div>
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
