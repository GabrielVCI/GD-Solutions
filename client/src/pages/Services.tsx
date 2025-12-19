import { Code, Zap, BarChart3, Globe, Shield, Smartphone } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#083351] text-white overflow-hidden py-24 md:py-32"        
        style={{
          backgroundImage: 'url(/images/hero-bg-1.png)', // si quieres, cambia a /images/plans-bg.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="absolute inset-0 bg-[#083351]/85"></div>
        <div className="relative container flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-2xl">
           Nuestros Servicios
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Soluciones digitales diseñadas para ayudar a tu negocio y darte presencia en línea. Una página de Instagram NO BASTA.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 md:py-32 bg-white" >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-premium"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="mb-6">
                    <Icon className="w-16 h-16 text-[#f4832c]" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#083351] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#083351] uppercase tracking-wide">
                      Características Principales
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-2 h-2 bg-[#f4832c] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-[#083351] text-white">
        <div className="container text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            ¿Estás listo para iniciar?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Comunícate con nosotros y déjanos ayudarte a hacer tu negocio crecer en línea.
          </p>
          <Link href="/#contact">
            <a className="btn-primary inline-flex items-center gap-2 no-underline">
              Contáctanos Hoy
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
