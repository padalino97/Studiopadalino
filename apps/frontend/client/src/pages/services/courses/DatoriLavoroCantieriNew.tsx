import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, BookOpen, MessageCircle, Building2 } from "lucide-react";

export default function DatoriLavoroCantieriNew() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Sicurezza</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso per Datori di Lavoro con Modulo Cantieri</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  CANTIERI
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Corso Datori di Lavoro Cantieri" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">SICUREZZA NEI CANTIERI TEMPORANEI</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Datori di Lavoro con Modulo Cantieri</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>22 ore</strong> con rilascio attestato valido ai sensi del nuovo Accordo Stato-Regioni del 17 aprile 2025.
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">22 ore di formazione (16 + 6 modulo cantieri)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <Building2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">E-Learning o Videoconferenza</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Aggiornamento</p>
                      <p className="text-sm text-muted-foreground">Cadenza quinquennale (6 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Datori%20di%20Lavoro%20con%20Modulo%20Cantieri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  Il Corso per Datori di Lavoro nasce con l'obiettivo di rafforzare la capacità dei titolari d'impresa di gestire in modo consapevole e responsabile la salute e sicurezza nei luoghi di lavoro. Non è soltanto un adempimento normativo: è un vero e proprio <strong>strumento strategico per trasformare il Datore di Lavoro in un motore di prevenzione</strong>, capace di costruire un ambiente aziendale sicuro, organizzato e orientato al miglioramento continuo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il corso mira a rendere i Datori di Lavoro pienamente consapevoli dei propri obblighi giuridici e normativi, fornendo le competenze necessarie per evitare errori che potrebbero tradursi in sanzioni pesanti e danni reputazionali. Si concentra inoltre sul trasferimento di competenze organizzative e gestionali fondamentali per strutturare un sistema di prevenzione e protezione che sia concreto e non solo formale.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso, con l'integrazione del <strong>Modulo Cantieri</strong>, serve a garantire competenze specifiche in materia di salute e sicurezza nei cantieri temporanei o mobili (Titolo IV del d.lgs. 81/2008).
                </p>
              </div>

              {/* Competenze Acquisite */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-orange-900 mb-6">Competenze Acquisite</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Il Datore di Lavoro potrà essere messo in grado di:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conoscere i rischi tipici dei cantieri temporanei e mobili, inclusi quelli derivanti da attività interferenti</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acquisire competenze sulla gestione operativa della sicurezza in cantiere</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprendere ruoli e responsabilità (committente, coordinatori, imprese, subappaltatori, preposti, ecc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Applicare le norme del Titolo IV del d.lgs. 81/2008 (PSC, POS, notifica preliminare, etc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestire la cooperazione e il coordinamento tra imprese e lavoratori autonomi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pianificare e controllare attività ad alto rischio (scavi, ponteggi, lavori in quota, ecc.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Verificare la documentazione obbligatoria di cantiere e implementare sistemi di vigilanza</span>
                  </li>
                </ul>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Il Corso per Datori di Lavoro con Modulo Cantieri è rivolto a tutti i <strong>titolari d'impresa che hanno la responsabilità diretta della salute e sicurezza nei luoghi di lavoro</strong>, indipendentemente dal fatto che svolgano o meno i compiti del Servizio di Prevenzione e Protezione (RSPP) e che operano nei settori ATECO in cui siano coinvolti cantieri temporanei o mobili.
                </p>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">Costruzioni (ATECO F):</p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Costruzione di edifici</li>
                      <li>• Ingegneria civile</li>
                      <li>• Lavori specializzati per l'edilizia</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">Altri settori con attività in cantiere:</p>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>• Impiantistica (es. elettrici/idraulici in cantiere)</li>
                      <li>• Manutenzioni straordinarie su strutture/impianti</li>
                      <li>• Montaggio di ponteggi o opere provvisionali</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Accordo Stato-Regioni del 17 aprile 2025</p>
                    <p className="text-muted-foreground">
                      Pubblicato nella Gazzetta Ufficiale n. 119 del 24 maggio 2025. Questo accordo è stato adottato ai sensi dell'articolo 37, comma 2, del D.lgs. 9 aprile 2008, n. 81 (Testo Unico sulla Sicurezza sul Lavoro), come modificato dalla Legge 17 dicembre 2021, n. 215.
                    </p>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  L'iter formativo prevede la trattazione dei seguenti moduli per un totale di 22 ore:
                </p>

                <div className="space-y-8">
                  {/* Modulo 1 */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 1 – Giuridico-normativo (8 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Il sistema legislativo in materia di salute e sicurezza dei lavoratori</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">L'identificazione e il ruolo del Datore di Lavoro in relazione al contesto organizzativo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I soggetti del sistema di prevenzione aziendale: compiti, obblighi, responsabilità</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La delega di funzioni: condizioni e limiti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La responsabilità civile e penale del Datore di Lavoro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La responsabilità amministrativa ai sensi del d.lgs. n. 231/2001</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Prevenzione della violenza e delle molestie sul luogo di lavoro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Inserimento di lavoratori disabili</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I ruoli delle ASL, INL, VVF e Inail</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gli organi di vigilanza e le procedure ispettive</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 2 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 2 – Organizzazione e gestione della SSL (8 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Le misure organizzative e gestionali di tutela secondo gli artt. 15 e 30 del d.lgs. 81/2008</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Valutazione dei rischi e predisposizione delle misure di prevenzione e protezione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Rischi collegati allo stress lavoro-correlato</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Lavoratrici in stato di gravidanza e differenze di genere e età</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La gestione del rischio interferenziale e il DUVRI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Organizzazione e gestione delle emergenze, primo soccorso, appalti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Sorveglianza sanitaria</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Informazione, formazione, partecipazione e consultazione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Vigilanza sul rispetto delle procedure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Costi della mancata sicurezza e benefici della sicurezza</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo Cantieri */}
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO CANTIERI (6 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I soggetti definiti dal Titolo IV, capo I, e relativi obblighi e responsabilità</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La redazione dei piani di sicurezza (PSC, POS): finalità, tempi e contenuti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Le misure generali di tutela secondo l'art. 95 del d.lgs. 81/2008</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gli obblighi del Datore di Lavoro, dirigenti e preposti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Il cronoprogramma dei lavori</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Esempi e analisi di PSC e POS</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>22 ore</strong> totali: 16 ore (2 moduli) + 6 ore (modulo cantieri)
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
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
                        La mancata formazione comporta sanzioni per il Datore di Lavoro, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.708,61 a 7.403,96 euro</strong>, come previsto dall'art. 55, comma 5, lettera c) del d.lgs. 81/2008.
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
                    Il corso di formazione per Datori di Lavoro prevede un <strong>aggiornamento periodico quinquennale di 6 ore</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-orange-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Datori%20di%20Lavoro%20con%20Modulo%20Cantieri"
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
