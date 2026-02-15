/*
  Design: Authoritative Consulting - Compliance Focus
  Component: CourseOnlineTemplate
  - Template per corsi online con compliance normativa
  - Enfasi su urgenza normativa e scadenze
  - CTA strategiche (WhatsApp, telefono)
  - SEO ottimizzato per ricerche locali Catania
*/

import { MessageCircle, Phone, Clock, CheckCircle, AlertCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseOnlineProps {
  title: string;
  h1Title: string;
  duration: string;
  updateFrequency: string;
  description: string;
  targetAudience: string;
  normativeRef: string;
  sanctions: { min: string; max: string };
  advantages: string[];
  modulesList: string[];
  nextStartDate: string;
}

const WHATSAPP_LINK = "https://wa.me/393465835685?text=Sono%20interessato%20al%20corso%20online%20di%20formazione";
const PHONE_NUMBER = "+393465835685";

export default function CourseOnlineTemplate({
  title,
  h1Title,
  duration,
  updateFrequency,
  description,
  targetAudience,
  normativeRef,
  sanctions,
  advantages,
  modulesList,
  nextStartDate,
}: CourseOnlineProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-amber-700">CORSO ONLINE - E-LEARNING 24/7</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {h1Title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Aggiornamento obbligatorio conforme al Nuovo Accordo Stato-Regioni 2025 e D.Lgs 81/08
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduzione */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cos'è l'Aggiornamento {title}</h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                {description}
              </p>
              <p className="text-base text-foreground leading-relaxed">
                L'aggiornamento è obbligatorio ogni <strong>{updateFrequency}</strong> secondo l'articolo {normativeRef} del D.Lgs 81/08. 
                Rivolto a <strong>{targetAudience}</strong> di Catania e provincia, può essere completato comodamente online dalla tua azienda, 
                risparmiando tempo e costi di trasferta. Il corso è conforme al Nuovo Accordo Stato-Regioni 2025 e rilascia attestato valido su territorio nazionale.
              </p>
            </section>

            {/* Alert Sanzioni */}
            <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">⚠️ Attenzione: Sanzioni per Mancata Formazione</h3>
                  <p className="text-red-800 text-sm">
                    La mancata formazione espone a sanzioni da <strong>€{sanctions.min}</strong> a <strong>€{sanctions.max}</strong> 
                    oltre responsabilità penali in caso di infortunio. Verifica subito la scadenza della tua formazione.
                  </p>
                </div>
              </div>
            </section>

            {/* Scheda Corso */}
            <section className="bg-white border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">📋 SCHEDA CORSO ONLINE</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Durata</p>
                    <p className="text-lg font-semibold text-foreground">{duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Modalità</p>
                    <p className="text-lg font-semibold text-foreground">E-learning 24/7 + tutor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Piattaforma</p>
                    <p className="text-lg font-semibold text-foreground">PC/Tablet/Smartphone</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Attestato</p>
                    <p className="text-lg font-semibold text-foreground">Rilascio entro 24h</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Vantaggi Online */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">Vantaggi della Formazione Online</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{advantage}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Moduli del Corso */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">Contenuti del Corso</h3>
              <div className="space-y-3">
                {modulesList.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white border border-border rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-foreground font-medium pt-0.5">{module}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Prossima Data */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-2">🚀 Prossima Partenza</h3>
              <p className="text-green-800 font-semibold text-lg">{nextStartDate}</p>
              <p className="text-green-700 text-sm mt-2">Attivazione in 5 minuti via WhatsApp</p>
            </section>
          </div>

          {/* Right Column - Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* CTA WhatsApp */}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5 inline mr-2" />
                Inizia Subito su WhatsApp
              </a>

              {/* CTA Telefono */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Chiama per Info Immediate
              </a>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">✅ Perché Scegliere Noi</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Docenti qualificati D.L. 6-3-2013</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Conforme Nuovo Accordo 2025</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Attestato valido Italia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Supporto tutor 9-18</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-white border border-border rounded-lg p-4 text-center text-sm">
                <p className="text-muted-foreground mb-2">Hai domande?</p>
                <p className="font-semibold text-foreground mb-3">Contattaci Subito</p>
                <a href={`tel:${PHONE_NUMBER}`} className="text-primary font-bold hover:underline">
                  {PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
