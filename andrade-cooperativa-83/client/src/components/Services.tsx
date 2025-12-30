import { Zap, Briefcase, Users, Handshake } from "lucide-react";
import SplashPattern from "@/components/SplashPattern";

/**
 * Services Section - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Cards elegantes com ícones modernos
 * - Hover effect com elevação e cor
 * - Layout em grid responsivo
 * - Descrições claras de cada serviço
 */
export default function Services() {
  const services = [
    {
      icon: Zap,
      title: "Entregas Rápidas Urbanas",
      description:
        "Serviço de entrega express para documentos, pequenos pacotes e produtos em geral na região urbana.",
    },
    {
      icon: Briefcase,
      title: "Entregas Comerciais",
      description:
        "Soluções profissionais para empresas que precisam de entregas confiáveis e no prazo.",
    },
    {
      icon: Users,
      title: "Motoboy Fixo para Empresas",
      description:
        "Contrate um motoboy dedicado para sua empresa com disponibilidade exclusiva.",
    },
    {
      icon: Handshake,
      title: "Parcerias e Contratos",
      description:
        "Programas de parceria com descontos especiais para entregas recorrentes.",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-28 bg-pattern-logo relative overflow-hidden">
      <div className="absolute top-10 right-0 -mr-20 opacity-10">
        <SplashPattern size="large" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-black mb-4"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Icon Container */}
                <div className="w-16 h-16 bg-yellow-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3
                  className="text-2xl font-semibold text-black mb-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-0 bg-yellow-400 group-hover:w-12 transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
