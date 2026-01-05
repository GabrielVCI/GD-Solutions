import { Code, Zap, BarChart3, Globe, Shield, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';
import { FaWhatsapp } from "react-icons/fa";

/**
 * Services Page
 * Design: Minimalist Elegance with Geometric Precision
 * - Detailed breakdown of services offered
 * - Clear explanations with icons
 * - Structured and easy to scan
 */
export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Sitios web a la medida construidas con las últimas tecnologías. Creamos diseño adaptado para todos los dispositivos, aseguramos la carga rápida del sitio lo que a su vez asegura una mejor experiencia de usuario, lo que se traduce en confianza de tus clientes hacia tu negocio.',
      features: [
        'Diseño Responsive',
        'Frameworks Modernos',
        'Arquitectura Clean Code',
        'Optimización de Rendimiento',
        'Estructura SEO-Friendly',
      ],
    },
    {
      icon: Smartphone,
      title: 'Diseño Mobile-First',
      description: 'Todos los sitios web que construimos son diseñados primero pensando en como se verá en los teléfonos de todos tus clientes, asegurando que funcione perfectamente en los mismos, también en tablets y Laptops.',
      features: [
        'Optimización Móvil',
        'Interfaz Touch-Friendly',
        'Tiempos de Cargas Mínimos',
        'Mejora Progresiva (Progressive Enhancement)',
        'Compatibilidad con Múltiples Navegadores',
      ],
    },
    {
      icon: Zap,
      title: 'Optimización de Rendimiento',
      description: 'Optimizamos cada aspecto de tu sitio web para asegurar la velocidad y el rendimiento. Sitios web más rápidos se posicionan mejor en los motores de búsqueda y brindan mejor experiencia de usuario.', 
      features: [
        'Optimización de Imágenes',
        'Minificación de Código',
        'Estrategias para manejar el Caching',
        'Integración con CDN',
        'Core Web Vitals',
      ],
    },
    {
      icon: Globe,
      title: 'Servicios SEO',
      description: 'Nuestra forma de trabajar, enfocada en el SEO de los sitios web, asegura que tu sitio sea bien posicionado en los motores de búsqueda. Implementamos buenas prácticas desde el principio, no déspues.', 
      features: [
        'Keyword Research',
        'On-Page SEO',
        'SEO Técnico',
        'Optimización Meta',
        'Sitemap y Robots',
      ],
    },
    {
      icon: BarChart3,
      title: 'Marketing Digital',
      description: 'Marketing Digital estratégico para hacer crecer tu prensencia en línea. Te creamos campañas de Google Ads para ayudarte a alcanzar a tus potenciales clientes y audiencia deseada.',
      features: [
        'Configuración de Google Ads',
        'Manejo de Campañas',
        'Analytics Tracking',
        'Optimización de las Conversiones',
        'Manejo de Presupuesto',
      ],
    },
    {
      icon: Shield,
      title: 'Seguridad y Mantenimiento',
      description: 'Mantén seguro tu sitio web. Proveémos soporte continuo, actualizaciones de seguridad y mantenimiento para asegurarnos de que tu sitio se mantenga siempre protegido y listo para ser tu carta de presentación en internet.',
      features: [
        'Certificados SSL',
        'Auditorias de Seguridad',
        'Actualizaciones Regulares',
        'Backup', 
        'Soporte'
      ],
    },
  ];

  const WHATSAPP_PHONE = "18495642217";

 return (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />

    {/* Hero Section (Premium + Responsive) */}
    <section
      className="relative bg-[#083351] text-white overflow-hidden"
      style={{
        backgroundImage: "url(/images/hero-bg-1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay + gradients (sin sombras) */}
      <div className="absolute inset-0 bg-[#083351]/80" />
      <div className="absolute inset-0 pointer-events-none">
       </div>

      <div className="relative container pt-28 pb-30 md:pt-36 md:pb-38">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-white/85 backdrop-blur-md">
             Servicios
          </p>

          <h1 className="mt-6 text-[2.25rem] leading-[1.06] sm:text-[2.9rem] md:text-[3.8rem] lg:text-[4.5rem] font-semibold tracking-[-0.02em] max-w-2xl">
            Nuestros Servicios
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            Soluciones digitales diseñadas para dar presencia real a tu negocio. Una página de
            Instagram no reemplaza un sitio web.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hola GD Solutions, quiero una propuesta para mi negocio. ¿Podemos hablar?"
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#083351] px-6 py-4 font-semibold no-underline transition-colors hover:text-[#f4832c]"
            >
              <FaWhatsapp className="w-5 h-5" />
              Hablar por WhatsApp
            </a>

            <Link href="/contacto" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md no-underline transition-colors hover:bg-white/10">             
                Prefiero el formulario 
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

    {/* Services Grid (Premium + Responsive) */}
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
            Alcance
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em] text-[#083351]">
            Lo que entregamos, sin vueltas
          </h2>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            Cada servicio incluye estructura, contenido guiado y una experiencia pensada para que el
            cliente actúe.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#e5e5e5] bg-white p-6 sm:p-8 transition-colors duration-200 hover:border-[#f4832c]"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl border border-[#e5e5e5] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#f4832c]" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#083351]">
                      {service.title}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#083351]/55">
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-full bg-[#e5e5e5]" />

                <div className="mt-6">
                  <p className="text-xs font-semibold text-[#083351]/70 uppercase tracking-[0.18em]">
                    Incluye
                  </p>

                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                      >
                        <span className="mt-2 h-1.5 w-1.5 bg-[#f4832c] rounded-full flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mini CTA per card (responsive, no shadow) */}
                <div className="mt-8 flex  sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                      `Hola GD Solutions, me interesa el servicio: ${service.title}. ¿Podemos hablar?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#083351] px-5 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#0b3f66]"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Solicitar
                  </a>

                  <Link href="/contacto">
                    <a className="inline-flex items-center justify-center rounded-xl border border-[#083351]/20 px-5 py-3 text-sm font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]">
                      Formulario
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* CTA Section (Premium + Responsive) */}
    <section className="py-16 sm:py-20 md:py-28 bg-[#083351] text-white">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-white/70 uppercase">
            Siguiente paso
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
            ¿Listo para iniciar?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/75 leading-relaxed">
            Cuéntanos tu negocio y el objetivo del sitio. Te respondemos con una propuesta breve y
            clara.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                "Hola GD Solutions, quiero iniciar. Mi negocio es: ________. Necesito una web para: ________."
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
