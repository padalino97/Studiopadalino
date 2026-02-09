import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function AggiornamentoPiattaformeElevabiliNew() {
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
              <a href="/servizi/formazione" className="hover:text-foreground transition-colors">Macchine e Attrezzature</a>
              <span>/</span>
              <span className="text-foreground font-medium">Aggiornamento Piattaforme Elevabili</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  AGGIORNAMENTO
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Aggiornamento Piattaforme Elevabili" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Aggiornamento Piattaforme di Lavoro Mobili Elevabili (PLAE)</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Aggiornamento Quinquennale</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>4 ore</strong> (1 ora giuridico-normativa + 3 ore pratiche)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">4 ore (1 giuridico-normativa + 3 pratiche)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Operatori con certificazione scaduta o in scadenza</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Periodicità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale obbligatorio</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Piattaforme%20Elevabili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  Una PLE (Piattaforma di Lavoro Elevabile) è una macchina progettata per sollevare persone, attrezzi o materiali a varie altezze in condizioni di sicurezza, al fine di eseguire lavori in quota come manutenzioni, montaggi, tinteggiature o pulizie di facciate.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  È composta da un piano di lavoro (cestello o piattaforma) e da un sistema di sollevamento installato su una base mobile, generalmente dotata di ruote o cingoli.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Data la natura del suo impiego, la PLE comporta rischi elevati: è quindi essenziale attenersi rigorosamente alle modalità operative previste e alle norme di sicurezza per garantirne l'uso corretto.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-orange-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso di aggiornamento è destinato a <strong>tutti coloro che</strong>, all'interno dell'organizzazione aziendale, <strong>utilizzano piattaforme di lavoro mobili elevabili</strong>, inclusi il datore di lavoro e i soggetti indicati all'art. 21 del D.lgs. 81/08. Gli operatori di PLE devono possedere competenze tecniche specifiche per svolgere in sicurezza le proprie mansioni, manovrando qualsiasi macchina mobile impiegata per il sollevamento di persone a oltre 2 metri di altezza rispetto a un piano stabile.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Nuovo Accordo Stato-Regioni 2025</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• D.lgs. 81/08 Art. 73</li>
                      <li>• Accordo Stato-Regioni del 17 aprile 2025</li>
                      <li>• Gazzetta Ufficiale n. 119 del 24 maggio 2025</li>
                      <li>• D.lgs. 9 aprile 2008, n. 81 (Testo Unico sulla Sicurezza sul Lavoro)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                {/* Modulo 1 - Giuridico Normativo */}
                <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">MODULO TEORICO GIURIDICO NORMATIVO (1 ORA)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cenni di normativa generale in materia di igiene e sicurezza del lavoro</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Disposizioni di legge in materia di uso delle attrezzature di lavoro (D.lgs. n.81/2008)</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 2 - Pratico */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">MODULO PRATICO (3 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Illustrazione dei vari componenti della PLE e delle sicurezze previste</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Manutenzione e verifiche giornaliere e periodiche secondo normativa vigente</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Guida della PLE su percorso di prova per evidenziare le corrette manovre</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>4 ore totali</strong>: 1 ora formazione giuridico-normativa + 3 ore formazione pratica
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine del modulo teorico-tecnico verrà effettuata una <strong>verifica intermedia</strong> consistente in un questionario a risposta multipla. La prova si intende superata con <strong>almeno il 70% delle risposte esatte</strong>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine del modulo pratico verrà effettuata una <strong>prova pratica di verifica finale</strong>.
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
                        La mancata formazione sull'uso di attrezzature di lavoro (art. 73) comporta sanzioni, che possono includere <strong>l'arresto da 3 mesi a 6 mesi o un'ammenda da 2.500 € a 6.400 €</strong>, come previsto dall'art. 87, comma 2, lettera c) del D.lgs. 81/2008.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Periodicità */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Periodicità</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso di aggiornamento ha una <strong>periodicità quinquennale</strong>, come previsto dalla normativa vigente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a rinnovare la tua certificazione?</h2>
              <p className="text-orange-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Piattaforme%20Elevabili"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors"
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
