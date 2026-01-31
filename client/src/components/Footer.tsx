/*
  Design: Industrial Brutalism Meets Safety
  Component: Footer
  - Informazioni legali
  - Link rapidi
  - Social/Contatti
*/

import { Link } from "wouter";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Sicurezza sul Lavoro", href: "/#servizi" },
  { label: "Medicina del Lavoro", href: "/#servizi" },
  { label: "Formazione", href: "/#servizi" },
  { label: "Chi Siamo", href: "/#chi-siamo" },
  { label: "Contatti", href: "/#contatti" },
];

const services = [
  "DVR e Valutazione Rischi",
  "RSPP Esterno",
  "Visite Mediche",
  "Corsi di Formazione",
  "Certificazioni ISO",
  "HACCP",
  "Privacy GDPR",
  "Sicurezza Cantieri",
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
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="font-display text-2xl text-secondary">SP</span>
              </div>
              <div>
                <p className="font-display text-xl text-white tracking-wider">
                  STUDIO PADALINO
                </p>
                <p className="text-primary text-xs font-semibold">SICUREZZA & QUALITÀ</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Consulenza professionale per la sicurezza sul lavoro, medicina del lavoro, 
              autorizzazioni sanitarie e sistemi di gestione qualità.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 font-semibold text-sm hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Contattaci su WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">LINK RAPIDI</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">SERVIZI</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick("/#servizi")}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">CONTATTI</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Via Altarelli 10<br />
                  San Pietro Clarenza (CT) 95055
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+393465835685"
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  +39 346 583 5685
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:studiosicurezzapadalino@gmail.com"
                  className="text-gray-400 hover:text-primary transition-colors text-sm break-all"
                >
                  studiosicurezzapadalino@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Studio Sicurezza Padalino. Tutti i diritti riservati.
            </p>
            <p className="text-gray-500 text-sm">
              P.IVA IT05843750877
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
