import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Header Component - Minimalismo Corporativo Luxuoso
 * 
 * Design Philosophy:
 * - Logo tipográfico em Poppins Bold
 * - Menu minimalista com navegação clara
 * - CTA principal em amarelo dourado
 * - Fixo no topo com sombra sutil
 * - Responsivo com menu mobile
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappLink =
    "https://wa.me/5522998485266?text=Olá,%20quero%20solicitar%20uma%20entrega";

  const navItems = [
    { label: "Início", href: "#home" },
    { label: "Como Funciona", href: "#how-it-works" },
    { label: "Serviços", href: "#services" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="w-full px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <img
            src="/images/logo-andrade.png"
            alt="Andrade Cooperativa 83"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition-all duration-300 hover:shadow-lg"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Chamar no WhatsApp
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-medium text-gray-700 hover:text-yellow-600 transition-colors py-2"
                style={{ fontFamily: "Inter, sans-serif" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                Chamar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
