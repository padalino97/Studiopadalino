/*
  Design: Authoritative Consulting - Enhanced
  Component: Footer
  - Design moderno con gradienti
  - Layout migliorato
  - Effetti visivi
*/

import { Link } from "wouter";
import { MessageCircle, Phone, Mail, MapPin, ArrowRight, Shield } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Chi Siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
];

const services = [
  { label: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { label: "Medicina del Lavoro", href: "/servizi/medicina-lavoro" },
  { label: "Formazione", href: "/servizi/formazione" },
  { label: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie" },
  { label: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso" },
  { label: "HACCP", href: "/servizi/haccp" },
  { label: "Privacy GDPR", href: "/servizi/privacy-gdpr" },
  { label: "Sicurezza Cantieri", href: "/servizi/sicurezza-cantieri" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 mb-16 shadow-2xl shadow-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                Hai bisogno di una consulenza?
              </h3>
              <p className="text-blue-100">
                Contattaci oggi stesso per una consulenza gratuita e senza impegno.
              </p>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Scrivici su WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary/25">
                <span className="font-display text-xl font-bold">SP</span>
              </div>
              <div>
                <p className="font-display text-lg font-bold">Studio Padalino</p>
                <p className="text-xs text-gray-400">Consulenza Sicurezza & Qualità</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Consulenza professionale per la sicurezza sul lavoro, medicina del lavoro, 
              autorizzazioni sanitarie e sistemi di gestione qualità.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4 text-primary" />
              <span>Partner affidabile dal 2009</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Servizi
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" />
              Contatti
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Via+Altarelli+10+San+Pietro+Clarenza+CT+95055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">
                    Via Altarelli 10<br />
                    San Pietro Clarenza (CT) 95055
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+393465835685"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm">+39 346 583 5685</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:studiosicurezzapadalino@gmail.com"
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-gray-300 text-sm break-all">studiosicurezzapadalino@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Studio Sicurezza Padalino. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-500 text-sm">
                P.IVA IT05843750877
              </p>
              <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
              <p className="text-gray-500 text-sm hidden md:block">
                Dott. Alessandro Giuseppe Padalino
              </p>
            </div>
          </div>
          {/* Legal Links */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 bg-gray-600 rounded-full hidden md:block" />
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
