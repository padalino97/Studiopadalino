/*
  Design: Authoritative Consulting - Enhanced
  Component: Hero Section
  - Immagine hero full-width
  - Overlay gradient
  - Design moderno con glassmorphism
  - Animazioni sottili
*/

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Shield, Award, Users, CheckCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const credentials = [
  { icon: Shield, text: "RSPP Qualificato" },
  { icon: Award, text: "Formatore Abilitato" },
  { icon: Users, text: "15+ Anni Esperienza" },
];

const stats = [
  { value: "15+", label: "Anni di Esperienza", color: "from-blue-500 to-blue-600" },
  { value: "500+", label: "Aziende Assistite", color: "from-emerald-500 to-emerald-600" },
  { value: "100%", label: "Conformità Garantita", color: "from-amber-500 to-amber-600" },
  { value: "24h", label: "Risposta Rapida", color: "from-purple-500 to-purple-600" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-consulting.jpg"
          alt="Consulenza professionale"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
              <Shield className="w-4 h-4 text-blue-400" />
              Dott. Alessandro Giuseppe Padalino
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Consulenza Professionale per la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Sicurezza sul Lavoro
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              Supportiamo le aziende nella gestione della sicurezza, medicina del lavoro, 
              autorizzazioni sanitarie e sistemi di gestione qualità. 
              Un partner affidabile per la conformità normativa.
            </p>

            {/* Quick Benefits */}
            <div className="flex flex-col gap-3 mb-8">
              {["Consulenza personalizzata", "Assistenza durante le ispezioni", "Formazione certificata"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white gap-2 text-lg px-8 py-6 shadow-lg shadow-emerald-500/25 border-0">
                  <MessageCircle className="w-5 h-5" />
                  Richiedi Consulenza Gratuita
                </Button>
              </a>
              <Link href="/#servizi">
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                  Scopri i Servizi
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap items-center gap-6">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-300">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <p className={`font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-2`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-4 bg-gradient-to-r from-primary/90 to-blue-600/90 backdrop-blur-md rounded-2xl p-6 border border-white/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm mb-1">Contattaci ora</p>
                  <a href="tel:+393465835685" className="text-white font-display text-2xl font-bold hover:underline">
                    346 583 5685
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
            >
              <p className={`font-display text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.color} mb-1`}>
                {stat.value}
              </p>
              <p className="text-xs text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
