import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, BookOpen, MessageCircle } from "lucide-react";

export default function PrepostiNew() {
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
              <a href="#" className="hover:text-foreground transition-colors">Dirigenti e Preposti</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso per Preposti</span>
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
                  NEW
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Corso per Preposti" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">NUOVO ACCORDO STATO-REGIONI</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Preposti</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>12 ore</strong> con rilascio attestato valido ai sensi del D.lgs. 81/2008 e dell'Accordo Stato-Regioni del 17 aprile 2025.
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">12 ore di formazione</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">Solo in Presenza a Catania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Certificazione</p>
                      <p className="text-sm text-muted-foreground">Attestato riconosciuto a livello nazionale</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Preposti"
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
                  Il preposto è una figura chiave nella gestione della Salute e Sicurezza dei lavoratori in quanto deve svolgere una "vigilanza operativa" sorvegliando all'attività lavorativa e garantendo l'attuazione da parte dei lavoratori delle direttive ricevute dal datore di lavoro.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il D.lgs. 81/08 definisce il "Preposto" come una persona che, <em>"in ragione delle competenze professionali e nei limiti di poteri gerarchici e funzionali, sovrintende alla attività lavorativa e garantisce l'attuazione delle direttive ricevute dal datore di lavoro e dal responsabile della prevenzione"</em>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Operando in "prima linea", non è suo compito adottare misure di prevenzione: il suo obiettivo è far applicare quelle disposte da altri (datore di lavoro e dirigenti) e la sua responsabilità è circoscritta dagli effettivi poteri a lui spettanti, indipendentemente dalle indicazioni normative più ampie o dai compiti assegnati.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso Preposti è rivolto a tutti coloro che, secondo la definizione del D.lgs. 81/2008 (art. 2, comma 1, lettera e), <strong>esercitano funzioni di coordinamento e vigilanza sull'attività di altri lavoratori</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  È richiesto, quale prerequisito di accesso al corso, un adeguato livello di comprensione e conoscenza della lingua italiana (lingua in cui verrà erogato il corso).
                </p>
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
                  Il corso proposto prevede la trattazione di quattro moduli:
                </p>

                <div className="space-y-8">
                  {/* Modulo 1 */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 1 – Giuridico normativo</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Individuazione del preposto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Preposto di fatto ed effettività del ruolo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Compiti e obblighi del preposto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Relazioni tra i vari soggetti interni ed esterni del sistema di prevenzione</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 2 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 2 – Gestione e organizzazione della sicurezza</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità di esercizio della funzione di controllo dell'osservanza da parte dei lavoratori di cui all'art. 19 del d.lgs. n. 81/2008</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità di comunicazione e relazione con i soggetti della prevenzione aziendale</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 3 */}
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 3 – Valutazione delle situazioni di rischio e controllo della corretta esecuzione da parte dei lavoratori delle attività</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Misure tecniche, organizzative e procedurali di prevenzione e protezione adottate a seguito della valutazione dei rischi dell'azienda, con particolare riferimento al contesto in cui il preposto opera</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Obblighi connessi ai contratti di appalto, d'opera e di somministrazione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gestione del rischio interferenziale e il DUVRI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità per sovraintendere e vigilare sulle attività lavorative per garantire l'attuazione delle direttive ricevute</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">L'importanza di individuare e segnalare incidenti e infortuni mancati</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 4 */}
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">MODULO 4 – Comunicazione e informazione</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Tecniche e strumenti di comunicazione e sensibilizzazione dei lavoratori, in particolare neoassunti, somministrati, stranieri</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>12 ore</strong> di formazione in presenza
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
                        La mancata formazione del lavoratore comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.708,61 a 7.403,96 €</strong> come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
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
                    Il corso di formazione per preposti prevede un <strong>aggiornamento periodico biennale di 6 ore</strong>.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Preposti"
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
