import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw } from "lucide-react";

export default function BLSDAENew() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Primo Soccorso</a>
              <span>/</span>
              <span className="text-foreground font-medium">Corso di Abilitazione BLSD Laico Defibrillatore DAE</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  SPECIALIZZAZIONE
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1631217314831-c6227db76b6e?w=600&h=400&fit=crop" 
                  alt="Corso BLSD DAE" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">DEFIBRILLATORE DAE</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Abilitazione BLSD Laico Defibrillatore DAE</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>5 ore</strong> - Formazione teorico-pratica per l'utilizzo del defibrillatore
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">5 ore (teorico + pratico)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                    <Briefcase className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">Aula a calendario / Residenziale</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento biennale (2 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20BLSD%20Laico%20Defibrillatore%20DAE"
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
                  Il corso DAE è un <strong>percorso formativo teorico-pratico che abilita all'uso del defibrillatore semiautomatico esterno</strong> e alle manovre di rianimazione cardiopolmonare (RCP o BLS-D) su adulti e bambini, fondamentali nei casi di arresto cardiaco improvviso.
                </p>

                <p className="text-lg text-muted-foreground font-semibold mb-4">Gli obiettivi del corso sono di fornire le conoscenze per:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Riconoscere un arresto cardiaco</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Addestrare alle manovre di rianimazione cardiopolmonare (BLS) su adulto, bambino e lattante</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Insegnare il corretto utilizzo del defibrillatore DAE</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Formare rispetto l'integrazione del sistema di emergenza (118/112) e le corrette procedure di allerta</span>
                  </li>
                </ul>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-green-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso è rivolto a chi intende <strong>acquisire le competenze e l'autorizzazione all'utilizzo dei Defibrillatori Semi automatici esterni (DAE)</strong>. È particolarmente indicato per personale aziendale, operatori di strutture pubbliche e private, e chiunque desideri essere preparato a gestire situazioni di emergenza cardiaca.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Normativa DAE</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Legge 3 aprile 2001, n. 120</li>
                      <li>• D.M. 18 marzo 2011</li>
                      <li>• Legge 4 agosto 2021, n. 116 ("Legge DAE")</li>
                      <li>• Decreto Balduzzi (D.M. 24 aprile 2013)</li>
                      <li>• Linee Guida Internazionali (ERC/AHA)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Il corso proposto prevede la trattazione di due moduli:
                </p>

                <div className="space-y-8">
                  {/* Modulo Teorico */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo Teorico</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Cos'è l'arresto cardiaco e come riconoscerlo</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Catena della sopravvivenza</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Principi di funzionamento del DAE</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Modalità di chiamata e comunicazione con il 118/112</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo Pratico */}
                  <div className="border-l-4 border-emerald-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo Pratico</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Rianimazione cardiopolmonare (BLS) su adulto, bambino e lattante</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Tecniche di disostruzione delle vie respiratorie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Simulazioni di utilizzo del DAE su manichino</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Esercitazioni di team work e gestione dello scenario d'emergenza</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>5 ore</strong> (suddivise in due moduli: teorico e pratico)
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
                    Una volta conclusa la formazione, verrà rilasciato <strong>attestato di partecipazione</strong> (previa frequenza del <strong>90% delle ore</strong> di formazione previste) <strong>valido 2 anni</strong>.
                  </p>
                </div>
              </div>

              {/* Sanzioni */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Sanzioni</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Attualmente non esiste una normativa nazionale che imponga in modo generalizzato l'obbligo di formazione DAE per tutte le aziende; quindi, non sono previste sanzioni dirette per la mancata formazione del personale all'uso del DAE, salvo alcuni casi specifici.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tuttavia, in determinati contesti, la mancata formazione e la mancata disponibilità di personale abilitato all'uso del DAE può comportare <strong>responsabilità e sanzioni</strong>, in particolare quando l'obbligo è stabilito da norme di settore.
                  </p>
                </div>
              </div>

              {/* Aggiornamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Aggiornamento</h2>
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso di formazione per lavoratori prevede un <strong>aggiornamento periodico biennale di 2 ore</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-green-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20BLSD%20Laico%20Defibrillatore%20DAE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors"
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
