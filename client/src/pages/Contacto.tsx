import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

/**
 * Contact Page
 * - Hero section
 * - Contact form
 */
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative bg-[#083351] text-white overflow-hidden py-24 md:py-32"
        style={{
          backgroundImage: 'url(/images/hero-bg-1.png)', // puedes cambiarlo por /images/contact-bg.png
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[#083351]/85"></div>
        <div className="relative container flex flex-col items-start justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight max-w-2xl">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            ¿Listo para empezar tu proyecto? Hablemos de cómo podemos ayudarte.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-[#083351] mb-6">
                Escríbenos
              </h2>
              <p className="text-lg text-gray-600">
                Completa el formulario y te responderemos lo antes posible.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
