import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

/**
 * CTA Final Section - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Fundo preto profundo (#0B0B0B)
 * - Texto e botão em amarelo dourado
 * - Mensagem de fechamento forte
 * - Botão grande e chamativo
 * - Alta conversão
 */
export default function CTAFinal() {
  const whatsappLink =
    "https://wa.me/5522998485266?text=Olá,%20quero%20solicitar%20uma%20entrega";

  return (
    <section id="cta-final" className="py-12 md:py-28" style={{ backgroundColor: "#0B0B0B" }}>
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 md:space-y-8 max-w-3xl mx-auto px-4">
          {/* Headline */}
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: "Poppins, sans-serif", color: "#F1C40F" }}
          >
            Não deixe sua entrega para depois
          </h2>

          {/* Subheadline */}
          <p
            className="text-base md:text-2xl leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif", color: "#E5E5E5" }}
          >
            Solicite agora mesmo pelo WhatsApp e receba sua entrega com
            segurança e agilidade.
          </p>

          {/* CTA Button */}
          <div className="pt-2 md:pt-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="px-6 md:px-10 py-5 md:py-7 text-base md:text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:scale-105 w-full md:w-auto"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  backgroundColor: "#F1C40F",
                  color: "#0B0B0B",
                }}
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Atendimento imediato via WhatsApp
              </Button>
            </a>
          </div>

          {/* Trust Badge */}
          <div
            className="pt-6 md:pt-8 border-t"
            style={{ borderColor: "rgba(241, 196, 15, 0.2)" }}
          >
            <p
              className="text-xs md:text-sm"
              style={{ fontFamily: "Inter, sans-serif", color: "#A0A0A0" }}
            >
              ✓ Resposta em menos de 5 minutos • ✓ Serviço 24/7 • ✓ Garantia
              de qualidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
