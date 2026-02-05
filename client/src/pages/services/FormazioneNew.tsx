/*
  Design: Professional Consulting - Training Focus
  Page: Formazione - Corsi Online e Presenza
  - Separazione chiara Online vs Presenza
  - Filtri intelligenti
  - Argomenti corretti e accurati
  - Layout moderno e professionale
*/

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MessageCircle, Clock, Users, MapPin, Zap, CheckCircle, Filter } from "lucide-react";

// Dati Corsi Online
const corsiOnline = [
  {
    id: "rspp-online",
    title: "Aggiornamento RSPP Datore",
    duration: "8 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per Responsabili della Sicurezza",
    figure: "RSPP",
    tipo: "Aggiornamento",
    settore: "Tutti",
    url: "/formazione/rspp-online"
  },
  {
    id: "lavoratori-online",
    title: "Aggiornamento Lavoratori",
    duration: "6 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per tutti i lavoratori",
    figure: "Lavoratori",
    tipo: "Aggiornamento",
    settore: "Tutti",
    url: "/formazione/lavoratori-online"
  },
  {
    id: "dirigenti-online",
    title: "Aggiornamento Dirigenti",
    duration: "6 ore",
    description: "Aggiornamento obbligatorio ogni 5 anni per dirigenti e quadri",
    figure: "Dirigenti",
    tipo: "Aggiornamento",
    settore: "Tutti",
    url: "/formazione/dirigenti-online"
  },
  {
    id: "aspp-online",
    title: "Aggiornamento ASPP",
    duration: "40 ore",
    description: "Aggiornamento quinquennale per Addetti Servizio Prevenzione e Protezione",
    figure: "ASPP",
    tipo: "Aggiornamento",
    settore: "Tutti",
    url: "/formazione/aspp-online"
  },
  {
    id: "rls-online",
    title: "Aggiornamento RLS",
    duration: "8 ore",
    description: "Aggiornamento annuale per Rappresentanti dei Lavoratori per la Sicurezza",
    figure: "RLS",
    tipo: "Aggiornamento",
    settore: "Tutti",
    url: "/formazione/rls-online"
  },
  {
    id: "privacy-online",
    title: "Privacy GDPR",
    duration: "1 ora",
    description: "Formazione sulla protezione dei dati personali e conformità GDPR",
    figure: "Tutti",
    tipo: "Specializzazione",
    settore: "Tutti",
    url: "/formazione/privacy-online"
  },
  {
    id: "haccp-online",
    title: "HACCP per Alimentaristi",
    duration: "3 ore",
    description: "Formazione su Igiene e HACCP per manipolazione alimenti",
    figure: "Alimentaristi",
    tipo: "Specializzazione",
    settore: "Alimentare",
    url: "/formazione/haccp-online"
  },
];

// Dati Corsi Presenza
const corsiPresenza = [
  {
    id: "preposti-presenza",
    title: "Corso Preposti",
    duration: "12 ore",
    description: "Formazione pratica per preposti e capi cantiere (OGNI 2 ANNI - Nuovo Accordo 2025)",
    figure: "Preposti",
    tipo: "Formazione",
    settore: "Edilizia",
    location: "Catania - Zona Industriale",
    url: "/formazione/preposti-presenza"
  },
  {
    id: "carrelli-elevatori",
    title: "Carrelli Elevatori",
    duration: "4 ore",
    description: "Abilitazione pratica con macchine reali nel nostro campo prove",
    figure: "Operatori",
    tipo: "Abilitazione",
    settore: "Logistica",
    location: "Catania - Zona Industriale",
    url: "/formazione/carrelli-elevatori"
  },
  {
    id: "escavatori",
    title: "Escavatori e Pale",
    duration: "4 ore",
    description: "Abilitazione pratica con escavatori reali nel nostro campo prove",
    figure: "Operatori",
    tipo: "Abilitazione",
    settore: "Edilizia",
    location: "Catania - Zona Industriale",
    url: "/formazione/escavatori"
  },
  {
    id: "antincendio",
    title: "Antincendio",
    duration: "8 ore",
    description: "Corso pratico con estintori reali e simulazioni di emergenza",
    figure: "Incaricati",
    tipo: "Formazione",
    settore: "Tutti",
    location: "Catania - Zona Industriale",
    url: "/formazione/antincendio"
  },
  {
    id: "primo-soccorso",
    title: "Primo Soccorso",
    duration: "16 ore",
    description: "Formazione pratica su tecniche di primo intervento e rianimazione",
    figure: "Addetti",
    tipo: "Formazione",
    settore: "Tutti",
    location: "Catania - Zona Industriale",
    url: "/formazione/primo-soccorso"
  },
  {
    id: "diisocianati",
    title: "Diisocianati (NCO)",
    duration: "3 ore",
    description: "Formazione su utilizzo sicuro di sostanze chimiche pericolose",
    figure: "Operatori",
    tipo: "Specializzazione",
    settore: "Industria",
    location: "Catania - Zona Industriale",
    url: "/formazione/diisocianati"
  },
];

// Componente Card Corso
function CourseCard({ course, isOnline }: { course: typeof corsiOnline[0] | typeof corsiPresenza[0]; isOnline: boolean }) {
  return (
    <a
      href={course.url}
      className="group block bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
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
            <span>{course.location}</span>
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
  const [filterFigura, setFilterFigura] = useState("Tutti");
  const [filterTipo, setFilterTipo] = useState("Tutti");

  // Estrai figure e tipi unici
  const figure = ["Tutti", ...Array.from(new Set([...corsiOnline, ...corsiPresenza].map(c => c.figure)))];
  const tipi = ["Tutti", ...Array.from(new Set([...corsiOnline, ...corsiPresenza].map(c => c.tipo)))];

  // Filtra corsi
  const corsiOnlineFiltrati = corsiOnline.filter(c => 
    (filterFigura === "Tutti" || c.figure === filterFigura) &&
    (filterTipo === "Tutti" || c.tipo === filterTipo)
  );

  const corsiPresenzaFiltrati = corsiPresenza.filter(c => 
    (filterFigura === "Tutti" || c.figure === filterFigura) &&
    (filterTipo === "Tutti" || c.tipo === filterTipo)
  );

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
                Corsi online e in presenza conformi al Nuovo Accordo Stato-Regioni 2025 e D.Lgs 81/08
              </p>
            </div>
          </div>
        </section>

        {/* Filtri */}
        <section className="py-8 bg-white border-b border-border sticky top-20 z-40">
          <div className="container">
            <div className="flex items-center gap-4 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Filtra Corsi</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Filtro Figura */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Figura Professionale
                </label>
                <select
                  value={filterFigura}
                  onChange={(e) => setFilterFigura(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {figure.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              {/* Filtro Tipo */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Tipo Corso
                </label>
                <select
                  value={filterTipo}
                  onChange={(e) => setFilterTipo(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {tipi.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
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

            {corsiOnlineFiltrati.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {corsiOnlineFiltrati.map(corso => (
                  <CourseCard key={corso.id} course={corso} isOnline={true} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-muted-foreground">Nessun corso online corrisponde ai filtri selezionati</p>
              </div>
            )}
          </div>
        </section>

        {/* Corsi Presenza */}
        <section className="py-12 md:py-16 bg-gray-50 border-t border-border">
          <div className="container">
            <div className="flex items-center gap-3 mb-8">
              <MapPin className="w-6 h-6 text-orange-600" />
              <h2 className="text-3xl font-bold text-foreground">Corsi in Presenza (Pratica Obbligatoria)</h2>
            </div>

            {corsiPresenzaFiltrati.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {corsiPresenzaFiltrati.map(corso => (
                  <CourseCard key={corso.id} course={corso} isOnline={false} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <p className="text-muted-foreground">Nessun corso in presenza corrisponde ai filtri selezionati</p>
              </div>
            )}
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
