import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const phone = "18495642217"; // RD con código de país (1) para wa.me
  const message = "Hola GD Solutions, me interesa una página web. ¿Podemos hablar?";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chatea por WhatsApp"
      className="
        fixed right-5 bottom-5 z-50
        w-14 h-14 rounded-full
        bg-[#25D366] text-white
        flex items-center justify-center
        shadow-lg hover:shadow-xl
        transition-transform duration-200 hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-[#25D366]/30
      "
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  );
}
