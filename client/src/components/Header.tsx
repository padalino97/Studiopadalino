/*
  Design: Authoritative Consulting - Enhanced
  Component: Header
  - Logo con gradiente
  - Navigazione con dropdown servizi e icone
  - CTA WhatsApp prominente
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
import { 
  Menu, X, Phone, MessageCircle, Shield, Stethoscope, 
  GraduationCap, Building2, Award, UtensilsCrossed, Lock, HardHat 
} from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const services = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro", description: "DVR, RSPP, valutazione rischi", icon: Shield, color: "text-blue-500" },
  { title: "Medicina del Lavoro", href: "/servizi/medicina-lavoro", description: "Visite mediche, sorveglianza sanitaria", icon: Stethoscope, color: "text-emerald-500" },
  { title: "Formazione", href: "/servizi/formazione", description: "Corsi obbligatori e attestati", icon: GraduationCap, color: "text-amber-500" },
  { title: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie", description: "Apertura e accreditamento strutture", icon: Building2, color: "text-rose-500" },
  { title: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso", description: "ISO 9001, 14001, 45001", icon: Award, color: "text-purple-500" },
  { title: "HACCP", href: "/servizi/haccp", description: "Sicurezza alimentare", icon: UtensilsCrossed, color: "text-orange-500" },
  { title: "Privacy GDPR", href: "/servizi/privacy-gdpr", description: "Protezione dati personali", icon: Lock, color: "text-cyan-500" },
  { title: "Sicurezza Cantieri", href: "/servizi/sicurezza-cantieri", description: "CSP, CSE, coordinamento", icon: HardHat, color: "text-slate-500" },
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
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5" 
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 group-hover:shadow-primary/40 transition-shadow">
              <span className="font-display text-xl md:text-2xl text-white font-bold">SP</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
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
                  "font-medium hover:bg-primary/10 hover:text-primary",
                  location === "/" && "text-primary bg-primary/5"
                )}
              >
                Home
              </Button>
            </Link>

            {/* Services Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium hover:bg-primary/10 hover:text-primary">
                    Servizi
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[550px] gap-2 p-4 md:grid-cols-2">
                      {services.map((service) => (
                        <li key={service.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="flex items-start gap-3 select-none rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-gray-50 focus:bg-gray-50 group/item"
                            >
                              <div className={cn("w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover/item:bg-white group-hover/item:shadow-md transition-all", service.color)}>
                                <service.icon className="w-5 h-5" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold leading-none mb-1 text-gray-900 group-hover/item:text-primary transition-colors">
                                  {service.title}
                                </div>
                                <p className="line-clamp-1 text-xs leading-snug text-muted-foreground">
                                  {service.description}
                                </p>
                              </div>
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
              <Button variant="ghost" className="font-medium hover:bg-primary/10 hover:text-primary">
                Chi Siamo
              </Button>
            </button>

            <button onClick={() => handleNavClick("/#contatti")}>
              <Button variant="ghost" className="font-medium hover:bg-primary/10 hover:text-primary">
                Contatti
              </Button>
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2">
            <a href="tel:+393465835685" className="hidden md:flex">
              <Button variant="outline" size="sm" className="gap-2 border-gray-200 hover:border-primary hover:text-primary">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">346 583 5685</span>
              </Button>
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0d9668] text-white shadow-lg shadow-emerald-500/25 border-0">
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
          <div className="lg:hidden py-4 border-t bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-1">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start font-medium hover:bg-primary/10 hover:text-primary">
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
                    <Button variant="ghost" className="w-full justify-start font-medium pl-4 text-sm hover:bg-primary/10 hover:text-primary gap-3">
                      <service.icon className={cn("w-4 h-4", service.color)} />
                      {service.title}
                    </Button>
                  </Link>
                ))}
              </div>

              <button onClick={() => handleNavClick("/#chi-siamo")}>
                <Button variant="ghost" className="w-full justify-start font-medium hover:bg-primary/10 hover:text-primary">
                  Chi Siamo
                </Button>
              </button>

              <button onClick={() => handleNavClick("/#contatti")}>
                <Button variant="ghost" className="w-full justify-start font-medium hover:bg-primary/10 hover:text-primary">
                  Contatti
                </Button>
              </button>

              <div className="pt-4 border-t mt-2 px-2">
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
