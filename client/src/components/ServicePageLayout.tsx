/*
  Design: Authoritative Consulting
  Component: Service Page Layout
  - Layout a due colonne (contenuto + sidebar)
  - Breadcrumb
  - Sidebar sticky con CTA e info
  - Struttura riutilizzabile per tutte le pagine servizio
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
import { MessageCircle, Phone, Clock, FileText, ChevronRight } from "lucide-react";
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
  quickInfo,
}: ServicePageLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b">
          <div className="container py-3">
            <nav className="breadcrumb">
              <Link href="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/#servizi" className="hover:text-primary">Servizi</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">{title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl">
              <span className="badge-regulation mb-4 inline-block">{badge}</span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Content Column */}
              <div className="lg:col-span-2">
                {/* Intro */}
                <div className="prose prose-lg max-w-none mb-12">
                  {intro}
                </div>

                {/* Main Content */}
                {children}

                {/* FAQ Section */}
                {faqs && faqs.length > 0 && (
                  <div className="mt-12 pt-12 border-t">
                    <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                      Domande Frequenti
                    </h2>
                    <Accordion type="single" collapsible className="w-full">
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="text-left font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                )}

                {/* Final CTA */}
                <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-4">
                    Hai bisogno di maggiori informazioni?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Contattaci per una consulenza gratuita. Ti risponderemo il prima possibile 
                    con tutte le informazioni di cui hai bisogno.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="whatsapp-btn gap-2 w-full sm:w-auto">
                        <MessageCircle className="w-5 h-5" />
                        Contattaci su WhatsApp
                      </Button>
                    </a>
                    <a href="tel:+393465835685">
                      <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                        <Phone className="w-5 h-5" />
                        346 583 5685
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sidebar-sticky space-y-6">
                  {/* WhatsApp CTA Card */}
                  <div className="bg-gray-900 p-6 rounded-xl text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-semibold">Richiedi Informazioni</p>
                        <p className="text-sm text-gray-400">Risposta in 24h</p>
                      </div>
                    </div>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full whatsapp-btn gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Contattaci su WhatsApp
                      </Button>
                    </a>
                  </div>

                  {/* Quick Info */}
                  {quickInfo && (
                    <div className="bg-white border rounded-xl p-6">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                        Informazioni Rapide
                      </h3>
                      <div className="space-y-4">
                        {quickInfo.duration && (
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Tempistiche</p>
                              <p className="font-medium text-gray-900">{quickInfo.duration}</p>
                            </div>
                          </div>
                        )}
                        {quickInfo.validity && (
                          <div className="flex items-start gap-3">
                            <FileText className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm text-muted-foreground">Validità</p>
                              <p className="font-medium text-gray-900">{quickInfo.validity}</p>
                            </div>
                          </div>
                        )}
                        {quickInfo.cost && (
                          <div className="flex items-start gap-3">
                            <div className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 font-bold text-center">€</div>
                            <div>
                              <p className="text-sm text-muted-foreground">Costo indicativo</p>
                              <p className="font-medium text-gray-900">{quickInfo.cost}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Related Services */}
                  {relatedServices && relatedServices.length > 0 && (
                    <div className="bg-white border rounded-xl p-6">
                      <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                        Servizi Correlati
                      </h3>
                      <ul className="space-y-2">
                        {relatedServices.map((service, index) => (
                          <li key={index}>
                            <Link
                              href={service.href}
                              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                            >
                              <ChevronRight className="w-4 h-4" />
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Info */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                      Contatti Diretti
                    </h3>
                    <div className="space-y-3">
                      <a
                        href="tel:+393465835685"
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                        +39 346 583 5685
                      </a>
                      <a
                        href="mailto:studiosicurezzapadalino@gmail.com"
                        className="flex items-center gap-3 text-sm hover:text-primary transition-colors break-all"
                      >
                        <MessageCircle className="w-4 h-4 text-primary" />
                        studiosicurezzapadalino@gmail.com
                      </a>
                    </div>
                  </div>
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
