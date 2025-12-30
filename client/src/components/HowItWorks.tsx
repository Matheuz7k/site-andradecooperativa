import { MessageCircle, MapPin, Bike, CheckCircle } from "lucide-react";

/**
 * How It Works Section - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Cards com números em círculos
 * - Ícones modernos e limpos
 * - Layout em grid responsivo
 * - Descrições claras e concisas
 * - Linhas conectoras entre steps (desktop)
 */
export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Entre em contato",
      description: "Envie uma mensagem pelo WhatsApp com seus dados",
      icon: MessageCircle,
    },
    {
      number: 2,
      title: "Informe coleta e destino",
      description: "Especifique o local de coleta e entrega",
      icon: MapPin,
    },
    {
      number: 3,
      title: "Motoboy realiza entrega",
      description: "Nosso profissional busca e entrega seu pedido",
      icon: Bike,
    },
    {
      number: 4,
      title: "Serviço concluído",
      description: "Entrega segura e comprovada",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-28 bg-pattern-logo">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Como Funciona
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {/* Connector Line (Desktop Only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-4 w-8 h-px bg-yellow-400"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                    <span
                      className="text-black font-bold text-lg"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-yellow-600 mb-4" />

                  {/* Content */}
                  <h3
                    className="text-xl font-semibold text-black mb-3"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-600 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
