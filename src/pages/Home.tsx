import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, Code, Zap, BarChart3, CheckCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // ✅ Promo
  const PROMO = {
    active: true,
    percent: 20,
    untilLabel: "febrero",
  };


  const services = [
    {
      icon: Code,
      title: 'Sitio Web',
      description:
        'Sitios web y aplicaciones a medida construidos con tecnologías modernas para un rendimiento óptimo y diseño atractivo.',
    },
    {
      icon: Zap,
      title: 'Rendimiento',
      description:
        'Sitios web rápidos optimizados para la experiencia del usuario y el posicionamiento en los buscadores de los clientes.',
    },
    {
      icon: BarChart3,
      title: 'Marketing Digital',
      description:
        'Soluciones estratégicas para hacer crecer tu presencia online y conectar con tu audiencia sin mover un dedo.',
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
      price: 'RD$7,000',
      period: 'pago único',
      features: [
        'Hasta 5 páginas',
        'Configuración de SEO',
        'Integración de correo y WhatsApp',
        '6 Meses de Hosting Gratis',
      ],
      highlighted: false,
    },
    {
      name: 'Plan MiPymes',
      price: 'RD$13,000',
      period: 'pago único',
      features: [
        'Todo lo del Plan Básico',
        '2 páginas personalizadas adicionales',
        '6 meses de soporte',
        '1 Año de Hosting Gratis',
      ],
      highlighted: true,
    },
    {
      name: 'Plan Empresarial',
      price: 'A MEDIDA',
      period: 'mensual',
      features: [
        'Todo lo del Plan MiPymes',
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

      
<section
  className="relative bg-[#083351] text-white overflow-hidden"
  style={{
    backgroundImage: "url(/images/hero-bg-1.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* Overlay premium */}
  <div className="absolute inset-0 bg-[#083351]/70"></div>

  {/* Glow + grain sutil */}
  <div className="absolute inset-0 pointer-events-none">
     <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22120%22 height=%22120%22 filter=%22url(%23n)%22 opacity=%220.25%22/%3E%3C/svg%3E')]" />
  </div>

  <div className="relative container pt-20 pb-20 md:pt-36 md:pb-28">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Left: Copy */}
      <div className="lg:col-span-7">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md">
           <span className="text-sm text-white/85">
            Diseño premium • Performance • SEO • WhatsApp listo
          </span>
        </div>

        <h1 className="mt-6 text-[2.6rem] leading-[1.05] md:text-[4.2rem] font-semibold tracking-[-0.02em]">
          Soluciones digitales{" "}
          <span className="text-white/80">para negocios</span>{" "}
          <span className="relative inline-block">
            modernos
            <span className="absolute -bottom-2 left-0 right-0 h-[6px] rounded-full bg-[#f4832c]/70 blur-[0.5px]" />
          </span>
        </h1>

        <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-xl">
          Creamos sitios web con estética limpia y enfoque comercial: rápidos, claros y listos para
          convertir visitas en conversaciones y ventas.
        </p>

        {/* CTA Row */}
        <div className="mt-10 flex sm:flex-row gap-3">
          <Link href="/contacto">
            <a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#083351] px-6 py-4 font-semibold shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-[1.02] no-underline">
              Empezar hoy
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Link>

          <Link href="/planes">
            <a className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-4 font-semibold text-white/90 backdrop-blur-md transition-colors duration-200 hover:bg-white/10 no-underline">
              Ver planes
            </a>
          </Link>
        </div>

        {/* Trust line */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/65">
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
            Entrega rápida
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
            Hosting incluido en planes
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/50" />
            Soporte real
          </div>
        </div>
      </div>

      {/* Right: Premium card / highlights */}
      <div className="lg:col-span-5">
        <div className="relative rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-6 md:p-7 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
          {/* Top gradient border */}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-white/70">Enfoque</p>
              <h3 className="mt-1 text-xl font-semibold tracking-tight">
                Conversión + presencia premium
              </h3>
            </div>
            <div className="rounded-xl bg-[#f4832c]/15 border border-[#f4832c]/30 px-3 py-2 text-sm text-white/85">
              Listo para crecer
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Velocidad</p>
              <p className="mt-1 text-base font-semibold">Carga rápida y optimizada</p>
              <p className="mt-1 text-sm text-white/60">
                Mejores métricas para usuarios y buscadores.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Diseño</p>
              <p className="mt-1 text-base font-semibold">Minimalista, moderno, confiable</p>
              <p className="mt-1 text-sm text-white/60">
                Estética limpia con detalles premium (sin “plantilla genérica”).
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">Contacto</p>
              <p className="mt-1 text-base font-semibold">WhatsApp + Formulario</p>
              <p className="mt-1 text-sm text-white/60">
                El cliente te escribe en segundos (menos fricción).
              </p>
            </div>
          </div>

          {/* Micro-CTA */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="text-sm text-white/65">
              ¿Quieres ver una propuesta rápida?
            </span>
            <Link href="/contacto">
              <a className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/90 no-underline">
                Hablemos
                <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Divider premium (más suave) */}
  <div className="absolute bottom-0 left-0 right-0 h-2 bg-white">
    <div
      className="absolute inset-0"
      style={{
        clipPath: "polygon(0 55%, 100% 12%, 100% 100%, 0 100%)",
      }}
    />
  </div>
</section>





















      {/* Services Overview Section
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
      {/* <section className="py-24 md:py-32 bg-[#f5f5f5]">
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
      </section> */}
 {/*   <section className="py-24 md:py-32 bg-white">
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
      </section>   */}

      {/* <section id="plans" className="py-24 md:py-32 bg-[#f5f5f5]">
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

                 <a
                  href={buildWhatsappUrl(plan)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-6 rounded font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 no-underline bg-[#f4832c] text-white hover:scale-105"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Solicitar Plan
                </a>

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
      </section>   */}

      {/* Services + Why + Clients + Plans (premium, minimal, no shadows) */}
{/* Services Overview Section (Premium) */}
<section className="py-24 md:py-32 bg-white">
  <div className="container">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
        Lo que hacemos
      </p>
      <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-[#083351]">
        Servicios pensados para convertir visitas en clientes
      </h2>
      <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
        Estructura, velocidad y contenido con intención. Menos fricción para el cliente, más
        conversaciones para tu negocio.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="group rounded-2xl border border-[#e5e5e5] bg-white p-8 transition-colors duration-200 hover:border-[#f4832c]"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
            }}
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-[#e5e5e5] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#f4832c]" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#083351]">
                  {service.title}
                </h3>
              </div>
 
            </div>

            <p className="mt-5 text-gray-600 leading-relaxed">{service.description}</p>

            <div className="mt-7 h-px w-full bg-[#e5e5e5] group-hover:bg-[#f4832c]/40 transition-colors" />

            <div className="mt-6 flex items-center justify-between gap-4">
             

              {/* WhatsApp quick CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  "Hola GD Solutions, quiero una propuesta rápida para mi negocio. ¿Podemos hablar?"
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#083351]/20 px-4 py-2 text-sm font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

{/* Why Choose Us Section (Premium) */}
<section className="py-24 md:py-32 bg-[#f5f5f5]">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
      <div className="md:col-span-5">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
          Diferencia GD
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-[#083351]">
          Decisiones de diseño que se sienten
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          El cliente entiende rápido, navega sin dudas y encuentra cómo contactarte sin esfuerzo.
          Ese es el estándar.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contacto" className="inline-flex items-center justify-center rounded-xl border border-[#083351]/20 bg-white px-6 py-3 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]">
              Quiero que me contacten 
          </Link> 
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
              "Hola GD Solutions, ¿pueden mostrarme un ejemplo adaptado a mi negocio?"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#083351] px-6 py-3 font-semibold text-white no-underline transition-colors hover:bg-[#0b3f66]"
          >
            <FaWhatsapp className="w-5 h-5" />
            Pedir ejemplo
          </a>
        </div>
      </div>

      <div className="md:col-span-7">
        <div className="rounded-2xl border border-[#e5e5e5] bg-white p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-[#e5e5e5] p-5 transition-colors duration-200 hover:border-[#f4832c]"
                style={{
                  animation: `fadeInLeft 0.6s ease-out ${index * 0.06}s both`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-9 w-9 rounded-xl border border-[#e5e5e5] flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#f4832c]" />
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 h-px w-full bg-[#e5e5e5]" />

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Te guiamos con un proceso corto y claro: contenido, diseño, revisión y entrega.
            </p>
            <Link href="/planes">
              <a className="text-sm font-semibold text-[#083351] no-underline hover:text-[#f4832c] transition-colors">
                Ver planes →
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Upcoming Clients Section (Premium placeholder) */}
{/* <section className="py-24 md:py-32 bg-white">
  <div className="container">
    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
          Clientes
        </p>
        <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-[#083351]">
          Casos reales, publicados con calma
        </h2>
        <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
          Estamos preparando esta sección con proyectos completos. Si quieres ver ejemplos de tu
          industria, te los compartimos por WhatsApp.
        </p>
      </div>

      <a
        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
          "Hola GD Solutions, ¿pueden compartirme ejemplos similares a mi industria?"
        )}`}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-[#083351]/20 px-6 py-3 font-semibold text-[#083351] no-underline transition-colors hover:border-[#f4832c] hover:text-[#f4832c]"
      >
        <FaWhatsapp className="w-5 h-5" />
        Ver ejemplos
      </a>
    </div>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-2xl border border-[#e5e5e5] bg-white p-6 transition-colors duration-200 hover:border-[#f4832c]"
        >
          <div className="h-10 w-10 rounded-xl border border-[#e5e5e5] flex items-center justify-center text-sm font-semibold text-[#083351]/70">
            {i}
          </div>
          <div className="mt-6 h-px w-full bg-[#e5e5e5]" />
          <p className="mt-5 text-sm font-semibold text-[#083351]">Caso en preparación</p>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">
            Diseño, estructura y contacto directo.
          </p>
        </div>
      ))}
    </div>
  </div>
</section> */}

{/* Plans Section (Premium) */}
<section id="plans" className="py-24 md:py-32 bg-white">
  <div className="container">
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold tracking-[0.18em] text-[#083351]/70 uppercase">
        Planes
      </p>
      <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.02em] text-[#083351]">
        Precios claros, entrega seria
      </h2>
      <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
        Selecciona un plan y lo ajustamos a tu negocio con una propuesta breve y concreta.
      </p>
    </div>

    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {plans.map((plan, index) => {
        // ✅ Promo (usa las mismas constantes/helpers que ya pusimos antes)
        const original = parseDOP(plan.price);
        const hasNumericPrice = original !== null;
        const discounted =
          PROMO.active && hasNumericPrice ? applyDiscount(original!, PROMO.percent) : null;

        return (
          <div
            key={index}
            className={`relative rounded-2xl border p-8 transition duration-300 ${
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
                  <span className="pointer-events-none absolute inset-0 opacity-70">
                    <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shine" />
                  </span>
                </div>
              </div>
            )}
 

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{plan.name}</h3>
                  <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/70" : "text-gray-600"}`}>
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

              {/* ✅ Precio con promo */}
              <div className="mt-8">
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
                  <div className="flex flex-col gap-2">
                    <span className="text-4xl font-semibold tracking-tight">{plan.price}</span>

                    {/* ✅ Plan Empresarial / A medida: mantiene la promo sin monto fijo */}
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

              <div className={`mt-8 h-px w-full ${plan.highlighted ? "bg-white/15" : "bg-[#e5e5e5]"}`} />

              <ul className="mt-7 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#f4832c]" />
                    <span className={`text-sm ${plan.highlighted ? "text-white/85" : "text-gray-700"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ✅ CTA WhatsApp con plan (incluye promo en el mensaje) */}
              <a
                href={buildWhatsappUrl(plan)}
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

              {/* Secondary option */}
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
  </div>

  {/* ✅ IMPORTANTE:
      Asegúrate de tener estos estilos (una sola vez en tu página/layout):
      @keyframes shine { 0% {transform: translateX(-120%);} 100% {transform: translateX(220%);} }
      .animate-shine { animation: shine 1.8s ease-in-out infinite; }
  */}
</section>



{/* Contact (keep your current section below) */}


<section id="contact" className="py-24 md:py-32 bg-[#f5f5f5]">
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
  const WHATSAPP_PHONE = "18495642217";

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


