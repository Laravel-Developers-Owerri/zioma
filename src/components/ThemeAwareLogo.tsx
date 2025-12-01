import { useEffect, useState } from "react";
import logoLight from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";

interface ThemeAwareLogoProps {
  className?: string;
  alt?: string;
}

const ThemeAwareLogo = ({ className = "h-10 w-10", alt = "Ziomasoft Logo" }: ThemeAwareLogoProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  }, []);

  return (
    <img 
      src={isDark ? logoDark : logoLight} 
      alt={alt} 
      className={className}
    />
  );
};

export default ThemeAwareLogo;
