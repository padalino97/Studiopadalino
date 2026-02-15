import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function AggiornamentoLavoratoriNew() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <span>/</span>
              <a href="/servizi/formazione" className="hover:text-foreground transition-colors">Formazione</a>
              <span>/</span>
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Lavoratori</a>
              <span>/</span>
              <span className="text-foreground font-medium">Aggiornamento</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  AGGIORNAMENTO
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" 
                  alt="Aggiornamento Lavoratori" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Aggiornamento per Lavoratori</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>6 ore</strong> - Cadenza quinquennale
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">6 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Tutti i lavoratori (Basso, Medio, Alto rischio)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-sky-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Scadenza</p>
                      <p className="text-sm text-muted-foreground">Ogni 5 anni dalla formazione iniziale</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Lavoratori"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contattaci su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl">
              {/* Descrizione */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Descrizione</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il Testo Unico sulla sicurezza sul lavoro, approvato con il D.lgs. 81/2008, fornisce la prima e più rilevante definizione di lavoratore: <strong>"Persona che, indipendentemente dalla tipologia contrattuale, svolge un'attività lavorativa nell'ambito dell'organizzazione di un datore di lavoro pubblico o privato, con o senza retribuzione"</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Si tratta di una figura di fondamentale importanza, che <strong>rappresenta l'ossatura organizzativa di ogni impresa</strong>. Il lavoratore contribuisce in modo essenziale al raggiungimento degli obiettivi aziendali e incide significativamente sulla reputazione dell'organizzazione.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso di aggiornamento <strong>non è una semplice ripetizione della formazione pregressa</strong>, ma si focalizza su <strong>aspetti evolutivi, di approfondimento e di consolidamento delle buone pratiche</strong>.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso di aggiornamento costituisce un <strong>requisito legale</strong> per <strong>tutti i lavoratori</strong> (subordinati, equiparati, ecc.) di aziende classificate a rischio <strong>Basso, Medio o Alto</strong> che abbiano completato la formazione iniziale (Generale + Specifica) da <strong>almeno 5 anni</strong> (o il cui ultimo aggiornamento risalga a 5 anni prima).
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                  È responsabilità del Datore di Lavoro:
                </p>
                <ul className="space-y-2 text-gray-700 mt-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Tenere traccia delle scadenze formative dei propri dipendenti</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Assicurare che frequentino l'aggiornamento nei tempi previsti</span>
                  </li>
                </ul>
                <p className="text-red-600 font-semibold mt-4">
                  ⚠️ La mancata erogazione dell'aggiornamento è sanzionabile.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Nuovo Accordo Stato-Regioni 2025</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Accordo Stato-Regioni del 17 aprile 2025</li>
                      <li>• Pubblicato nella Gazzetta Ufficiale n. 119 del 24 maggio 2025</li>
                      <li>• D.lgs. 9 aprile 2008, n. 81 (Testo Unico sulla Sicurezza sul Lavoro)</li>
                      <li>• Art. 37, comma 2 del D.lgs. 81/08</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Il corso prevede la trattazione di argomenti evolutivi e di consolidamento:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">📋 Aggiornamenti Normativi</h3>
                    <p className="text-gray-700">
                      Illustrazione delle principali <strong>novità legislative o interpretative</strong> in materia di sicurezza sul lavoro avvenute negli ultimi 5 anni.
                    </p>
                  </div>

                  <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-900 mb-3">⚠️ Evoluzione dei Rischi</h3>
                    <p className="text-gray-700">
                      Analisi di <strong>nuovi rischi emergenti</strong> (es. legati a nuove tecnologie, digitalizzazione, cambiamenti climatici) o approfondimenti su rischi specifici rilevanti per il settore.
                    </p>
                  </div>

                  <div className="bg-sky-50 border-l-4 border-sky-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-sky-900 mb-3">🛡️ Procedure e Misure di Prevenzione</h3>
                    <p className="text-gray-700">
                      Riepilogo e consolidamento delle <strong>procedure di sicurezza aziendali</strong>, delle misure di prevenzione e protezione, e dell'uso corretto dei DPI.
                    </p>
                  </div>

                  <div className="bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-cyan-900 mb-3">🏢 Organizzazione della Sicurezza</h3>
                    <p className="text-gray-700">
                      Riepilogo dei <strong>ruoli e delle responsabilità</strong> all'interno del sistema di prevenzione aziendale.
                    </p>
                  </div>

                  <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-teal-900 mb-3">📊 Fonti di Rischio Specifiche e Incidenti</h3>
                    <p className="text-gray-700">
                      Analisi di <strong>near miss</strong> (ovvero, i "quasi incidenti") o <strong>infortuni realmente accaduti</strong> (in forma anonima) per trarne insegnamenti pratici e rafforzare la consapevolezza.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-emerald-900 mb-3">🎯 Approfondimenti Tematici</h3>
                    <p className="text-gray-700">
                      Focus su argomenti specifici ritenuti prioritari (es. <strong>stress lavoro-correlato, ergonomia, sicurezza stradale</strong> per chi guida per lavoro).
                    </p>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>6 ore</strong>
                </p>
              </div>

              {/* Modalità di Erogazione */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Modalità di Erogazione</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso può essere erogato in <strong>modalità E-Learning</strong> o <strong>in presenza</strong>, secondo le preferenze dell'azienda e nel rispetto della normativa vigente.
                  </p>
                </div>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine di ogni lezione verrà effettuato un <strong>test di apprendimento</strong> al fine di verificare la corretta comprensione dei partecipanti.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Una volta conclusa la formazione, verrà rilasciato <strong>attestato di partecipazione</strong> (previa frequenza del <strong>90% delle ore</strong> di formazione previste).
                  </p>
                </div>
              </div>

              {/* Sanzioni */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Sanzioni</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        La mancata formazione del lavoratore comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.708,61 € a 7.403,96 €</strong>, come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aggiornamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Aggiornamento</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'aggiornamento periodico ha cadenza <strong>quinquennale</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Lavoratori"
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
