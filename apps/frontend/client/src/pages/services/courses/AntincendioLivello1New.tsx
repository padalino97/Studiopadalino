import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, BookOpen, MessageCircle, Flame } from "lucide-react";

export default function AntincendioLivello1New() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Antincendio</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso Antincendio Livello 1</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  LIVELLO 1
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" 
                  alt="Corso Antincendio Livello 1" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">PREVENZIONE E GESTIONE DELLE EMERGENZE</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso Antincendio Livello 1</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>4 ore</strong> per Addetti alla gestione delle emergenze antincendio - Rischio basso (Ex Rischio Basso)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">4 ore di formazione</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <Flame className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">Solo in Presenza a Catania</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Attestato valido 5 anni</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Antincendio%20Livello%201"
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
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso si pone gli obiettivi di fornire ai lavoratori incaricati della prevenzione incendi, lotta antincendio e gestione delle emergenze le <strong>conoscenze e competenze di base per affrontare un principio di incendio in contesti a basso rischio</strong>.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-red-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Questo percorso formativo è un requisito indispensabile per tutti i lavoratori che vengono designati dal Datore di Lavoro come <strong>Addetti alla gestione delle emergenze antincendio</strong> (comunemente, membri della Squadra Antincendio) all'interno di aziende classificate a <strong>Livello 1</strong> secondo i criteri del D.M. 02/09/21.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Rientrano tipicamente in questa categoria le attività:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Non soggette ai controlli dei Vigili del Fuoco (attività non normate e non rientranti nell'Allegato I del DPR 151/2011)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Caratterizzate da un basso rischio di sviluppo di incendi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Dove le probabilità di propagazione delle fiamme sono considerate scarse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>Con presenza di sostanze infiammabili limitata e condizioni di esercizio che offrono scarsa possibilità di innesco</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  È fondamentale per il Datore di Lavoro identificare correttamente il livello di rischio della propria attività per garantire la formazione adeguata ai propri addetti.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">D.lgs. 81/08</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Art. 18 - Obblighi del datore di lavoro</li>
                      <li>• Art. 37 - Formazione dei lavoratori</li>
                      <li>• Art. 43 - Misure di prevenzione incendi</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">D.M 2/09/21 e D.M. 3/09/21</p>
                    <p className="text-muted-foreground">Decreti Ministeriali che definiscono i criteri di classificazione del rischio incendio e i requisiti di formazione</p>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Il corso prevede la trattazione dei seguenti contenuti minimi per un totale di 4 ore:
                </p>

                <div className="space-y-8">
                  {/* Modulo 1 */}
                  <div className="border-l-4 border-red-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">L'incendio e la prevenzione (1 ora)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Principi sulla combustione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Prodotti della combustione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Sostanze estinguenti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Triangolo e tetraedro del fuoco</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Cause ed effetti dell'incendio</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Valutazione dei rischi</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Misure comportamentali e strutturali di prevenzione</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 2 */}
                  <div className="border-l-4 border-orange-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Protezione antincendio (1 ora)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Misure di protezione passiva (compartimentazione, vie di esodo)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Misure di protezione attiva (estintori, impianti - cenni)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Segnaletica di sicurezza</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Impianti di rivelazione e allarme</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Illuminazione di emergenza</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 3 */}
                  <div className="border-l-4 border-yellow-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Procedure da adottare in caso di incendio (2 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Procedure all'scoperta dell'incendio</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità di allarme</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Procedure di evacuazione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Chiamata dei soccorsi (VVF)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Collaborazione con le squadre di emergenza esterne</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>4 ore</strong> di formazione in presenza
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
                    Una volta conclusa la formazione, verrà rilasciato <strong>attestato di partecipazione</strong> (previa frequenza del <strong>90% delle ore</strong> di formazione previste) <strong>valido 5 anni</strong>.
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
                        La mancata formazione del lavoratore comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.315,00 € a 5.699,20 €</strong>, come previsto dall'art. 43, comma 1, lettera b) del D.lgs. 81/2008.
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
                    Il corso di formazione prevede un <strong>aggiornamento periodico quinquennale di 2 ore</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-red-600 to-orange-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-red-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Antincendio%20Livello%201"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-50 transition-colors"
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
