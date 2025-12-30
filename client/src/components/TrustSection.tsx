import { CheckCircle2, Clock, Shield, MessageSquare } from "lucide-react";

/**
 * Trust Section - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Seção com fundo branco limpo
 * - Ícones com cores douradas
 * - Layout com imagem e texto lado a lado
 * - Posicionamento profissional e confiável
 */
export default function TrustSection() {
  const trustPoints = [
    {
      icon: Clock,
      title: "Atendimento Rápido",
      description: "Resposta imediata e agendamento flexível",
    },
    {
      icon: Shield,
      title: "Motoboys Experientes",
      description: "Profissionais treinados e confiáveis",
    },
    {
      icon: CheckCircle2,
      title: "Compromisso com Prazos",
      description: "Entrega sempre no horário combinado",
    },
    {
      icon: MessageSquare,
      title: "Comunicação Transparente",
      description: "Você acompanha cada etapa da entrega",
    },
  ];

  return (
    <section id="trust" className="py-12 md:py-28 bg-pattern-logo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl blur-3xl"></div>
              <img
                src="/images/trust-reliability.jpg"
                alt="Time profissional de motoboys"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2
                className="text-3xl md:text-5xl font-bold text-black mb-4"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Por que confiar em nós?
              </h2>
              <div className="w-16 h-1 bg-yellow-400 rounded-full"></div>
            </div>

            {/* Trust Points */}
            <div className="space-y-4 md:space-y-6">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-yellow-600 mt-1" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-semibold text-black"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Institutional Text */}
            <p
              className="text-sm md:text-base text-gray-700 leading-relaxed pt-4 border-t border-gray-200"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A Andrade Cooperativa 83 é uma empresa de entregas profissional
              comprometida com a excelência no serviço. Com motoboys experientes
              e tecnologia moderna, garantimos que sua entrega chegará segura e
              no prazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
