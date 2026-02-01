import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProposalForm from "../components/ProposalForm";
import PlansOfferSection from "../components/PlansOfferSection";

export default function Propuesta() {
  return (
    <>
      <Navbar />

      <section className="bg-white text-gray-800 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* TÍTULO */}
          <header className="mb-12">
            <h1 className="text-4xl font-bold mb-4 text-[#083351]">
              Propuesta y Proceso de Trabajo
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Esta página resume claramente qué te vamos a entregar, cómo será el proceso,
              los tiempos de entrega y cómo recopilaremos la información necesaria para
              iniciar tu proyecto con GD Solutions.
            </p>
          </header>

          {/* 1) PRESENTACIÓN */}
          <article className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[#083351]">
              1. Presentación
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="mb-4 leading-relaxed">
                En <span className="font-semibold">GD Solutions</span> ayudamos a negocios
                a verse más profesionales en internet y a convertir visitas en clientes.
                Creamos páginas web modernas, rápidas y enfocadas en resultados, con una
                experiencia clara en celular y computadora.
              </p>

              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Diseño moderno y profesional alineado a tu marca.</li>
                <li>Enfoque en claridad: qué haces, para quién y cómo contactarte.</li>
                <li>Optimización básica para velocidad y SEO.</li>
                <li>Integración de WhatsApp y llamadas a la acción.</li>
              </ul>

              <div className="mt-6 rounded-xl bg-white border border-gray-200 p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Nota:</span> Esta página es
                  una guía de trabajo. Los detalles finales se ajustan según el tipo de
                  proyecto y el contenido disponible.
                </p>
              </div>
            </div>
          </article>

          {/* 2) QUÉ OFRECEMOS / ENTREGABLES / TIEMPO */}
          <article className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[#083351]">
              2. Qué ofrecemos, qué entregamos y tiempo de entrega
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Qué vamos a construir</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Página web con secciones clave (inicio, servicios, contacto).</li>
                  <li>Diseño responsive (perfecta en celular).</li>
                  <li>Botón de WhatsApp / llamadas a la acción.</li>
                  <li>Formulario de contacto o captación (si aplica).</li>
                  <li>Optimización básica de SEO (títulos, meta, estructura).</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-xl mb-3">Tiempo de entrega</h3>
                <p className="text-gray-700 leading-relaxed">
                  El tiempo estimado de entrega es de{" "}
                  <span className="font-semibold">1 semana</span>, contando desde el momento
                  en que recibimos el primer pago y toda la información necesaria (logo,
                  textos, fotos, links, etc.).
                </p>

                <div className="mt-4 rounded-xl bg-white border border-gray-200 p-4">
                  <p className="text-sm text-gray-600">
                    Si el contenido llega incompleto o tarde, el tiempo puede extenderse.
                    Te avisamos de inmediato si algo falta.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-3">Proceso de trabajo (paso a paso)</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>
                  <span className="font-semibold">Recolección de información</span>.
                </li>
                <li>
                  <span className="font-semibold">Propuesta visual</span>.
                </li>
                <li>
                  <span className="font-semibold">Desarrollo</span>.
                </li>
                <li>
                  <span className="font-semibold">Revisión</span>.
                </li>
                <li>
                  <span className="font-semibold">Entrega</span>.
                </li>
              </ol>
            </div>
          </article>

          {/* 3) PAGOS */}
          <article className="mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-[#083351]">
              3. Pagos
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="mb-4 leading-relaxed text-gray-700">
                Para iniciar el proyecto requerimos un{" "}
                <span className="font-semibold">50%</span> de anticipo. El{" "}
                <span className="font-semibold">50% restante</span> se paga al finalizar la
                página, justo antes de la entrega/publicación final.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Pago inicial</p>
                  <p className="text-xl font-semibold text-[#083351]">50%</p>
                  <p className="text-sm text-gray-600 mt-1">Para iniciar el desarrollo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Pago final</p>
                  <p className="text-xl font-semibold text-[#083351]">50%</p>
                  <p className="text-sm text-gray-600 mt-1">Al finalizar y aprobar</p>
                </div>
              </div>

               <div className="mt-10">
                    <PlansOfferSection
                        title="Planes (con oferta)"
                        subtitle="Elige el plan que mejor se adapte a tu negocio. Si necesitas algo más, lo hacemos a medida."
                        whatsappPhone="18495642217"
                        promo={{ active: true, percent: 20, untilLabel: "marzo" }}
                        contactHref="/contacto"
                    />
                </div>

              <p className="text-sm text-gray-600 mt-6">
                * Si el proyecto incluye extras (páginas adicionales, e-commerce, sistemas,
                catálogos avanzados), se cotiza aparte.
              </p>
            </div>
          </article>

          {/* 4) FORMULARIO (componente) */}
          <article className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-[#083351]">
              4. Recolección de información y sugerencias de diseño/contenido
            </h2>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Completa este formulario para que podamos preparar el diseño y el contenido
                de tu página. Mientras más claro esté, más rápido avanzamos.
              </p>

              <ProposalForm />
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
