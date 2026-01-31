/*
  Design: Industrial Brutalism Meets Safety
  Component: Services Section
  - Card dei servizi con hover effects
  - Icone stilizzate
  - Layout a griglia sfalsata
*/

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Stethoscope,
  FileCheck,
  Award,
  BookOpen,
  Building2,
  HardHat,
  ClipboardCheck,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const services = [
  {
    icon: Shield,
    title: "Sicurezza sul Lavoro",
    subtitle: "D.Lgs 81/08",
    description:
      "Consulenza completa per la sicurezza nei luoghi di lavoro: DVR, DUVRI, POS, PSC, PIMUS. Valutazione di tutti i rischi specifici e nomina RSPP esterno.",
    features: ["DVR e Valutazione Rischi", "Nomina RSPP Esterno", "POS e PSC Cantieri", "Valutazioni Specifiche"],
  },
  {
    icon: Stethoscope,
    title: "Medicina del Lavoro",
    subtitle: "Sorveglianza Sanitaria",
    description:
      "Servizio completo di medicina del lavoro con medico competente, visite mediche preventive e periodiche, protocolli sanitari e giudizi di idoneità.",
    features: ["Visite Mediche", "Medico Competente", "Protocolli Sanitari", "Giudizi Idoneità"],
  },
  {
    icon: Building2,
    title: "Autorizzazioni Sanitarie",
    subtitle: "Strutture Mediche",
    description:
      "Pratiche per apertura, adeguamento e accreditamento di strutture sanitarie. Consulenza per requisiti strutturali, tecnologici e organizzativi secondo D.A. 20/2024.",
    features: ["Apertura Ambulatori", "Accreditamento", "Requisiti Strutturali", "Pratiche ASP"],
  },
  {
    icon: Award,
    title: "Sistemi di Qualità",
    subtitle: "Certificazioni ISO",
    description:
      "Implementazione e mantenimento di sistemi di gestione certificati: ISO 9001 Qualità, ISO 14001 Ambiente, ISO 45001 Sicurezza, ISO 37001 Anticorruzione.",
    features: ["ISO 9001 Qualità", "ISO 14001 Ambiente", "ISO 45001 Sicurezza", "Audit Interni"],
  },
  {
    icon: BookOpen,
    title: "Formazione",
    subtitle: "Corsi Obbligatori",
    description:
      "Corsi di formazione obbligatoria per lavoratori, preposti, dirigenti, RSPP, RLS, addetti antincendio e primo soccorso. Formazione in aula e e-learning.",
    features: ["Formazione Lavoratori", "Corsi Preposti", "Antincendio", "Primo Soccorso"],
  },
  {
    icon: ClipboardCheck,
    title: "HACCP",
    subtitle: "Sicurezza Alimentare",
    description:
      "Consulenza per la sicurezza alimentare: manuali di autocontrollo HACCP, formazione alimentaristi, analisi e campionamenti, assistenza controlli ASP.",
    features: ["Manuali HACCP", "Formazione Alimentaristi", "Analisi Laboratorio", "Assistenza ASP"],
  },
  {
    icon: FileCheck,
    title: "Privacy GDPR",
    subtitle: "Protezione Dati",
    description:
      "Adeguamento al Regolamento Europeo sulla protezione dei dati personali: analisi, documentazione, formazione e nomina DPO esterno.",
    features: ["Analisi Compliance", "Documentazione", "Formazione Privacy", "DPO Esterno"],
  },
  {
    icon: HardHat,
    title: "Sicurezza Cantieri",
    subtitle: "Coordinamento",
    description:
      "Servizi di coordinamento sicurezza in fase di progettazione e esecuzione. Redazione PSC, fascicolo dell'opera, verifiche e sopralluoghi in cantiere.",
    features: ["CSP e CSE", "PSC e Fascicolo", "Sopralluoghi", "Verifiche Cantiere"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-24 bg-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-64 h-64 safety-stripes opacity-5 rotate-45" />
      <div className="absolute bottom-0 left-0 w-48 h-48 safety-stripes opacity-5 -rotate-45" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">
              I Nostri Servizi
            </span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl text-secondary mb-4">
            SOLUZIONI COMPLETE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Offriamo una gamma completa di servizi per la sicurezza, la qualità e la conformità normativa della tua azienda.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white h-full p-6 border-l-4 border-primary shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-secondary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl text-secondary mb-1">
                  {service.title}
                </h3>
                <p className="text-primary font-semibold text-sm mb-3">
                  {service.subtitle}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold mt-auto"
                  >
                    Richiedi Info
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-secondary p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-full safety-stripes opacity-20" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-3xl sm:text-4xl text-white mb-2">
                HAI BISOGNO DI CONSULENZA?
              </h3>
              <p className="text-gray-400">
                Contattaci per un preventivo gratuito e personalizzato per la tua azienda.
              </p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-secondary hover:bg-primary/90 font-bold text-lg px-8 py-6 gap-3 whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                CONTATTACI ORA
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
