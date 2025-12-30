import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/**
 * Home Page - Andrade Cooperativa 83
 * 
 * Design Philosophy: Minimalismo Corporativo Luxuoso
 * 
 * Seções:
 * 1. Header - Navegação fixa com CTA WhatsApp
 * 2. Hero - Headline impactante com imagem profissional
 * 3. How It Works - 4 passos do processo
 * 4. Services - 4 serviços principais
 * 5. Trust - Posicionamento de marca com imagem
 * 6. CTA Final - Chamada para ação em preto e dourado
 * 7. Footer - Informações de contato
 * 8. WhatsApp Button - Botão flutuante
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Services />
      <TrustSection />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
