import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw } from "lucide-react";

export default function DirigentiNew() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Dirigenti</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso per Dirigenti</span>
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
                  LEADERSHIP
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Corso per Dirigenti" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">RUOLO DIRIGENZIALE</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Dirigenti</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>12 ore</strong> - Formazione per dirigenti secondo il nuovo Accordo Stato-Regioni
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">12 ore (4 moduli)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-violet-50 p-4 rounded-lg">
                    <Briefcase className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">E-Learning / Videoconferenza sincrona</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-fuchsia-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale (6 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Dirigenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  Il Dirigente è definito dal D.lgs. n. 81/2008 come <strong>"garante organizzativo" della sicurezza e igiene del lavoro</strong>, una persona che, in ragione delle competenze professionali e di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, attua le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  La funzione del Dirigente comprende <strong>obblighi di informazione, formazione e addestramento</strong> dei lavoratori, ma anche di RLS, addetti antincendio e primo soccorso, preposti e dirigenti stessi, configurandosi come un ruolo estremamente importante e dotato di ampia autonomia decisionale nella gestione della Sicurezza dei Lavoratori.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso per dirigenti in materia di salute e sicurezza sul lavoro <strong>fornisce ai partecipanti le conoscenze e competenze specifiche per gestire correttamente la sicurezza all'interno dell'azienda</strong>. Il corso sostituisce integralmente la formazione generale e specifica prevista per i lavoratori.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-purple-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso è rivolto a <strong>tutti coloro che, secondo la definizione del D.lgs. 81/2008 (art. 2, comma 1, lettera d), esercitano funzioni di gestione o supervisione, attuando le direttive del datore di lavoro</strong>.
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
                  L'iter formativo prevede la trattazione dei seguenti moduli:
                </p>

                <div className="space-y-8">
                  {/* Modulo 1 */}
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 1 - Giuridico-Normativo</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Il sistema legislativo in materia di salute e sicurezza dei lavoratori</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I soggetti del sistema di prevenzione aziendale: compiti, obblighi, responsabilità</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La delega di funzioni</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La responsabilità civile e penale del dirigente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">La responsabilità amministrativa (D.lgs. n. 231/2001)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Prevenzione della violenza e molestie sul luogo di lavoro</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Inserimento di lavoratori disabili</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">I ruoli delle ASL, INL, VVF e INAIL</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gli organi di vigilanza e le procedure ispettive</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 2 */}
                  <div className="border-l-4 border-violet-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 2 - Gestione e Organizzazione della Sicurezza</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità di gestione ed organizzazione dei processi relative alla salute e sicurezza</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modelli di organizzazione e gestione (art. 30 D.lgs. 81/2008)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-violet-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Sistemi di gestione della salute e sicurezza (normativa volontaria)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 3 */}
                  <div className="border-l-4 border-fuchsia-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 3 - Compiti Specifici del Dirigente</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Misure tecniche, organizzative e procedurali di prevenzione e protezione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Importanza della sorveglianza sanitaria</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Obblighi connessi ai contratti di appalto, d'opera e di somministrazione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gestione del rischio interferenziale e il DUVRI</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Organizzazione della prevenzione incendi, primo soccorso e emergenze</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 4 */}
                  <div className="border-l-4 border-pink-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 4 - Comunicazione, Formazione e Consultazione</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Tecniche e strumenti di comunicazione e informazione</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gli obblighi formativi per i diversi soggetti aziendali</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Gestione dei gruppi di lavoro e dei conflitti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Consultazione e partecipazione dei rappresentanti dei lavoratori</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>12 ore</strong>, suddivise in 4 moduli: uno di carattere giuridico normativo, il secondo sull'organizzazione della sicurezza, il terzo sui compiti specifici del dirigente e il quarto sulla comunicazione.
                </p>
                <p className="text-lg text-muted-foreground">
                  Per i dirigenti di imprese affidatarie nei cantieri temporanei e mobili si dovrà aggiungere il modulo aggiuntivo "cantieri" di 6 ore.
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
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
                        La mancata formazione del dirigente comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.474,21 € a 6.388,23 €</strong>, come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
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
                    Il corso di formazione per Dirigenti prevede un <strong>aggiornamento periodico quinquennale di 6 ore</strong>.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20per%20Dirigenti"
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
