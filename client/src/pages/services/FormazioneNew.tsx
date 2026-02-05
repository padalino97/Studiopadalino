/*
  Design: Professional Consulting - Training Focus
  Page: Formazione - Corsi Online e Presenza
  - Layout semplice senza filtri
  - TUTTI gli argomenti e corsi
  - Separazione chiara Online vs Presenza
*/

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle, Clock, MapPin, Zap, BookOpen } from "lucide-react";

// Dati Corsi Online
const corsiOnline = [
  {
    id: "rspp-online",
    title: "Aggiornamento RSPP Datore",
    duration: "8 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per Responsabili della Sicurezza",
    url: "/formazione/rspp-online"
  },
  {
    id: "lavoratori-online",
    title: "Aggiornamento Lavoratori",
    duration: "6 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per tutti i lavoratori",
    url: "/formazione/lavoratori-online"
  },
  {
    id: "dirigenti-online",
    title: "Aggiornamento Dirigenti",
    duration: "6 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per dirigenti e quadri",
    url: "/formazione/dirigenti-online"
  },
  {
    id: "aspp-online",
    title: "Aggiornamento ASPP",
    duration: "40 ore",
    description: "Aggiornamento quinquennale per Addetti Servizio Prevenzione e Protezione",
    url: "/formazione/aspp-online"
  },
  {
    id: "rls-online",
    title: "Aggiornamento RLS",
    duration: "8 ore",
    description: "Aggiornamento annuale per Rappresentanti dei Lavoratori per la Sicurezza",
    url: "/formazione/rls-online"
  },
  {
    id: "privacy-online",
    title: "Privacy GDPR",
    duration: "1 ora",
    description: "Formazione sulla protezione dei dati personali e conformità GDPR",
    url: "/formazione/privacy-online"
  },
  {
    id: "haccp-online",
    title: "HACCP per Alimentaristi",
    duration: "3 ore",
    description: "Formazione su Igiene e HACCP per manipolazione alimenti",
    url: "/formazione/haccp-online"
  },
  {
    id: "diisocianati-online",
    title: "Diisocianati (NCO)",
    duration: "3 ore",
    description: "Formazione su utilizzo sicuro di sostanze chimiche pericolose",
    url: "/formazione/diisocianati-online"
  },
  {
    id: "antincendio-online",
    title: "Antincendio Online",
    duration: "4 ore",
    description: "Modulo teorico su prevenzione e gestione incendi",
    url: "/formazione/antincendio-online"
  },
  {
    id: "primo-soccorso-online",
    title: "Primo Soccorso Online",
    duration: "6 ore",
    description: "Modulo teorico su tecniche di primo intervento",
    url: "/formazione/primo-soccorso-online"
  },
];

// Dati Corsi Presenza
const corsiPresenza = [
  {
    id: "preposti-presenza",
    title: "Corso Preposti",
    duration: "12 ore",
    description: "Formazione pratica per preposti e capi cantiere (OGNI 2 ANNI - Nuovo Accordo 2025)",
    location: "Catania - Zona Industriale",
    url: "/formazione/preposti-presenza"
  },
  {
    id: "carrelli-elevatori",
    title: "Carrelli Elevatori",
    duration: "4 ore",
    description: "Abilitazione pratica con macchine reali nel nostro campo prove",
    location: "Catania - Zona Industriale",
    url: "/formazione/carrelli-elevatori"
  },
  {
    id: "muletti",
    title: "Muletti",
    duration: "4 ore",
    description: "Abilitazione pratica con muletti nel nostro campo prove",
    location: "Catania - Zona Industriale",
    url: "/formazione/muletti"
  },
  {
    id: "escavatori",
    title: "Escavatori e Pale",
    duration: "4 ore",
    description: "Abilitazione pratica con escavatori reali nel nostro campo prove",
    location: "Catania - Zona Industriale",
    url: "/formazione/escavatori"
  },
  {
    id: "ple",
    title: "Piattaforme Elevabili (PLE)",
    duration: "4 ore",
    description: "Abilitazione pratica con piattaforme elevabili",
    location: "Catania - Zona Industriale",
    url: "/formazione/ple"
  },
  {
    id: "gru-autocarro",
    title: "Gru su Autocarro",
    duration: "4 ore",
    description: "Abilitazione pratica per operatori gru su autocarro",
    location: "Catania - Zona Industriale",
    url: "/formazione/gru-autocarro"
  },
  {
    id: "antincendio",
    title: "Antincendio",
    duration: "8 ore",
    description: "Corso pratico con estintori reali e simulazioni di emergenza",
    location: "Catania - Zona Industriale",
    url: "/formazione/antincendio"
  },
  {
    id: "primo-soccorso",
    title: "Primo Soccorso",
    duration: "16 ore",
    description: "Formazione pratica su tecniche di primo intervento e rianimazione",
    location: "Catania - Zona Industriale",
    url: "/formazione/primo-soccorso"
  },
  {
    id: "lavori-quota",
    title: "Lavori in Quota e DPI III Categoria",
    duration: "8 ore",
    description: "Formazione su lavori in altura e utilizzo dispositivi protezione",
    location: "Catania - Zona Industriale",
    url: "/formazione/lavori-quota"
  },
  {
    id: "rischio-elettrico",
    title: "Rischio Elettrico (PES-PAV-PEI)",
    duration: "16 ore",
    description: "Formazione su sicurezza lavori elettrici secondo norma CEI 11-27",
    location: "Catania - Zona Industriale",
    url: "/formazione/rischio-elettrico"
  },
  {
    id: "spazi-confinati",
    title: "Spazi Confinati",
    duration: "8 ore",
    description: "Formazione su accesso e lavoro in spazi confinati",
    location: "Catania - Zona Industriale",
    url: "/formazione/spazi-confinati"
  },
  {
    id: "amianto",
    title: "Amianto (Operatori)",
    duration: "30 ore",
    description: "Formazione completa per operatori bonifica amianto",
    location: "Catania - Zona Industriale",
    url: "/formazione/amianto"
  },
];

// Componente Card Corso
function CourseCard({ course, isOnline }: { course: typeof corsiOnline[0] | typeof corsiPresenza[0]; isOnline: boolean }) {
  return (
    <a
      href={course.url}
      className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300 h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        {!isOnline && "location" in course && (
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span className="text-xs">{course.location}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
        <span>Scopri Dettagli</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </a>
  );
}

export default function FormazioneNew() {
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
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Formazione Professionale
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Corsi online e in presenza conformi al Nuovo Accordo Stato-Regioni 2025 e D.Lgs 81/08. 
                Formazione continua per la sicurezza sul lavoro e la qualità aziendale.
              </p>
            </div>
          </div>
        </section>

        {/* Corsi Online */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-foreground">Corsi Online (E-Learning 24/7)</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corsiOnline.map(corso => (
                <CourseCard key={corso.id} course={corso} isOnline={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Corsi Presenza */}
        <section className="py-12 md:py-16 bg-gray-50 border-t border-border">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-orange-600" />
              <h2 className="text-3xl font-bold text-foreground">Corsi in Presenza (Pratica Obbligatoria)</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corsiPresenza.map(corso => (
                <CourseCard key={corso.id} course={corso} isOnline={false} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Non trovi il corso che cerchi?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per informazioni su corsi personalizzati, date specifiche e preventivi su misura per la tua azienda.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20ai%20corsi%20di%20formazione"
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
