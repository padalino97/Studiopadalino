/*
  Design: Authoritative Consulting - Enhanced
  Component: About Section
  - Immagine professionale
  - Design moderno con gradienti
  - Animazioni e effetti visivi
*/

import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle, Award, Users, Clock, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

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
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Approccio Personalizzato",
    description: "Soluzioni su misura per ogni tipologia di azienda e settore produttivo.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Clock,
    title: "Assistenza Continua",
    description: "Supporto costante e reperibilità per ogni esigenza della tua azienda.",
    color: "from-amber-500 to-amber-600",
  },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero-consulting.jpg"
                alt="Dott. Alessandro Giuseppe Padalino"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-display text-2xl font-bold">SP</span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-gray-900">Studio Padalino</h3>
                      <p className="text-sm text-muted-foreground">Consulenza Sicurezza & Qualità</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -right-4 top-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-gray-900">500+</p>
                  <p className="text-xs text-muted-foreground">Aziende Assistite</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -left-4 bottom-32 bg-gradient-to-br from-primary to-blue-600 rounded-xl shadow-xl p-4 text-white hidden md:block"
            >
              <p className="font-display text-3xl font-bold">15+</p>
              <p className="text-xs text-blue-100">Anni di Esperienza</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              Chi Siamo
            </span>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dott. Alessandro Giuseppe{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Padalino
              </span>
            </h2>

            <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
              Lo Studio Sicurezza Padalino è un punto di riferimento per le aziende che cercano 
              un partner affidabile per la gestione della sicurezza sul lavoro, la medicina del lavoro 
              e i sistemi di gestione qualità.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Con sede a San Pietro Clarenza (CT), offriamo consulenza professionale a imprese 
              di ogni dimensione e settore, garantendo conformità normativa, efficienza operativa 
              e tutela dei lavoratori.
            </p>

            {/* Qualifications */}
            <div className="mb-8">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Qualifiche Professionali
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-white p-2 rounded-lg border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{qual}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 mb-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Sede</p>
                    <p className="text-sm font-medium text-gray-900">San Pietro Clarenza (CT)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Telefono</p>
                    <p className="text-sm font-medium text-gray-900">346 583 5685</p>
                  </div>
                </div>
              </div>
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white gap-2 shadow-lg shadow-emerald-500/25 border-0">
                <MessageCircle className="w-5 h-5" />
                Contattaci per una Consulenza
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Strengths Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {strengths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
