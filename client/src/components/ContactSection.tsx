/*
  Design: Industrial Brutalism Meets Safety
  Component: Contact Section
  - Informazioni di contatto
  - Mappa (placeholder)
  - CTA WhatsApp prominente
*/

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";
const PHONE_NUMBER = "+39 346 583 5685";
const EMAIL = "studiosicurezzapadalino@gmail.com";
const ADDRESS = "Via Altarelli 10, San Pietro Clarenza (CT) 95055";
const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Via+Altarelli+10+San+Pietro+Clarenza+CT+95055";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: MapPin,
    label: "Sede",
    value: ADDRESS,
    href: GOOGLE_MAPS_LINK,
  },
];

export default function ContactSection() {
  return (
    <section id="contatti" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-2 safety-stripes" />
      <div className="absolute bottom-0 right-0 w-64 h-64 safety-stripes opacity-10 rotate-45" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">
                Contatti
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
              PARLIAMO DEL
              <br />
              <span className="text-primary">TUO PROGETTO</span>
            </h2>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Siamo a disposizione per rispondere alle tue domande e fornirti un preventivo 
              personalizzato. Contattaci tramite WhatsApp per una risposta rapida o utilizza 
              i canali tradizionali.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="flex items-center gap-4 p-4 bg-primary/10 border-l-4 border-primary">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <p className="text-white font-semibold">Orari di Apertura</p>
                <p className="text-gray-400 text-sm">Lun - Ven: 9:00 - 18:00 | Sab: 9:00 - 13:00</p>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="bg-white p-8 sm:p-12 w-full relative">
              {/* Safety Stripe Accent */}
              <div className="absolute top-0 left-0 right-0 h-2 safety-stripes" />

              <div className="text-center">
                <div className="w-20 h-20 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-display text-3xl text-secondary mb-4">
                  CONTATTACI SU WHATSAPP
                </h3>

                <p className="text-muted-foreground mb-8">
                  Il modo più veloce per ricevere assistenza. Scrivici su WhatsApp e ti risponderemo 
                  il prima possibile con tutte le informazioni di cui hai bisogno.
                </p>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg py-6 gap-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    APRI WHATSAPP
                  </Button>
                </a>

                <p className="text-sm text-muted-foreground mt-4">
                  {PHONE_NUMBER}
                </p>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t">
                  <div className="text-center">
                    <p className="font-display text-2xl text-primary">24h</p>
                    <p className="text-xs text-muted-foreground">Risposta Media</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl text-primary">100%</p>
                    <p className="text-xs text-muted-foreground">Gratuito</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl text-primary">7/7</p>
                    <p className="text-xs text-muted-foreground">Disponibilità</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* P.IVA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-500 text-sm">
            Studio Sicurezza Padalino | P.IVA IT05843750877 | Via Altarelli 10, San Pietro Clarenza (CT) 95055
          </p>
        </motion.div>
      </div>
    </section>
  );
}
