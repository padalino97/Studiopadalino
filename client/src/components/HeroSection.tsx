/*
  Design: Authoritative Consulting
  Component: Hero Section
  - Titolo professionale
  - Sottotitolo descrittivo
  - Due CTA (WhatsApp + Servizi)
  - Badge credenziali
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Award, Users } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const credentials = [
  { icon: Shield, text: "RSPP Qualificato" },
  { icon: Award, text: "Formatore Abilitato" },
  { icon: Users, text: "15+ Anni Esperienza" },
];

export default function HeroSection() {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Dott. Alessandro Giuseppe Padalino
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Consulenza Professionale per la{" "}
            <span className="text-primary">Sicurezza sul Lavoro</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Supportiamo le aziende nella gestione della sicurezza, medicina del lavoro, 
            autorizzazioni sanitarie e sistemi di gestione qualità. 
            Un partner affidabile per la conformità normativa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-btn gap-2 text-lg px-8 py-6">
                <MessageCircle className="w-5 h-5" />
                Richiedi Consulenza Gratuita
              </Button>
            </a>
            <Link href="/#servizi">
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
                Scopri i Servizi
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {credentials.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <item.icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">15+</p>
            <p className="text-sm text-muted-foreground">Anni di Esperienza</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">500+</p>
            <p className="text-sm text-muted-foreground">Aziende Assistite</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">100%</p>
            <p className="text-sm text-muted-foreground">Conformità Garantita</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-1">24h</p>
            <p className="text-sm text-muted-foreground">Risposta Rapida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
