import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function PiattaformeElevabiliNew() {
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
              <span className="text-foreground font-medium">Piattaforme Elevabili (PLAE)</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  PRATICA OBBLIGATORIA
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Piattaforme Elevabili" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Addetti alla Conduzione di Piattaforme di Lavoro Mobili Elevabili (PLAE)</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Con e Senza Stabilizzatori</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>10 ore</strong> (1 ora giuridica + 3 ore tecnica + 6 ore pratica)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">10 ore (1 giuridica + 3 tecnica + 6 pratica)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Operatori di piattaforme elevabili in cantieri e lavori in quota</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-violet-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale (4 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Piattaforme%20Elevabili"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  Le piattaforme di lavoro mobili elevabili (PLAE), comunemente note come "piattaforme aeree", sono attrezzature di lavoro progettate per sollevare persone a quote elevate in sicurezza. Disponibili con e senza stabilizzatori, sono utilizzate in cantieri, manutenzione edile, installazioni, e lavori in quota in generale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'utilizzo di piattaforme elevabili comporta rischi significativi legati all'altezza, alla stabilità e alla caduta dall'alto. Per questo motivo, una formazione specifica e l'abilitazione all'uso sono obbligatorie per garantire la sicurezza dell'operatore e del personale circostante.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso è rivolto a <strong>tutti gli operatori</strong> che devono utilizzare piattaforme di lavoro mobili elevabili, sia con che senza stabilizzatori. È obbligatorio per chiunque operi queste attrezzature in cantieri, manutenzione edile, installazioni, e qualsiasi contesto che preveda lavori in quota.
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
                
                {/* Modulo 1 - Giuridico */}
                <div className="mb-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">MODULO TEORICO GIURIDICO NORMATIVO (1 ORA)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Presentazione del corso</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cenni di normativa generale in materia di igiene e sicurezza del lavoro</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Disposizioni di legge in materia di uso delle attrezzature di lavoro (D.lgs. n. 81/2008)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Responsabilità dell'operatore</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 2 - Tecnico */}
                <div className="mb-8 bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">MODULO TEORICO TECNICO (3 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Categorie di PLE: i vari tipi e descrizione delle caratteristiche generali e specifiche</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Dispositivi di comando e di sicurezza: identificazione e funzionamento</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Controlli da effettuare prima dell'utilizzo: controlli visivi e funzionali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">DPI specifici da utilizzare: caschi, imbracature, cordino di trattenuta e modalità di utilizzo</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Modalità di utilizzo in sicurezza e rischi: analisi dei rischi ricorrenti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Procedure operative di salvataggio: modalità di discesa in emergenza</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 3 - Pratico */}
                <div className="bg-violet-50 border-l-4 border-violet-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-violet-900 mb-4">MODULO PRATICO PLE CON E SENZA STABILIZZATORI (6 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Individuazione dei componenti strutturali e sistemi di stabilizzazione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Controlli pre-utilizzo: controlli visivi e funzionali della PLE</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Controlli prima del trasferimento su strada</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pianificazione del percorso: pendenze, accesso, ostacoli</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Movimentazione e posizionamento della PLE con delimitazione dell'area di lavoro</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esercitazioni di pratiche operative e simulazioni di movimentazioni in quota</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Manovre di emergenza per il recupero a terra della piattaforma</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Messa a riposo della PLE a fine lavoro e modalità di ricarica batterie</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>10 ore totali</strong>: 1 ora formazione giuridica + 3 ore formazione tecnica + 6 ore formazione pratica
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
                    Al termine del modulo pratico verrà effettuata una <strong>prova pratica di verifica finale</strong>, consistente nell'esecuzione di almeno 4 delle prove pratiche.
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

              {/* Aggiornamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Aggiornamento</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso di formazione addetti all'uso di PLE prevede un <strong>aggiornamento periodico quinquennale di 4 ore</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-purple-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Piattaforme%20Elevabili"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-purple-50 transition-colors"
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
