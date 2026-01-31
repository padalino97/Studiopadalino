/*
  Design: Industrial Brutalism Meets Safety
  Component: Features Section
  - Sezioni alternate con immagini
  - Dettagli approfonditi sui servizi principali
*/

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const features = [
  {
    title: "SICUREZZA SUL LAVORO",
    subtitle: "D.Lgs 81/08 e s.m.i.",
    description:
      "La sicurezza sul lavoro non è solo un obbligo di legge, ma un investimento per il futuro della tua azienda. Offriamo un servizio completo che include la redazione del Documento di Valutazione dei Rischi (DVR), la valutazione di rischi specifici (rumore, vibrazioni, stress lavoro-correlato, chimico, biologico), la nomina come RSPP esterno e l'assistenza durante le ispezioni degli organi di vigilanza.",
    image: "/images/hero-safety.jpg",
    points: [
      "Documento di Valutazione dei Rischi (DVR)",
      "Valutazione rischi specifici",
      "RSPP Esterno",
      "POS, PSC, PIMUS per cantieri",
      "Assistenza ispezioni ASP/ITL",
    ],
    reverse: false,
  },
  {
    title: "MEDICINA DEL LAVORO",
    subtitle: "Sorveglianza Sanitaria",
    description:
      "La sorveglianza sanitaria è fondamentale per tutelare la salute dei lavoratori e prevenire le malattie professionali. Collaboriamo con medici competenti qualificati per garantire visite mediche preventive e periodiche, la definizione di protocolli sanitari personalizzati e l'emissione di giudizi di idoneità alla mansione specifica.",
    image: "/images/medical-consultation.jpg",
    points: [
      "Nomina Medico Competente",
      "Visite mediche preventive e periodiche",
      "Protocolli sanitari personalizzati",
      "Giudizi di idoneità",
      "Gestione cartelle sanitarie",
    ],
    reverse: true,
  },
  {
    title: "FORMAZIONE",
    subtitle: "Corsi Obbligatori e Aggiornamenti",
    description:
      "La formazione è un pilastro fondamentale della prevenzione. Organizziamo corsi di formazione obbligatoria per tutte le figure aziendali: lavoratori (rischio basso, medio, alto), preposti, dirigenti, RLS, addetti antincendio e primo soccorso. I corsi sono disponibili in aula, in videoconferenza o in modalità e-learning.",
    image: "/images/training-session.jpg",
    points: [
      "Formazione lavoratori generale e specifica",
      "Corsi preposti e dirigenti",
      "Addetti antincendio e primo soccorso",
      "RLS e aggiornamenti",
      "Attestati validi su tutto il territorio nazionale",
    ],
    reverse: false,
  },
  {
    title: "SICUREZZA CANTIERI",
    subtitle: "Coordinamento CSP/CSE",
    description:
      "Per i cantieri edili offriamo servizi di coordinamento della sicurezza in fase di progettazione (CSP) e di esecuzione (CSE). Redigiamo il Piano di Sicurezza e Coordinamento (PSC), il fascicolo dell'opera e effettuiamo sopralluoghi periodici per verificare l'applicazione delle misure di sicurezza previste.",
    image: "/images/construction-safety.jpg",
    points: [
      "Coordinatore Sicurezza Progettazione (CSP)",
      "Coordinatore Sicurezza Esecuzione (CSE)",
      "Piano di Sicurezza e Coordinamento (PSC)",
      "Fascicolo dell'Opera",
      "Sopralluoghi e verifiche in cantiere",
    ],
    reverse: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              Approfondimenti
            </span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-secondary mb-4">
            I NOSTRI SERVIZI NEL DETTAGLIO
          </h2>
        </motion.div>

        {/* Features */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                feature.reverse ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`relative ${feature.reverse ? "lg:col-start-2" : ""}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
                </div>
                {/* Accent */}
                <div
                  className={`absolute ${
                    feature.reverse ? "-left-4" : "-right-4"
                  } top-4 bottom-4 w-4 safety-stripes`}
                />
              </div>

              {/* Content */}
              <div className={feature.reverse ? "lg:col-start-1 lg:row-start-1" : ""}>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                  {feature.subtitle}
                </span>
                <h3 className="font-display text-4xl text-secondary mt-2 mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Points */}
                <ul className="space-y-3 mb-8">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-secondary text-white hover:bg-secondary/90 font-semibold gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Richiedi Informazioni
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
