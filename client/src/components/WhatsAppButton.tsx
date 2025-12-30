import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Floating Button - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Botão fixo no canto inferior direito
 * - Ícone do WhatsApp em amarelo dourado
 * - Animação de pulse sutil
 * - Responsivo e acessível
 */
export default function WhatsAppButton() {
  const whatsappLink =
    "https://wa.me/5522998485266?text=Olá,%20quero%20solicitar%20uma%20entrega";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 md:bottom-6 right-4 md:right-6 z-40 group"
    >
      <div className="relative">
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>

        {/* Button */}
        <div className="relative w-14 md:w-16 h-14 md:h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="w-6 md:w-8 h-6 md:h-8 text-white" />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-16 md:bottom-20 right-0 bg-black text-white text-xs md:text-sm rounded-lg px-3 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco
      </div>
    </a>
  );
}
