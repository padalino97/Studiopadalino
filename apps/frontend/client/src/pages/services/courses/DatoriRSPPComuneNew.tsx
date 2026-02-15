import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw } from "lucide-react";

export default function DatoriRSPPComuneNew() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Datori di Lavoro RSPP</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso per Datori di Lavoro RSPP - Modulo Comune</span>
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
                  SPECIALIZZAZIONE
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Corso RSPP Modulo Comune" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">MODULO COMUNE - NUOVO ACCORDO</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Datori di Lavoro RSPP - Modulo Comune</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>8 ore</strong> - Formazione per Datori di Lavoro che svolgono il ruolo di RSPP
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">8 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg">
                    <Briefcase className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">Videoconferenza sincrona a calendario</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-cyan-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale (8 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Datori%20RSPP%20Modulo%20Comune"
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
                  Il D.lgs. 81/08, all'articolo 34, offre al Datore di Lavoro la possibilità di <strong>svolgere direttamente i compiti propri del Servizio di Prevenzione e Protezione (SPP)</strong>, assumendo quindi il ruolo di RSPP (Responsabile del Servizio di Prevenzione e Protezione) all'interno della propria azienda.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Questa scelta, spesso motivata da ragioni di controllo diretto sulla gestione della sicurezza o da considerazioni economiche iniziali, è però subordinata alla frequenza di uno specifico corso di formazione, la cui durata e contenuti sono definiti dall'Accordo Stato-Regioni del 17/04/2025.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso ha l'obiettivo di <strong>fornire al datore di lavoro le competenze necessarie per gestire in autonomia il Servizio di Prevenzione e Protezione dai rischi professionali</strong>, secondo quanto previsto dalla normativa sulla sicurezza sul lavoro.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso per Datori di Lavoro che svolgono direttamente l'incarico di RSPP (DLSPP) previsto dal nuovo Accordo Stato-Regioni è rivolto a <strong>tutti i titolari d'impresa che svolgano direttamente i compiti del Servizio di Prevenzione e Protezione</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  In base a quanto previsto dal nuovo Accordo, i datori di lavoro che intendono svolgere direttamente il ruolo di RSPP dovranno necessariamente frequentare, prima di tale formazione, un percorso formativo specifico per datori di lavoro, la cui durata varia a seconda del settore di appartenenza.
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
                      <li>• Legge 17 dicembre 2021, n. 215</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Il percorso formativo si articola con un modulo comune e ulteriori moduli tecnici-integrativi solo per particolari settori di riferimento. Per il modulo comune, l'iter formativo prevede la trattazione dei seguenti argomenti:
                </p>

                <div className="space-y-8">
                  {/* Argomento 1 */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Il Processo di Valutazione: Criteri e Metodologie</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Criteri e strumenti per l'individuazione e la valutazione dei rischi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Struttura e contenuti del documento di valutazione dei rischi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Analisi degli infortuni mancati e modalità di accadimento</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gestione della documentazione tecnico amministrativa</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Procedure semplificate per la redazione della valutazione del rischio</span>
                      </li>
                    </ul>
                  </div>

                  {/* Argomento 2 */}
                  <div className="border-l-4 border-indigo-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">I Fattori di Rischio e Misure di Prevenzione e Protezione</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-semibold text-foreground mb-3">Fattori di rischio relativi a:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Luoghi di lavoro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Attrezzature di lavoro</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Movimentazione manuale dei carichi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">VDT (Videoterminali)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Agenti fisici</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Sostanze pericolose</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Agenti biologici</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Atmosfere esplosive</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Stress lavoro-correlato e fattori psicosociali</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Rischi ricollegabili al genere, all'età e provenienza da altri paesi</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground mb-2">Misure di prevenzione e protezione:</p>
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Misure tecniche, organizzative e procedurali</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Dispositivi di protezione individuale</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-indigo-600 font-bold">•</span>
                            <span className="text-muted-foreground">Segnaletica di sicurezza</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Esercitazione */}
                  <div className="border-l-4 border-cyan-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Esercitazione Pratica</h3>
                    <p className="text-muted-foreground">
                      Predisposizione di un documento di valutazione dei rischi per un caso concreto riferito al settore ATECO di riferimento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>8 ore</strong>
                </p>
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
                        La mancata formazione comporta sanzioni per il Datore di Lavoro, che possono includere <strong>l'arresto da tre a sei mesi o un'ammenda da 3.071,27 € a 7.862,44 €</strong>, come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aggiornamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Aggiornamento</h2>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso di formazione per Datori di Lavoro prevede un <strong>aggiornamento periodico quinquennale di 8 ore</strong>.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Datori%20RSPP%20Modulo%20Comune"
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
