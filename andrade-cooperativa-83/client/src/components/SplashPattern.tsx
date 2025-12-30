/**
 * Splash Pattern Component - Padrão de salpicos em amarelo dourado
 * 
 * Elemento visual inspirado na identidade visual da Andrade Cooperativa 83
 * Usado como decoração em seções para adicionar dinamismo e energia
 */
interface SplashPatternProps {
  className?: string;
  opacity?: number;
  size?: "small" | "medium" | "large";
}

export default function SplashPattern({
  className = "",
  opacity = 0.15,
  size = "medium",
}: SplashPatternProps) {
  const sizeMap = {
    small: "w-32 h-32",
    medium: "w-48 h-48",
    large: "w-96 h-96",
  };

  return (
    <svg
      className={`${sizeMap[size]} ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Padrão de salpicos em amarelo */}
      <g fill="#F1C40F">
        {/* Salpicos maiores */}
        <circle cx="50" cy="30" r="8" />
        <circle cx="150" cy="40" r="7" />
        <circle cx="30" cy="100" r="6" />
        <circle cx="170" cy="110" r="8" />
        <circle cx="80" cy="170" r="7" />
        <circle cx="140" cy="160" r="6" />

        {/* Salpicos médios */}
        <circle cx="100" cy="20" r="5" />
        <circle cx="20" cy="60" r="4" />
        <circle cx="180" cy="80" r="5" />
        <circle cx="40" cy="140" r="4" />
        <circle cx="160" cy="130" r="5" />
        <circle cx="120" cy="180" r="4" />

        {/* Salpicos pequenos */}
        <circle cx="70" cy="50" r="3" />
        <circle cx="130" cy="60" r="3" />
        <circle cx="50" cy="120" r="2" />
        <circle cx="150" cy="150" r="3" />
        <circle cx="90" cy="140" r="2" />
        <circle cx="110" cy="70" r="3" />

        {/* Formas abstratas */}
        <path d="M 60 80 Q 65 75 70 80 Q 65 85 60 80" fill="#F1C40F" />
        <path d="M 140 90 Q 145 85 150 90 Q 145 95 140 90" fill="#F1C40F" />
      </g>
    </svg>
  );
}
