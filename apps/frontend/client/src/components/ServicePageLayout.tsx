/*
  Design: Authoritative Consulting - Enhanced
  Component: Service Page Layout
  - Hero con immagine
  - Layout moderno con gradienti
  - Sidebar migliorata
  - Animazioni
*/

import { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone, Clock, FileText, ChevronRight, CheckCircle, ArrowRight, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

const WHATSAPP_LINK = "https://wa.me/393465835685";

interface FAQ {
  question: string;
  answer: string;
}

interface RelatedService {
  title: string;
  href: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  badge: string;
  intro: ReactNode;
  children: ReactNode;
  faqs?: FAQ[];
  relatedServices?: RelatedService[];
  heroImage?: string;
  icon?: ReactNode;
  quickInfo?: {
    duration?: string;
    validity?: string;
    cost?: string;
  };
}

export default function ServicePageLayout({
  title,
  subtitle,
  badge,
  intro,
  children,
  faqs,
  relatedServices,
  heroImage,
  icon,
  quickInfo,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section with Image */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Background Image */}
          {heroImage && (
            <div className="absolute inset-0">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/90" />
            </div>
          )}
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="container relative py-16 md:py-24">
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm text-gray-400 mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#servizi" className="hover:text-white transition-colors">Servizi</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{title}</span>
            </motion.nav>

            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
              >
                {icon}
                {badge}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                {title}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                {subtitle}
              </motion.p>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white gap-2 shadow-lg shadow-emerald-500/25 border-0">
                    <MessageCircle className="w-5 h-5" />
                    Richiedi Preventivo
                  </Button>
                </a>
                <a href="tel:+393465835685">
                  <Button size="lg" variant="outline" className="gap-2 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                    <Phone className="w-5 h-5" />
                    346 583 5685
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L60 70C120 60 240 40 360 35C480 30 600 40 720 45C840 50 960 50 1080 45C1200 40 1320 30 1380 25L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2">
                {/* Intro */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="prose prose-lg max-w-none mb-12"
                >
                  {intro}
                </motion.div>

                {/* Main Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {children}
                </motion.div>

                {/* FAQ Section */}
                {faqs && faqs.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 pt-12 border-t"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                        <HelpCircle className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
                        Domande Frequenti
                      </h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full space-y-3">
                      {faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`faq-${index}`}
                          className="bg-gray-50 rounded-xl border-none px-6"
                        >
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary py-5">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-5">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                )}

                {/* Final CTA */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mt-16 p-8 md:p-10 bg-gradient-to-br from-primary to-blue-600 rounded-2xl text-white shadow-xl shadow-primary/20"
                >
                  <h3 className="font-display text-2xl font-bold mb-4">
                    Hai bisogno di maggiori informazioni?
                  </h3>
                  <p className="text-blue-100 mb-6">
                    Contattaci per una consulenza gratuita. Ti risponderemo il prima possibile 
                    con tutte le informazioni di cui hai bisogno.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2 w-full sm:w-auto shadow-lg">
                        <MessageCircle className="w-5 h-5" />
                        Contattaci su WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+393465835685">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
                        <Phone className="w-5 h-5" />
                        346 583 5685
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* WhatsApp CTA Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-xl flex items-center justify-center shadow-lg">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Richiedi Informazioni</p>
                        <p className="text-sm text-gray-400">Risposta in 24h</p>
                      </div>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#22c55e] hover:to-[#0d9668] text-white gap-2 shadow-lg border-0">
                        <MessageCircle className="w-4 h-4" />
                        Contattaci su WhatsApp
                      </Button>
                    </a>
                  </motion.div>

                  {/* Quick Info */}
                  {quickInfo && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-primary rounded-full" />
                        Informazioni Rapide
                      </h3>
                      <div className="space-y-4">
                        {quickInfo.duration && (
                          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Tempistiche</p>
                              <p className="font-semibold text-gray-900">{quickInfo.duration}</p>
                            </div>
                          </div>
                        )}
                        {quickInfo.validity && (
                          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-emerald-600" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Validità</p>
                              <p className="font-semibold text-gray-900">{quickInfo.validity}</p>
                            </div>
                          </div>
                        )}
                        {quickInfo.cost && (
                          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-amber-600 font-bold">€</span>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground"></p>
                              <p className="font-semibold text-gray-900">{quickInfo.cost}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Related Services */}
                  {relatedServices && relatedServices.length > 0 && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg"
                    >
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-primary rounded-full" />
                        Servizi Correlati
                      </h3>
                      <ul className="space-y-2">
                        {relatedServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-gray-50 group"
                            >
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {/* Contact Info */}
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-2xl p-6"
                  >
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-primary rounded-full" />
                      Contatti Diretti
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+393465835685"
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 bg-white rounded-xl shadow-sm"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4 text-primary" />
                        </div>
                        +39 346 583 5685
                      </a>
                      <a
                        href="mailto:studiosicurezzapadalino@gmail.com"
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors p-3 bg-white rounded-xl shadow-sm"
                      >
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="break-all">studiosicurezzapadalino@gmail.com</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
