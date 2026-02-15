/*
  Design: Authoritative Consulting - Enhanced
  Component: Contact Section
  - Design moderno con gradienti
  - Card WhatsApp prominente
  - Animazioni e effetti visivi
*/

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 346 583 5685",
    href: "tel:+393465835685",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "studiosicurezzapadalino@gmail.com",
    href: "mailto:studiosicurezzapadalino@gmail.com",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Altarelli 10, San Pietro Clarenza (CT) 95055",
    href: "https://www.google.com/maps/search/?api=1&query=Via+Altarelli+10+San+Pietro+Clarenza+CT+95055",
    color: "from-rose-500 to-rose-600",
  },
];

const benefits = [
  "Consulenza gratuita iniziale",
  "Preventivi personalizzati",
  "Risposta entro 24 ore",
  "Assistenza continua",
];

export default function ContactSection() {
  return (
    <section id="contatti" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Send className="w-4 h-4" />
            Contatti
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Parliamo del{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              Tuo Progetto
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Siamo a disposizione per rispondere alle tue domande e fornirti un preventivo 
            personalizzato. Contattaci tramite WhatsApp per una risposta rapida.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-gray-900 group-hover:text-primary transition-colors truncate">
                    {item.value}
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
              </motion.a>
            ))}

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Orari di Apertura</p>
                  <div className="space-y-1 text-sm">
                    <p className="text-muted-foreground">
                      <span className="font-medium text-gray-700">Lun - Ven:</span> 9:00 - 18:00
                    </p>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-gray-700">Sabato:</span> 9:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-10 rounded-2xl text-white overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-3xl" />
              </div>

              <div className="relative">
                {/* WhatsApp Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-4">
                  Contattaci su WhatsApp
                </h3>

                <p className="text-gray-400 text-center mb-6 max-w-md mx-auto">
                  Il modo più veloce per ricevere assistenza. Scrivici su WhatsApp e ti risponderemo 
                  il prima possibile con tutte le informazioni di cui hai bisogno.
                </p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block">
                  <Button size="lg" className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0d9668] text-white gap-3 text-lg py-7 shadow-lg shadow-emerald-500/30 border-0">
                    <MessageCircle className="w-6 h-6" />
                    Apri WhatsApp
                  </Button>
                </a>

                <p className="text-center text-gray-500 mt-4 text-sm">
                  +39 346 583 5685
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700/50">
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">24h</p>
                    <p className="text-xs text-gray-500">Risposta Media</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">100%</p>
                    <p className="text-xs text-gray-500">Gratuito</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">7/7</p>
                    <p className="text-xs text-gray-500">Disponibilità</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
