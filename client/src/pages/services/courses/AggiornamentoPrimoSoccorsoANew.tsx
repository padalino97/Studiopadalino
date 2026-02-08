import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Heart, RefreshCw } from "lucide-react";

export default function AggiornamentoPrimoSoccorsoANew() {
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
              <span className="text-foreground font-medium">Corso Aggiornamento Primo Soccorso Gruppo A</span>
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
                  src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop" 
                  alt="Aggiornamento Primo Soccorso Gruppo A" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-6 rounded-lg">
                  <p className="text-white font-bold text-lg">GRUPPO A - AGGIORNAMENTO TRIENNALE</p>
                </div>
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso Aggiornamento Primo Soccorso Gruppo A</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>6 ore</strong> per Addetti al primo soccorso in aziende Gruppo A - Aggiornamento triennale obbligatorio
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">6 ore (2 ore teoria + 4 ore pratica)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <Heart className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Modalità</p>
                      <p className="text-sm text-muted-foreground">Aula a calendario con addestramento pratico</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Attestato valido 3 anni</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Primo%20Soccorso%20Gruppo%20A"
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
                  Il corso si pone gli obiettivi di <strong>aggiornare le conoscenze teoriche acquisite nel corso base di 16 ore</strong>, in relazione alle normative e alle procedure di primo soccorso.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Permette di <strong>consolidare le abilità pratiche di intervento</strong> in situazioni di emergenza, con particolare attenzione alle manovre di rianimazione cardiopolmonare (BLS) e di disostruzione delle vie respiratorie.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il corso approfondisce i <strong>protocolli di attivazione e comunicazione con il sistema di emergenza sanitaria (118)</strong> e il corretto utilizzo dei presidi contenuti nelle cassette di pronto soccorso.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aggiorna le <strong>tecniche pratiche con simulazioni realistiche</strong> per migliorare la prontezza e l'efficacia dell'intervento, mantenendo la conformità normativa prevista dal D.M. 388/2003.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso di aggiornamento primo soccorso è rivolto ai lavoratori designati come <strong>addetti al primo soccorso in azienda</strong>, in base a quanto previsto dal D.lgs. 81/2008 e dal DM 388/2003, nello specifico ad <strong>Aziende del Gruppo A</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Rientrano in questa categoria:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Aziende o unità produttive con attività soggette all'obbligo di dichiarazione o notifica (art. 2, D.lgs. 334/99 - rischio incidente rilevante)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Centrali termoelettriche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Impianti e laboratori nucleari</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Aziende estrattive ed altre attività minerarie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Lavori in sotterraneo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Aziende per la fabbricazione di esplosivi, polveri e munizioni</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Aziende o unità produttive con oltre cinque lavoratori classificate o riconducibili a gruppi tariffari INAIL con indice infortunistico di inabilità permanente superiore a quattro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Aziende o unità produttive del comparto agricoltura con oltre cinque lavoratori a tempo indeterminato</span>
                  </li>
                </ul>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">D.lgs. 81/08</p>
                    <ul className="text-muted-foreground space-y-1 ml-4">
                      <li>• Art. 18 - Obblighi del datore di lavoro</li>
                      <li>• Art. 43 - Misure di prevenzione incendi</li>
                      <li>• Art. 45 - Primo soccorso</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">D.M 388/2003</p>
                    <p className="text-muted-foreground">Decreto Ministeriale 15 luglio 2003 - Requisiti dell'attrezzatura di primo soccorso</p>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Il corso prevede la trattazione di due moduli per un totale di 6 ore:
                </p>

                <div className="space-y-8">
                  {/* Modulo 1 */}
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 1 – Richiamo teorico (circa 2 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Normativa di riferimento (D.lgs. 81/2008 e D.M. 388/2003)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Analisi dei principali rischi aziendali e procedure interne di primo soccorso</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Allerta del sistema di emergenza: modalità di comunicazione e informazioni da fornire</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Ripasso del riconoscimento delle principali emergenze sanitarie (arresto cardiaco, ostruzione vie respiratorie, malori, shock, lesioni traumatiche)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Modulo 2 */}
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Modulo 2 – Addestramento pratico (circa 4 ore)</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Rianimazione cardio-polmonare (BLS) su manichino adulto</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Manovre di disostruzione delle vie aeree in adulti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Posizione laterale di sicurezza (PLS) e tecniche di trasporto dell'infortunato</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Trattamento di ferite ed emorragie</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Traumi cranici, spinali e toracici</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Ustioni e avvelenamenti</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Simulazioni di scenari realistici di primo soccorso, con utilizzo dei presidi contenuti nella cassetta di pronto soccorso</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>6 ore</strong> totali (2 ore teoria + 4 ore pratica)
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
                    Una volta conclusa la formazione, verrà rilasciato <strong>attestato di partecipazione</strong> (previa frequenza del <strong>90% delle ore</strong> di formazione previste) <strong>valido 3 anni</strong>.
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
                        La mancata formazione del lavoratore comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 800€ a 4.000€</strong>, come previsto dall'art. 43, comma 1, lettera b) del D.lgs. 81/2008.
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
                    Il corso di aggiornamento ha cadenza <strong>triennale</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Primo%20Soccorso%20Gruppo%20A"
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
