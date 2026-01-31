/*
  Design: Industrial Brutalism Meets Safety
  Component: Hero Section
  - Full-screen con immagine di sfondo
  - Taglio diagonale
  - CTA prominente verso WhatsApp
*/

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, ChevronDown } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("servizi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-safety.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
      </div>

      {/* Safety Stripes Accent */}
      <div className="absolute top-0 left-0 w-full h-2 safety-stripes" />
      <div className="absolute bottom-0 left-0 w-8 h-full safety-stripes opacity-50" />

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Dott. Alessandro Giuseppe Padalino
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none mb-6">
              SICUREZZA
              <br />
              <span className="text-primary">SUL LAVORO</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Consulenza professionale per la sicurezza nei luoghi di lavoro, medicina del lavoro, 
              autorizzazioni sanitarie e sistemi di gestione qualità. 
              <strong className="text-white"> Al tuo fianco per proteggere la tua azienda.</strong>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary text-secondary hover:bg-primary/90 font-bold text-lg px-8 py-6 gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                RICHIEDI CONSULENZA
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-white text-white hover:bg-white hover:text-secondary font-bold text-lg px-8 py-6 gap-3 bg-transparent"
            >
              <Shield className="w-5 h-5" />
              SCOPRI I SERVIZI
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { number: "15+", label: "Anni Esperienza" },
              { number: "500+", label: "Aziende Assistite" },
              { number: "100%", label: "Conformità" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <p className="font-display text-4xl sm:text-5xl text-primary">{stat.number}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 hover:text-primary transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Scopri di più</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
}
