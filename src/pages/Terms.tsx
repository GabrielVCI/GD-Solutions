import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
    <Navbar></Navbar>
        <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
 
        <h1 className="text-4xl font-bold mb-10 text-[#083351]">
          Términos y Condiciones de Uso
        </h1>

        <article className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold mb-2 text-2xl">1. Uso del sitio web</h2>
            <p>
              El acceso y uso de este sitio web implica la aceptación plena de
              los presentes Términos y Condiciones. El usuario se compromete a
              utilizar el sitio de forma lícita y conforme a la normativa
              vigente.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">2. Propiedad intelectual</h2>
            <p>
              Todo el contenido de este sitio web, incluyendo textos, diseños,
              logotipos, imágenes y código, es propiedad de GD Solutions o se
              utiliza con la debida autorización. Queda prohibida su
              reproducción, distribución o modificación sin consentimiento
              previo.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">3. Responsabilidad</h2>
            <p>
              GD Solutions no garantiza que el sitio web esté libre de errores o
              interrupciones, pero realizará esfuerzos razonables para mantener
              su correcto funcionamiento.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">4. Contenido informativo</h2>
            <p>
              El contenido de este sitio web tiene fines informativos y
              comerciales y no constituye asesoría legal, financiera ni técnica
              específica.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">5. Limitación de responsabilidad</h2>
            <p>
              GD Solutions no será responsable por daños directos o indirectos
              derivados del uso o la imposibilidad de uso del sitio web,
              incluyendo pérdida de datos o interrupciones del servicio.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">6. Modificaciones</h2>
            <p>
              GD Solutions se reserva el derecho de modificar estos Términos y
              Condiciones en cualquier momento y sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-2xl">7. Legislación aplicable</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República
              Dominicana, sin perjuicio de la aplicación de normativas
              internacionales cuando corresponda.
            </p>
          </section>
        </article>
      </div>
    </section>
    <Footer></Footer>
    </>

  );
}
