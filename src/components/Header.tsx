import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import ThemeAwareLogo from "@/components/ThemeAwareLogo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <ThemeAwareLogo className="h-10 w-10 transform group-hover:scale-110 transition-transform duration-300" />
            <span className="text-3xl font-bold dark:text-[#ffffff] text-primary">ziomasoft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              About
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-4">
                      <div className="grid grid-cols-2 gap-4">
                        {servicesData.slice(0, 4).map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="group block p-4 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                          >
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 transition-all">
                                <service.icon className="text-primary-foreground" size={20} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-sm mb-1">
                                  {service.title}
                                </div>
                                <p className="text-xs opacity-90 line-clamp-2">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/services"
                        className="block mt-4 pt-4 border-t text-sm text-primary font-medium hover:underline"
                      >
                        View all services →
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[700px] p-4">
                      <div className="grid grid-cols-3 gap-4">
                        {productsData.slice(0, 6).map((product) => (
                          <Link
                            key={product.id}
                            to={`/products/${product.id}`}
                            className="group block rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift"
                          >
                            <div className="relative h-32 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute top-2 right-2">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground">
                                  {product.category}
                                </span>
                              </div>
                            </div>
                            <div className="p-3">
                              <div className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                                {product.title}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/products"
                        className="block mt-4 pt-4 border-t text-sm text-primary font-medium hover:underline"
                      >
                        View all products →
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contact"
              className="px-4 py-2 text-sm font-medium transition-colors hover:text-primary text-foreground/80"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button & Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="secondary">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                Services
              </Link>
              <Link
                to="/products"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                Products
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary text-foreground/80"
              >
                Contact
              </Link>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
