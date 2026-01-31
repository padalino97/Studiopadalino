/*
  Design: Authoritative Consulting
  Component: About Section
  - Informazioni sul professionista
  - Qualifiche e competenze
  - Punti di forza
*/

import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Award, Users, Clock, MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const qualifications = [
  "Consulente Sicurezza sul Lavoro",
  "RSPP Esterno Qualificato",
  "Formatore Sicurezza Abilitato",
  "Consulente Sistemi di Gestione ISO",
  "Consulente HACCP",
  "Consulente Privacy GDPR",
];

const strengths = [
  {
    icon: Award,
    title: "Professionalità Certificata",
    description: "Competenze certificate e aggiornamento continuo sulle normative vigenti.",
  },
  {
    icon: Users,
    title: "Approccio Personalizzato",
    description: "Soluzioni su misura per ogni tipologia di azienda e settore produttivo.",
  },
  {
    icon: Clock,
    title: "Assistenza Continua",
    description: "Supporto costante e reperibilità per ogni esigenza della tua azienda.",
  },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="section-padding bg-gray-50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-primary font-semibold mb-2">Chi Siamo</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dott. Alessandro Giuseppe Padalino
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Lo Studio Sicurezza Padalino è un punto di riferimento per le aziende che cercano 
              un partner affidabile per la gestione della sicurezza sul lavoro, la medicina del lavoro 
              e i sistemi di gestione qualità.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Con sede a San Pietro Clarenza (CT), offriamo consulenza professionale a imprese 
              di ogni dimensione e settore, garantendo conformità normativa, efficienza operativa 
              e tutela dei lavoratori. Il nostro approccio è basato sulla competenza, la trasparenza 
              e la disponibilità costante verso i nostri clienti.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4">Qualifiche</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qual, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700">{qual}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 mb-6">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900">Sede Operativa</p>
                <p className="text-sm text-muted-foreground">Via Altarelli 10, San Pietro Clarenza (CT) 95055</p>
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="whatsapp-btn gap-2">
                <MessageCircle className="w-5 h-5" />
                Contattaci per una Consulenza
              </Button>
            </a>
          </div>

          {/* Strengths Cards */}
          <div className="space-y-6">
            {strengths.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Experience Card */}
            <div className="bg-primary p-6 rounded-xl text-white">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="font-display text-4xl font-bold">15+</p>
                  <p className="text-sm text-blue-100">Anni</p>
                </div>
                <div className="h-16 w-px bg-blue-400" />
                <div>
                  <p className="font-semibold mb-1">Anni di Esperienza</p>
                  <p className="text-sm text-blue-100">
                    Al servizio delle aziende siciliane per la sicurezza e la qualità.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
