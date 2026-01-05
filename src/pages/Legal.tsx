import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
 
export default function Legal() {
  return (
    <>
   
    <Navbar></Navbar>
    <section className="bg-white text-gray-800 py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-10 text-[#083351]">
          Políticas y Términos
        </h1>

        {/* POLÍTICA DE PRIVACIDAD */}
        <article className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            Política de Privacidad
          </h2>

          <p className="mb-4">
            En GD Solutions valoramos y respetamos la privacidad de nuestros
            usuarios. Esta Política de Privacidad describe cómo recopilamos,
            utilizamos y protegemos la información personal proporcionada a
            través de nuestro sitio web.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            1. Información que recopilamos
          </h3>
          <p className="mb-4">
            Recopilamos información personal únicamente cuando el usuario la
            proporciona de forma voluntaria a través de formularios de contacto
            o comunicaciones directas. Esta información puede incluir nombre,
            correo electrónico, número de teléfono y cualquier otro dato que el
            usuario decida compartir.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            2. Uso de la información
          </h3>
          <p className="mb-4">
            La información recopilada se utiliza exclusivamente para responder
            solicitudes, brindar información sobre nuestros servicios, mejorar
            la experiencia del usuario y cumplir con obligaciones legales cuando
            sea necesario.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            3. Protección de datos
          </h3>
          <p className="mb-4">
            Implementamos medidas técnicas y organizativas razonables para
            proteger la información personal contra accesos no autorizados,
            pérdida, alteración o divulgación indebida.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            4. Compartición de información
          </h3>
          <p className="mb-4">
            GD Solutions no vende, alquila ni comparte información personal con
            terceros, salvo cuando sea requerido por ley o autorizado
            expresamente por el usuario.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            5. Cookies
          </h3>
          <p className="mb-4">
            Este sitio web puede utilizar cookies y tecnologías similares para
            mejorar la navegación y analizar el uso del sitio. El usuario puede
            configurar su navegador para rechazarlas, aunque esto podría afectar
            algunas funcionalidades.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            6. Enlaces a sitios externos
          </h3>
          <p className="mb-4">
            Nuestro sitio puede contener enlaces a sitios web de terceros. GD
            Solutions no se responsabiliza por el contenido ni por las políticas
            de privacidad de dichos sitios.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            7. Derechos del usuario
          </h3>
          <p className="mb-4">
            El usuario puede solicitar la modificación o eliminación de sus
            datos personales contactándonos a través de los medios disponibles
            en el sitio web.
          </p>

          <h3 className="font-semibold mt-6 mb-2 text-2xl">
            8. Cambios en la política
          </h3>
          <p>
            GD Solutions se reserva el derecho de modificar esta Política de
            Privacidad en cualquier momento. Los cambios serán publicados en
            esta misma página.
          </p>
        </article>

        
      </div>
    </section>

    <Footer></Footer>
     </>
  );
}
