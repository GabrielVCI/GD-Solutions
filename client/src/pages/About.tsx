import { Target, Lightbulb, Heart, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'wouter';

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

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-2xl">
            Sobre Nosotros
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            Somos un equipo de desarrolladores apasionados por crear 
            experiencias web que te representen en internet.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-8">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                GD Solutions fue fundado con una simple misión: crear experiencia digital de clase mundial en La República Dominicana que ayudan a los negocios a ser exitosos. Nuestro objetivo es demostrar que la excelencia digital tambien puede ser parte de nuestro país.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Cada proyecto que aceptamos es una oportunidad para demostrar nuestro compromiso con esa excelencia. 
              </p>
           
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#083351] to-[#0d4a7a] rounded-lg opacity-10"></div>
              <div className="relative bg-[#f5f5f5] rounded-lg p-12 border border-[#e5e5e5]">
                <div className="space-y-8">
                  <div>
                    <p className="text-5xl font-bold text-[#f4832c] mb-2">50+</p>
                    <p className="text-gray-600">Proyectos Completados</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#f4832c] mb-2">20+</p>
                    <p className="text-gray-600">Clientes Felices</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold text-[#f4832c] mb-2">10+</p>
                    <p className="text-gray-600">Años de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 md:py-32 bg-[#f5f5f5]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Mission */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#083351] mb-4">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Empoderar negocios de todo tipo con soluciones que promueven el crecimiento comercial, asegurar una excelente experiencia de usuario y entregar resultados que pueden ser medidos.
              </p>
            </div>

            {/* Vision */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#083351] mb-4">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser representantes de la presencia digital de negocios de La República Dominicana en internet, siendo reconocidos por la calidad, satisfacción de los clientes y por nuestra honestidad.
              </p>
            </div>

            {/* Values */}
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-[#083351] mb-4">Nuestro Compromiso</h3>
              <p className="text-gray-600 leading-relaxed">
                Nos comprometemos a entregar calidad, mantenemos una comunicación transparente y nos aseguramos de que todo el proceso sea lo más claro posible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estos son los valores principales que nos definen como compañía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
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
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
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
            Trabajemos Juntos
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            ¿Estás listo para ser partner de un equipo apasionado por tu éxito como negocio? Dinos como te podemos ayudar.
          </p>
          <Link href="/#contact">
            <a className="btn-primary inline-flex items-center gap-2 no-underline">
              Contáctanos
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
