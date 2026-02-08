import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "wouter";
import { GraduationCap, Users, Heart, Flame, Award, Wrench, Clock, MapPin } from "lucide-react";

export default function FormazioneComplete() {
  const categories = [
    {
      title: "Sicurezza sul Lavoro",
      icon: Users,
      courses: [
        { title: "Corso per Preposti", duration: "12 ore", url: "/formazione/preposti" },
        { title: "Corso per Datori di Lavoro", duration: "16 ore", url: "/servizi/formazione/datori-di-lavoro" },
        { title: "Corso RLS", duration: "32 ore", url: "/servizi/formazione/rls" },
        { title: "Corso Aggiornamento Preposti", duration: "6 ore", url: "/servizi/formazione/aggiornamento-preposti" },
        { title: "Corso per Datori di Lavoro con Modulo Cantieri", duration: "22 ore", url: "/servizi/formazione/datori-lavoro-cantieri" },
        { title: "Corso Aggiornamento RLS (1-50 dipendenti)", duration: "4 ore", url: "/servizi/formazione/aggiornamento-rls-piccole" },
        { title: "Corso per Datori di Lavoro Modulo Aggiuntivo Cantieri", duration: "6 ore", url: "/formazione/datori-lavoro-modulo-cantieri" },
        { title: "Corso Aggiornamento RLS (più di 50 lavoratori)", duration: "8 ore", url: "/servizi/formazione/aggiornamento-rls-grandi" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Comune", duration: "8 ore", url: "/servizi/formazione/datori-rspp-comune" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Agricoltura", duration: "16 ore", url: "/servizi/formazione/datori-rspp-agricoltura" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Chimico", duration: "16 ore", url: "/servizi/formazione/datori-rspp-chimico" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Costruzioni", duration: "16 ore", url: "/servizi/formazione/datori-rspp-costruzioni" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Aggiuntivo Cantieri", duration: "da 250,00 €", url: "/formazione/rspp-modulo-cantieri" },
        { title: "Corso per Dirigenti", duration: "12 ore", url: "/servizi/formazione/dirigenti" },
        { title: "Corso per Dirigenti con Modulo Aggiuntivo Cantieri", duration: "18 ore", url: "/servizi/formazione/dirigenti-cantieri" },
        { title: "Corso per Dirigenti - Modulo Aggiuntivo Cantieri", duration: "6 ore", url: "/servizi/formazione/modulo-cantieri-dirigenti" },
        { title: "Corso Aggiornamento Datori di Lavoro", duration: "6 ore", url: "/servizi/formazione/aggiornamento-datori-lavoro" },
        { title: "Corso di Aggiornamento per Datori di Lavoro RSPP", duration: "8 ore", url: "/servizi/formazione/aggiornamento-rspp" },
        { title: "Corso di Aggiornamento Dirigenti", duration: "6 ore", url: "/servizi/formazione/aggiornamento-dirigenti" },
        { title: "Corso Formazione Generale per Lavoratori", duration: "4 ore", url: "/formazione/lavoratori-generale" },
        { title: "Corso di Formazione per Lavoratori Rischio Basso (Base + Specifica)", duration: "8 ore (4 base + 4 specifica)", url: "/servizi/formazione/lavoratori-rischio-basso" },
        { title: "Corso di Formazione per Lavoratori Rischio Medio (Base + Specifica)", duration: "12 ore (4 base + 8 specifica)", url: "/servizi/formazione/lavoratori-rischio-medio" },
        { title: "Corso di Formazione per Lavoratori Rischio Alto (Base + Specifica)", duration: "16 ore (4 base + 12 specifica)", url: "/servizi/formazione/lavoratori-rischio-alto" },
        { title: "Corso di Aggiornamento per Lavoratori", duration: "6 ore", url: "/servizi/formazione/aggiornamento-lavoratori" },
        { title: "Corso Lavoratori Modulo Generale (English Version)", duration: "4 ore", url: "/formazione/lavoratori-english" },
      ],
    },
    {
      title: "Primo Soccorso",
      icon: Heart,
      courses: [
        { title: "Corso di Primo Soccorso (Aziende Gruppo B e C)", duration: "12 ore", url: "/servizi/formazione/primo-soccorso-bc" },
        { title: "Corso di Primo Soccorso (Aziende Gruppo A)", duration: "16 ore", url: "/servizi/formazione/primo-soccorso-a" },
        { title: "Corso Aggiornamento Primo Soccorso (Aziende Gruppo A)", duration: "6 ore", url: "/servizi/formazione/aggiornamento-primo-soccorso-a" },
        { title: "Corso Aggiornamento Primo Soccorso (Aziende Gruppo B e C)", duration: "4 ore", url: "/servizi/formazione/aggiornamento-primo-soccorso-bc" },
      ],
    },
    {
      title: "Antincendio",
      icon: Flame,
      courses: [
        { title: "Corso Antincendio Livello 1", duration: "4 ore", url: "/servizi/formazione/antincendio-livello-1" },
        { title: "Corso Antincendio Livello 2", duration: "8 ore", url: "/servizi/formazione/antincendio-livello-2" },
        { title: "Corso Aggiornamento Antincendio Livello 1", duration: "2 ore", url: "/servizi/formazione/aggiornamento-antincendio-livello-1" },
        { title: "Corso Aggiornamento Antincendio Livello 2", duration: "5 ore", url: "/servizi/formazione/aggiornamento-antincendio-livello-2" },
      ],
    },
    {
      title: "Abilitazioni Speciali",
      icon: Award,
      courses: [
        { title: "Corso di Abilitazione BLSD Laico (Defibrillatore DAE)", duration: "5 ore", url: "/servizi/formazione/blsd-dae" },
      ],
    },
    {
      title: "Macchine e Attrezzature",
      icon: Wrench,
      courses: [
        { title: "Carrelli Elevatori", duration: "12 ore", url: "/formazione/carrelli-elevatori" },
        { title: "Piattaforme Elevabili (PLE)", duration: "10 ore", url: "/formazione/ple" },
        { title: "Ponteggi e Trabattelli", duration: "8 ore", url: "/formazione/ponteggi-trabattelli" },
        { title: "DPI e Funi", duration: "8 ore", url: "/formazione/dpi-funi" },
        { title: "Ambienti Confinati", duration: "8 ore", url: "/formazione/ambienti-confinati" },
        { title: "Addetti ai Lavori Elettrici (PES/PAV)", duration: "16 ore", url: "/formazione/pes-pav" },
        { title: "Gru e Carroponte", duration: "12 ore", url: "/formazione/gru-carroponte" },
        { title: "Lavori Stradali", duration: "8 ore", url: "/formazione/lavori-stradali" },
        { title: "Corsi macchine movimento terra", duration: "16 ore", url: "/formazione/movimento-terra" },
        { title: "Trattori", duration: "8 ore", url: "/formazione/trattori" },
      ],
    },
  ];

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
                <GraduationCap className="w-4 h-4" />
                Formazione Professionale
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Corsi di Formazione sulla Sicurezza
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Catalogo completo dei corsi di formazione obbligatoria per la sicurezza sul lavoro. 
                Corsi online e in presenza a Catania, conformi al D.Lgs 81/08 e Nuovo Accordo Stato-Regioni 2025.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>Corsi Online e Presenza</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <MapPin className="w-5 h-5 text-orange-600" />
                  <span>Catania e Provincia</span>
                </div>
              </div>

              <a
                href="https://wa.me/393465835685?text=Vorrei%20informazioni%20sui%20corsi%20di%20formazione"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
                Richiedi Informazioni
              </a>
            </div>
          </div>
        </section>

        {/* Courses by Category */}
        {categories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <section key={idx} className="py-12 md:py-16 bg-white border-b border-border">
              <div className="container">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">{category.title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, courseIdx) => (
                    <Link key={courseIdx} href={course.url}>
                      <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Non trovi il corso che cerchi?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per informazioni su corsi personalizzati, date disponibili e iscrizioni. 
                Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Vorrei%20informazioni%20sui%20corsi%20di%20formazione"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                <GraduationCap className="w-5 h-5" />
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
