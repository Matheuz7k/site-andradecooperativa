import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

/**
 * Footer Component - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Fundo branco com bordas sutis
 * - Links clicáveis para WhatsApp e Instagram
 * - Informações de contato claras
 * - Visual limpo e organizado
 */
export default function Footer() {
  const whatsappLink =
    "https://wa.me/5522998485266?text=Olá,%20quero%20solicitar%20uma%20entrega";
  const instagramLink = "https://instagram.com/andrade_cooperativa83";

  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img
              src="/images/logo-andrade.png"
              alt="Andrade Cooperativa 83"
              className="h-10 md:h-12 w-auto mb-4"
            />
            <p
              className="text-gray-600 text-xs md:text-sm leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Serviços de motoboy e entregas rápidas com profissionalismo e
              confiança.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className="font-semibold text-black mb-4 text-sm md:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contato
            </h3>
            <div className="space-y-2 md:space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span style={{ fontFamily: "Inter, sans-serif" }} className="text-xs md:text-sm">
                  (22) 99848-5266
                </span>
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span style={{ fontFamily: "Inter, sans-serif" }} className="text-xs md:text-sm">
                  @andrade_cooperativa83
                </span>
              </a>
            </div>
          </div>

          {/* Service Hours */}
          <div>
            <h3
              className="font-semibold text-black mb-4 text-sm md:text-base"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Horário de Atendimento
            </h3>
            <p
              className="text-gray-600 text-xs md:text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Segunda a Domingo
              <br />
              24 horas por dia
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-gray-600 text-xs md:text-sm text-center md:text-left"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              © 2024 Andrade Cooperativa 83. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
