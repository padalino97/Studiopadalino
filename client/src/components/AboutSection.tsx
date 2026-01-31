/*
  Design: Industrial Brutalism Meets Safety
  Component: About Section
  - Layout asimmetrico
  - Immagine con overlay
  - Punti di forza
*/

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Award,
  Users,
  Clock,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

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

const certifications = [
  "Consulente Sicurezza sul Lavoro",
  "RSPP Esterno Qualificato",
  "Formatore Sicurezza Abilitato",
  "Consulente Sistemi di Gestione",
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-24 bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/quality-certification.jpg"
                  alt="Consulenza professionale"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-primary p-6 shadow-xl max-w-xs">
                <p className="font-display text-4xl text-secondary mb-1">15+</p>
                <p className="text-secondary font-semibold">Anni di Esperienza</p>
                <p className="text-secondary/70 text-sm mt-2">
                  Al servizio delle aziende siciliane per la sicurezza e la qualità.
                </p>
              </div>

              {/* Safety Stripe Accent */}
              <div className="absolute top-0 left-0 w-4 h-full safety-stripes" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Chi Siamo
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-secondary mb-6">
              DOTT. ALESSANDRO
              <br />
              <span className="text-primary">GIUSEPPE PADALINO</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
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

            {/* Certifications */}
            <div className="mb-8">
              <h3 className="font-display text-xl text-secondary mb-4">QUALIFICHE</h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-secondary">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center flex-shrink-0">
                    <strength.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary">{strength.title}</h4>
                    <p className="text-muted-foreground text-sm">{strength.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-secondary hover:bg-primary/90 font-bold gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                PARLIAMO DEL TUO PROGETTO
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
