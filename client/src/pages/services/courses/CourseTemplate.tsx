/*
  Template per pagine corsi - Personalizzare i dati
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, Users, BookOpen, MessageCircle } from "lucide-react";

interface CourseTemplateProps {
  title: string;
  subtitle: string;
  duration: string;
  type: "online" | "presenza";
  location?: string;
  description: string;
  objectives: string[];
  contents: string[];
  requirements: string[];
  certification: string;
}

export function CourseTemplate({
  title,
  subtitle,
  duration,
  type,
  location,
  description,
  objectives,
  contents,
  requirements,
  certification,
}: CourseTemplateProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Header Spacing */}
        <div className="h-20 md:h-24" />

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-border">
          <div className="container">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                <Award className="w-4 h-4" />
                {type === "online" ? "E-Learning 24/7" : "Pratica Obbligatoria"}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">{subtitle}</p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>{duration}</span>
                </div>
                {location && (
                  <div className="flex items-center gap-2 text-foreground font-semibold">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span>{location}</span>
                  </div>
                )}
              </div>

              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20corso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Richiedi Informazioni
              </a>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl">
              {/* Descrizione */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-4">Cos'è il corso</h2>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>

              {/* Obiettivi */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Obiettivi del Corso</h2>
                <div className="space-y-3">
                  {objectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contenuti */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Argomenti Trattati</h2>
                <div className="space-y-3">
                  {contents.map((content, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{content}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requisiti */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">Requisiti di Accesso</h2>
                <div className="space-y-3">
                  {requirements.map((req, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certificazione */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Certificazione</h3>
                    <p className="text-muted-foreground">{certification}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iniziare?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per date disponibili, costi e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20corso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Contattaci su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
