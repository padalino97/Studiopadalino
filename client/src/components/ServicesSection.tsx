/*
  Design: Authoritative Consulting - Enhanced
  Component: Services Section
  - Card con immagini e icone elaborate
  - Effetti hover avanzati
  - Layout moderno con gradienti
*/

import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Shield,
  Stethoscope,
  GraduationCap,
  Building2,
  Award,
  UtensilsCrossed,
  Lock,
  HardHat,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Sicurezza sul Lavoro",
    description: "DVR, RSPP esterno, valutazione rischi specifici, POS, PSC, PIMUS. Assistenza completa per la conformità al D.Lgs 81/08.",
    href: "/servizi/sicurezza-lavoro",
    badge: "D.Lgs 81/08",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/VHUFEpwvVlSkzYEd.jpg",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    features: ["DVR completo", "RSPP esterno", "Valutazione rischi"],
  },
  {
    icon: Stethoscope,
    title: "Medicina del Lavoro",
    description: "Nomina medico competente, visite mediche preventive e periodiche, protocolli sanitari, giudizi di idoneità.",
    href: "/servizi/medicina-lavoro",
    badge: "Sorveglianza Sanitaria",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/yqOtMscJOKgzwgVm.jpg",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    features: ["Medico competente", "Visite periodiche", "Protocolli sanitari"],
  },
  {
    icon: GraduationCap,
    title: "Formazione",
    description: "Corsi obbligatori per lavoratori, preposti, dirigenti, RSPP, RLS, antincendio e primo soccorso. Attestati validi.",
    href: "/servizi/formazione",
    badge: "Corsi Certificati",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    features: ["Attestati validi", "Aula e online", "Formatori qualificati"],
  },
  {
    icon: Award,
    title: "Sistemi di Qualità ISO",
    description: "Implementazione e mantenimento ISO 9001, ISO 14001, ISO 45001, ISO 37001. Audit interni e preparazione certificazione.",
    href: "/servizi/qualita-iso",
    badge: "Certificazioni",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/sMQFIryJSEcCgEtr.jpg",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    features: ["ISO 9001", "ISO 45001", "Audit interni"],
  },
];

const secondaryServices = [
  {
    icon: Building2,
    title: "Autorizzazioni Sanitarie",
    description: "Pratiche per apertura e accreditamento strutture sanitarie.",
    href: "/servizi/autorizzazioni-sanitarie",
    badge: "Strutture Mediche",
    color: "from-rose-500 to-rose-600",
  },
  {
    icon: UtensilsCrossed,
    title: "HACCP",
    description: "Manuali autocontrollo e formazione alimentaristi.",
    href: "/servizi/haccp",
    badge: "Sicurezza Alimentare",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Lock,
    title: "Privacy GDPR",
    description: "Adeguamento al Regolamento Europeo e nomina DPO.",
    href: "/servizi/privacy-gdpr",
    badge: "Reg. UE 2016/679",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: HardHat,
    title: "Sicurezza Cantieri",
    description: "Coordinamento CSP/CSE e redazione PSC.",
    href: "/servizi/sicurezza-cantieri",
    badge: "Coordinamento",
    color: "from-slate-500 to-slate-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              I Nostri Servizi
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Soluzioni Complete per la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Tua Azienda
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Offriamo una gamma completa di servizi di consulenza per garantire 
              la sicurezza, la qualità e la conformità normativa della tua attività.
            </p>
          </motion.div>
        </div>

        {/* Main Services - Large Cards with Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-full border border-gray-100">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    
                    {/* Badge */}
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.badge}
                    </span>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                          <CheckCircle className="w-3 h-3 text-primary" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Secondary Services - Compact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full border border-gray-100 hover:border-primary/20">
                  {/* Icon with gradient background */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Badge */}
                  <span className="text-xs font-medium text-gray-500 mb-2 block">
                    {service.badge}
                  </span>

                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-3">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center text-primary font-medium text-sm">
                    Dettagli
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
