/*
  Design: Industrial Brutalism Meets Safety
  Component: Header/Navigation
  - Logo con strisce safety
  - Navigazione sticky
  - CTA WhatsApp sempre visibile
*/

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Servizi", href: "/#servizi" },
  { label: "Chi Siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="font-display text-2xl text-secondary">SP</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 safety-stripes-thin" />
            </div>
            <div className="hidden sm:block">
              <p className={`font-display text-xl tracking-wider ${isScrolled ? "text-white" : "text-white text-shadow"}`}>
                STUDIO PADALINO
              </p>
              <p className={`text-xs font-medium ${isScrolled ? "text-primary" : "text-primary"}`}>
                SICUREZZA & QUALITÀ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-display text-lg tracking-wide transition-colors hover:text-primary ${
                  isScrolled ? "text-white" : "text-white text-shadow"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button
                className="bg-primary text-secondary hover:bg-primary/90 font-semibold gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden md:inline">WhatsApp</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? "text-white" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t-4 border-primary"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-2xl text-white hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4"
              >
                <Button className="w-full bg-primary text-secondary hover:bg-primary/90 font-semibold gap-2 text-lg py-6">
                  <MessageCircle className="w-5 h-5" />
                  Contattaci su WhatsApp
                </Button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
