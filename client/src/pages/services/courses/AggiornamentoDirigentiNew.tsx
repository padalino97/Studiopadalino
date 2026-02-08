import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function AggiornamentoDirigentiNew() {
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
                <div className="absolute -top-4 -left-4 bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  AGGIORNAMENTO
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Aggiornamento Dirigenti" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Aggiornamento Dirigenti</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>6 ore</strong>
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">6 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Destinatari</p>
                      <p className="text-sm text-muted-foreground">Dirigenti per la sicurezza</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Frequenza</p>
                      <p className="text-sm text-muted-foreground">Quinquennale</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Dirigenti"
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
                  Il Dirigente è definito dal D.lgs. n. 81/2008 come <strong>"garante organizzativo"</strong> della sicurezza e igiene del lavoro e ancora, <strong>"una persona che, in ragione delle competenze professionali e di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, attua le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa"</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  La funzione del Dirigente comprende obblighi di <strong>informazione, formazione e addestramento</strong> dei lavoratori, ma anche di RLS, addetti antincendio e primo soccorso, preposti e dirigenti stessi, configurandosi come un ruolo estremamente importante e dotato di ampia autonomia decisionale nella gestione della Sicurezza dei Lavoratori.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso per dirigenti in materia di salute e sicurezza sul lavoro fornisce ai partecipanti una serie di <strong>conoscenze e competenze specifiche per gestire correttamente la sicurezza all'interno dell'azienda</strong>.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-green-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso di aggiornamento per Dirigenti è rivolto a <strong>tutti coloro che, secondo la definizione del D.lgs. 81/2008 (art. 2, comma 1, lettera d), esercitano funzioni di gestione o supervisione, attuando le direttive del datore di lavoro</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  È richiesto, quale prerequisito di accesso al corso, un <strong>adeguato livello di comprensione e conoscenza della lingua italiana</strong> (lingua in cui verrà erogato il corso).
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
                      <li>• Legge 17 dicembre 2021, n. 215</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  L'iter formativo proposto prevede la trattazione dei seguenti argomenti:
                </p>
                <div className="space-y-3">
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold">Aggiornamenti giuridico-normativi</span>
                    </div>
                  </div>
                  <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold">Aggiornamenti tecnici sui rischi ai quali sono esposti i lavoratori</span>
                    </div>
                  </div>
                  <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold">Aggiornamenti su organizzazione e gestione della sicurezza in azienda</span>
                    </div>
                  </div>
                  <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-semibold">Fonti di rischio e relative misure di prevenzione</span>
                    </div>
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
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso può essere erogato in <strong>modalità E-Learning</strong> o <strong>in presenza</strong>, secondo le preferenze dell'azienda e nel rispetto della normativa vigente.
                  </p>
                </div>
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
                        La mancata formazione del dirigente comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.474,21 € a 6.388,23 €</strong>, come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aggiornamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Aggiornamento</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'aggiornamento periodico ha cadenza <strong>quinquennale</strong>.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Dirigenti"
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
