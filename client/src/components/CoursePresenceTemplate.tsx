/*
  Design: Authoritative Consulting - Practical Focus
  Component: CoursePresenceTemplate
  - Template per corsi in presenza con pratica
  - Enfasi su attrezzature reali e campo prove
  - Urgenza normativa e scadenze
  - CTA strategiche per attivazione rapida
*/

import { MessageCircle, Phone, MapPin, Wrench, Users, AlertCircle, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CoursePresenceProps {
  title: string;
  h1Title: string;
  duration: string;
  updateFrequency: string;
  description: string;
  targetAudience: string;
  normativeRef: string;
  sanctions: { min: string; max: string };
  location: string;
  equipment: string[];
  advantages: string[];
  maxParticipants: number;
  nextDates: string[];
  urgencyAlert?: string;
}

const WHATSAPP_LINK = "https://wa.me/393465835685?text=Sono%20interessato%20al%20corso%20in%20presenza";
const PHONE_NUMBER = "+393465835685";

export default function CoursePresenceTemplate({
  title,
  h1Title,
  duration,
  updateFrequency,
  description,
  targetAudience,
  normativeRef,
  sanctions,
  location,
  equipment,
  advantages,
  maxParticipants,
  nextDates,
  urgencyAlert,
}: CoursePresenceProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20 md:h-24" />

      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-orange-50 to-amber-50 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">CORSO IN PRESENZA - PRATICA OBBLIGATORIA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {h1Title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Formazione pratica con attrezzature reali conforme al Nuovo Accordo Stato-Regioni 2025
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
              <h2 className="text-2xl font-bold text-foreground mb-4">Cos'è il Corso {title}</h2>
              <p className="text-base text-foreground leading-relaxed mb-4">
                {description}
              </p>
              <p className="text-base text-foreground leading-relaxed">
                Il corso è obbligatorio per <strong>{targetAudience}</strong> secondo l'articolo {normativeRef} del D.Lgs 81/08. 
                Include prova pratica obbligatoria che si svolge nel nostro campo prove attrezzato a Catania con attrezzature reali. 
                Rivolto a professionisti e aziende catanesi, garantisce abilitazione immediata all'utilizzo. 
                Il Nuovo Accordo 2025 conferma l'obbligo di formazione pratica. La mancata formazione espone a sanzioni da <strong>€{sanctions.min}</strong> a <strong>€{sanctions.max}</strong> 
                e responsabilità penali in caso infortunio.
              </p>
            </section>

            {/* Urgency Alert */}
            {urgencyAlert && (
              <section className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-red-900 mb-2">⚠️ {urgencyAlert}</h3>
                  </div>
                </div>
              </section>
            )}

            {/* Scheda Corso */}
            <section className="bg-white border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">🏗️ SCHEDA CORSO PRATICO</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Durata</p>
                    <p className="text-lg font-semibold text-foreground">{duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Sede</p>
                    <p className="text-lg font-semibold text-foreground">{location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Gruppo</p>
                    <p className="text-lg font-semibold text-foreground">Max {maxParticipants} partecipanti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Attestato</p>
                    <p className="text-lg font-semibold text-foreground">Rilascio immediato</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Attrezzature */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">🏗️ Attrezzature Disponibili</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <Wrench className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Vantaggi Campo Prove */}
            <section>
              <h3 className="text-2xl font-bold text-foreground mb-6">Vantaggi del Nostro Campo Prove</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-foreground font-medium">{advantage}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Prossime Date */}
            <section className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4">📅 Prossime Date Disponibili</h3>
              <div className="space-y-2">
                {nextDates.map((date, index) => (
                  <div key={index} className="flex items-center gap-3 text-green-800">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">{date}</span>
                  </div>
                ))}
              </div>
              <p className="text-green-700 text-sm mt-4">Posti limitati - Prenota subito via WhatsApp</p>
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
                Prenota su WhatsApp
              </a>

              {/* CTA Telefono */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-center transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Chiama per Info
              </a>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-3">✅ Cosa Ricevi</h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Pratica su macchine reali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Istruttori esperti settore</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Attestato immediato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ripetizione gratuita se necessaria</span>
                  </li>
                </ul>
              </div>

              {/* Location Info */}
              <div className="bg-white border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold text-foreground mb-1">Sede Catania</p>
                    <p className="text-muted-foreground">{location}</p>
                    <p className="text-muted-foreground mt-2">🚗 Parcheggio gratuito</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
