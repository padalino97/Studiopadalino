/*
  Design: Authoritative Consulting
  Component: Header
  - Logo + Nome Studio
  - Navigazione con dropdown servizi
  - CTA WhatsApp
*/

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const services = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro", description: "DVR, RSPP, valutazione rischi" },
  { title: "Medicina del Lavoro", href: "/servizi/medicina-lavoro", description: "Visite mediche, sorveglianza sanitaria" },
  { title: "Formazione", href: "/servizi/formazione", description: "Corsi obbligatori e attestati" },
  { title: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie", description: "Apertura e accreditamento strutture" },
  { title: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso", description: "ISO 9001, 14001, 45001" },
  { title: "HACCP", href: "/servizi/haccp", description: "Sicurezza alimentare" },
  { title: "Privacy GDPR", href: "/servizi/privacy-gdpr", description: "Protezione dati personali" },
  { title: "Sicurezza Cantieri", href: "/servizi/sicurezza-cantieri", description: "CSP, CSE, coordinamento" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="font-display text-xl md:text-2xl text-white font-bold">SP</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg md:text-xl font-bold text-gray-900">
                Studio Padalino
              </p>
              <p className="text-xs text-muted-foreground">Consulenza Sicurezza & Qualità</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button
                variant="ghost"
                className={cn(
                  "font-medium",
                  location === "/" && "text-primary"
                )}
              >
                Home
              </Button>
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">
                    Servizi
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                            >
                              <div className="text-sm font-medium leading-none mb-1 text-gray-900">
                                {service.title}
                              </div>
                              <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <button onClick={() => handleNavClick("/#chi-siamo")}>
              <Button variant="ghost" className="font-medium">
                Chi Siamo
              </Button>
            </button>

            <button onClick={() => handleNavClick("/#contatti")}>
              <Button variant="ghost" className="font-medium">
                Contatti
              </Button>
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a href="tel:+393465835685" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">346 583 5685</span>
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="whatsapp-btn gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Home
                </Button>
              </Link>

              <div className="py-2">
                <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Servizi
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="ghost" className="w-full justify-start font-medium pl-6 text-sm">
                      {service.title}
                    </Button>
                  </Link>
                ))}
              </div>

              <button onClick={() => handleNavClick("/#chi-siamo")}>
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Chi Siamo
                </Button>
              </button>

              <button onClick={() => handleNavClick("/#contatti")}>
                <Button variant="ghost" className="w-full justify-start font-medium">
                  Contatti
                </Button>
              </button>

              <div className="pt-4 border-t mt-2">
                <a href="tel:+393465835685">
                  <Button variant="outline" className="w-full gap-2 mb-2">
                    <Phone className="w-4 h-4" />
                    346 583 5685
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
