/*
  Design: Authoritative Consulting
  Component: Services Section
  - Griglia servizi con card professionali
  - Link alle pagine dedicate
  - Hover effect elegante
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Stethoscope,
  GraduationCap,
  Building2,
  Award,
  UtensilsCrossed,
  Lock,
  HardHat,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Sicurezza sul Lavoro",
    description: "DVR, RSPP esterno, valutazione rischi specifici, POS, PSC, PIMUS. Assistenza completa per la conformità al D.Lgs 81/08.",
    href: "/servizi/sicurezza-lavoro",
    badge: "D.Lgs 81/08",
  },
  {
    icon: Stethoscope,
    title: "Medicina del Lavoro",
    description: "Nomina medico competente, visite mediche preventive e periodiche, protocolli sanitari, giudizi di idoneità.",
    href: "/servizi/medicina-lavoro",
    badge: "Sorveglianza Sanitaria",
  },
  {
    icon: GraduationCap,
    title: "Formazione",
    description: "Corsi obbligatori per lavoratori, preposti, dirigenti, RSPP, RLS, antincendio e primo soccorso. Attestati validi.",
    href: "/servizi/formazione",
    badge: "Corsi Certificati",
  },
  {
    icon: Building2,
    title: "Autorizzazioni Sanitarie",
    description: "Pratiche per apertura, adeguamento e accreditamento di strutture sanitarie. Consulenza requisiti D.A. 20/2024.",
    href: "/servizi/autorizzazioni-sanitarie",
    badge: "Strutture Mediche",
  },
  {
    icon: Award,
    title: "Sistemi di Qualità ISO",
    description: "Implementazione e mantenimento ISO 9001, ISO 14001, ISO 45001, ISO 37001. Audit interni e preparazione certificazione.",
    href: "/servizi/qualita-iso",
    badge: "Certificazioni",
  },
  {
    icon: UtensilsCrossed,
    title: "HACCP",
    description: "Manuali di autocontrollo, formazione alimentaristi, analisi di laboratorio, assistenza durante i controlli ASP.",
    href: "/servizi/haccp",
    badge: "Sicurezza Alimentare",
  },
  {
    icon: Lock,
    title: "Privacy GDPR",
    description: "Adeguamento al Regolamento Europeo, analisi compliance, documentazione, formazione e nomina DPO esterno.",
    href: "/servizi/privacy-gdpr",
    badge: "Reg. UE 2016/679",
  },
  {
    icon: HardHat,
    title: "Sicurezza Cantieri",
    description: "Coordinamento CSP e CSE, redazione PSC, fascicolo dell'opera, sopralluoghi e verifiche periodiche in cantiere.",
    href: "/servizi/sicurezza-cantieri",
    badge: "Coordinamento",
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold mb-2">I Nostri Servizi</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluzioni Complete per la Tua Azienda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi di consulenza per garantire 
            la sicurezza, la qualità e la conformità normativa della tua attività.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <div className="service-card h-full group cursor-pointer">
                {/* Badge */}
                <span className="badge-regulation mb-4 inline-block">
                  {service.badge}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Link */}
                <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                  Scopri di più
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
