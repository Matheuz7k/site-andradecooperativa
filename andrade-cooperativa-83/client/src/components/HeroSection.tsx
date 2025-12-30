import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SplashPattern from "@/components/SplashPattern";

/**
 * Hero Section - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Headline monumental em Poppins Bold (3.5rem)
 * - Subheadline clara em Inter Regular
 * - Dois CTAs: principal (amarelo) e secundário (preto)
 * - Imagem profissional de motoboy em ação
 * - Layout assimétrico com espaço negativo
 */
export default function HeroSection() {
  const whatsappLink =
    "https://wa.me/5522998485266?text=Olá,%20quero%20solicitar%20uma%20entrega";

  return (
    <section id="home" className="pt-24 pb-12 md:pt-40 md:pb-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-20 -mt-10 opacity-10">
        <SplashPattern size="large" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-10 opacity-10">
        <SplashPattern size="large" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 md:order-1">
            {/* Lema */}
            <div className="inline-block bg-yellow-50 border-2 border-yellow-400 rounded-full px-4 py-2 mb-4">
              <p
                className="text-sm font-semibold text-yellow-700"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                ⚡ A Vida Toda - 24/7
              </p>
            </div>

            <div className="space-y-4">
              <h1
                className="text-4xl md:text-6xl font-bold leading-tight text-black"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Entregas rápidas e profissionais para quem não pode esperar
              </h1>
              <p
                className="text-base md:text-xl text-gray-600 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Serviço de motoboy confiável, ágil e transparente. Sua entrega
                em segurança, sempre no prazo.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Solicitar Entrega
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Falar com Atendimento
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-4 md:gap-8 pt-6 md:pt-8 border-t border-gray-200 flex-wrap">
              <div>
                <p
                  className="text-2xl md:text-3xl font-bold text-yellow-600"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  24/7
                </p>
                <p
                  className="text-xs md:text-sm text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Atendimento
                </p>
              </div>
              <div>
                <p
                  className="text-2xl md:text-3xl font-bold text-yellow-600"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  100%
                </p>
                <p
                  className="text-xs md:text-sm text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Confiável
                </p>
              </div>
              <div>
                <p
                  className="text-2xl md:text-3xl font-bold text-yellow-600"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  Rápido
                </p>
                <p
                  className="text-xs md:text-sm text-gray-600"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Garantido
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-3xl"></div>
              <img
                src="/images/hero-motoboy.jpg"
                alt="Motoboy profissional em ação"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
        {/* Decorative Line */}
        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>
    </section>
  );
}
