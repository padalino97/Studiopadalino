import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "wouter";
import { GraduationCap, Users, Heart, Flame, Award, Wrench, Clock, MapPin, Filter, X } from "lucide-react";
import { useState, useMemo } from "react";

export default function FormazioneComplete() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "Sicurezza sul Lavoro",
      icon: Users,
      courses: [
        { title: "Corso per Preposti", duration: "12 ore", level: "intermedio", url: "/formazione/preposti" },
        { title: "Corso per Datori di Lavoro", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/datori-di-lavoro" },
        { title: "Corso RLS", duration: "32 ore", level: "avanzato", url: "/servizi/formazione/rls" },
        { title: "Corso Aggiornamento Preposti", duration: "6 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-preposti" },
        { title: "Corso per Datori di Lavoro con Modulo Cantieri", duration: "22 ore", level: "avanzato", url: "/servizi/formazione/datori-lavoro-cantieri" },
        { title: "Corso Aggiornamento RLS (1-50 dipendenti)", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-rls-piccole" },
        { title: "Corso per Datori di Lavoro Modulo Aggiuntivo Cantieri", duration: "6 ore", level: "intermedio", url: "/formazione/datori-lavoro-modulo-cantieri" },
        { title: "Corso Aggiornamento RLS (più di 50 lavoratori)", duration: "8 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-rls-grandi" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Comune", duration: "8 ore", level: "avanzato", url: "/servizi/formazione/datori-rspp-comune" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Agricoltura", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/datori-rspp-agricoltura" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Chimico", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/datori-rspp-chimico" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Integrativo Costruzioni", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/datori-rspp-costruzioni" },
        { title: "Corso per Datori di Lavoro RSPP - Modulo Aggiuntivo Cantieri", duration: "6 ore", level: "intermedio", url: "/formazione/rspp-modulo-cantieri" },
        { title: "Corso per Dirigenti", duration: "12 ore", level: "avanzato", url: "/servizi/formazione/dirigenti" },
        { title: "Corso per Dirigenti con Modulo Aggiuntivo Cantieri", duration: "18 ore", level: "avanzato", url: "/servizi/formazione/dirigenti-cantieri" },
        { title: "Corso per Dirigenti - Modulo Aggiuntivo Cantieri", duration: "6 ore", level: "intermedio", url: "/servizi/formazione/modulo-cantieri-dirigenti" },
        { title: "Corso Aggiornamento Datori di Lavoro", duration: "6 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-datori-lavoro" },
        { title: "Corso di Aggiornamento per Datori di Lavoro RSPP", duration: "8 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-rspp" },
        { title: "Corso di Aggiornamento Dirigenti", duration: "6 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-dirigenti" },
        { title: "Corso Formazione Generale per Lavoratori", duration: "4 ore", level: "base", url: "/formazione/lavoratori-generale" },
        { title: "Corso di Formazione per Lavoratori Rischio Basso (Base + Specifica)", duration: "8 ore", level: "base", url: "/servizi/formazione/lavoratori-rischio-basso" },
        { title: "Corso di Formazione per Lavoratori Rischio Medio (Base + Specifica)", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/lavoratori-rischio-medio" },
        { title: "Corso di Formazione per Lavoratori Rischio Alto (Base + Specifica)", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/lavoratori-rischio-alto" },
        { title: "Corso di Aggiornamento per Lavoratori", duration: "6 ore", level: "base", url: "/servizi/formazione/aggiornamento-lavoratori" },
        { title: "Corso Lavoratori Modulo Generale (English Version)", duration: "4 ore", level: "base", url: "/formazione/lavoratori-english" },
      ],
    },
    {
      title: "Primo Soccorso",
      icon: Heart,
      courses: [
        { title: "Corso di Primo Soccorso (Aziende Gruppo B e C)", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/primo-soccorso-bc" },
        { title: "Corso di Primo Soccorso (Aziende Gruppo A)", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/primo-soccorso-a" },
        { title: "Corso Aggiornamento Primo Soccorso (Aziende Gruppo A)", duration: "6 ore", level: "intermedio", url: "/servizi/formazione/aggiornamento-primo-soccorso-a" },
        { title: "Corso Aggiornamento Primo Soccorso (Aziende Gruppo B e C)", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-primo-soccorso-bc" },
      ],
    },
    {
      title: "Antincendio",
      icon: Flame,
      courses: [
        { title: "Corso Antincendio Livello 1", duration: "4 ore", level: "base", url: "/servizi/formazione/antincendio-livello-1" },
        { title: "Corso Antincendio Livello 2", duration: "8 ore", level: "intermedio", url: "/servizi/formazione/antincendio-livello-2" },
        { title: "Corso Aggiornamento Antincendio Livello 1", duration: "2 ore", level: "base", url: "/servizi/formazione/aggiornamento-antincendio-livello-1" },
        { title: "Corso Aggiornamento Antincendio Livello 2", duration: "5 ore", level: "base", url: "/servizi/formazione/aggiornamento-antincendio-livello-2" },
      ],
    },
    {
      title: "Abilitazioni Speciali",
      icon: Award,
      courses: [
        { title: "Corso di Abilitazione BLSD Laico (Defibrillatore DAE)", duration: "5 ore", level: "base", url: "/servizi/formazione/blsd-dae" },
      ],
    },
    {
      title: "Macchine e Attrezzature",
      icon: Wrench,
      courses: [
        { title: "Corso per Addetti alla Conduzione di Piattaforme di Lavoro Elevabili (PLE)", duration: "10 ore", level: "intermedio", url: "/servizi/formazione/piattaforme-elevabili" },
        { title: "Corso Aggiornamento per Addetti alla Conduzione di Piattaforme di Lavoro Elevabili (PLE)", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-piattaforme-elevabili" },
        { title: "Corso per Addetti e Preposti Montaggio, Smontaggio e Trasformazione di Ponteggi", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/ponteggi" },
        { title: "Corso Aggiornamento Addetti e Preposti Montaggio, Smontaggio e Trasformazione di Ponteggi", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-ponteggi" },
        { title: "Corso Utilizzo DPI Anticaduta (DPI 3° Categoria)", duration: "8 ore", level: "intermedio", url: "/servizi/formazione/dpi-anticaduta" },
        { title: "Corso di Aggiornamento DPI Anticaduta", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-dpi-anticaduta" },
        { title: "Corso per Addetti alla Conduzione di Escavatori", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/escavatori" },
        { title: "Corso Aggiornamento per Addetti alla Conduzione di Escavatori", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-escavatori" },
        { title: "Corso per Addetti alla Conduzione Carroponte con Comando", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/carroponte" },
        { title: "Corso Aggiornamento per Addetti alla Conduzione Carroponte con Comando", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-carroponte" },
        { title: "Corso per Addetti alla Conduzione di Gru per Autocarro", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/gru-autocarro" },
        { title: "Corso di Aggiornamento per Addetti alla Conduzione di Gru per Autocarro", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-gru-autocarro" },
        { title: "Corso Addetto Segnaletica Stradale", duration: "8 ore", level: "base", url: "/servizi/formazione/segnaletica-strada" },
        { title: "Corso di Aggiornamento Addetto alla Segnaletica Stradale", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-segnaletica-strada" },
        { title: "Corso Preposti Stradali", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/preposti-stradali" },
        { title: "Corso di Aggiornamento Preposti Stradali", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-preposti-stradali" },
        { title: "Corso per Addetti alla Conduzione di Trattori Agricoli", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/trattori-agricoli" },
        { title: "Corso Aggiornamento per Addetti alla Conduzione di Trattori Agricoli", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-trattori-agricoli" },
        { title: "Corso per Lavoratori che Operano in Ambienti Sospetti di Inquinamento", duration: "12 ore", level: "intermedio", url: "/servizi/formazione/ambienti-sospetti" },
        { title: "Corso di Aggiornamento per Lavoratori che Operano in Ambienti Sospetti di Inquinamento", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-ambienti-sospetti" },
        { title: "Corso PES/PAV", duration: "16 ore", level: "avanzato", url: "/servizi/formazione/pespav" },
        { title: "Corso Aggiornamento PES/PAV", duration: "4 ore", level: "base", url: "/servizi/formazione/aggiornamento-pespav" },
      ],
    },
  ];

  // Flatten all courses with category info
  const allCourses = categories.flatMap(cat => 
    cat.courses.map(course => ({ ...course, category: cat.title }))
  );

  // Filter courses based on selected filters
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const categoryMatch = selectedCategory === "all" || course.category === selectedCategory;
      const durationMatch = selectedDuration === "all" || course.duration.includes(selectedDuration);
      const levelMatch = selectedLevel === "all" || course.level === selectedLevel;
      const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      
      return categoryMatch && durationMatch && levelMatch && searchMatch;
    });
  }, [selectedCategory, selectedDuration, selectedLevel, searchTerm]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedDuration("all");
    setSelectedLevel("all");
    setSearchTerm("");
  };

  const hasActiveFilters = selectedCategory !== "all" || selectedDuration !== "all" || selectedLevel !== "all" || searchTerm !== "";

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

        {/* Advanced Filters Section */}
        <section className="py-8 md:py-12 bg-white border-b border-border">
          <div className="container">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2 className="text-2xl font-bold text-foreground">Filtra i Corsi</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Search */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Cerca Corso</label>
                <input
                  type="text"
                  placeholder="Es: Primo Soccorso..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Categoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tutte le Categorie</option>
                  {categories.map((cat) => (
                    <option key={cat.title} value={cat.title}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Durata</label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tutte le Durate</option>
                  <option value="2 ore">2-4 ore</option>
                  <option value="5 ore">5-8 ore</option>
                  <option value="12 ore">12-16 ore</option>
                  <option value="32 ore">32+ ore</option>
                </select>
              </div>

              {/* Level Filter */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Livello</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">Tutti i Livelli</option>
                  <option value="base">Base</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzato">Avanzato</option>
                </select>
              </div>
            </div>

            {/* Reset Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                <X className="w-4 h-4" />
                Ripristina Filtri
              </button>
            )}

            {/* Results Count */}
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">{filteredCourses.length}</span> corsi trovati
            </div>
          </div>
        </section>

        {/* Filtered Courses Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course, idx) => (
                  <Link key={idx} href={course.url}>
                    <div className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group h-full">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 transition-colors flex-1">
                          {course.title}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 whitespace-nowrap ml-2">
                          {course.level === "base" && "Base"}
                          {course.level === "intermedio" && "Intermedio"}
                          {course.level === "avanzato" && "Avanzato"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{course.category}</p>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">Nessun corso corrisponde ai filtri selezionati.</p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Ripristina Filtri
                </button>
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
