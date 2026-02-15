import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users, HardHat } from "lucide-react";

export default function ModuloCantieriDirigentiNew() {
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
              <span className="text-foreground font-medium">Modulo Aggiuntivo Cantieri</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Immagine */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-amber-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  MODULO AGGIUNTIVO
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop" 
                  alt="Modulo Aggiuntivo Cantieri" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Dirigenti - Modulo Aggiuntivo Cantieri</h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>6 ore</strong>
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">6 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <HardHat className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Prerequisito</p>
                      <p className="text-sm text-muted-foreground">Corso base Dirigenti (12 ore)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Aggiornamento</p>
                      <p className="text-sm text-muted-foreground">Quinquennale (6 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Modulo%20Aggiuntivo%20Cantieri%20per%20Dirigenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  L'integrazione del <strong>Modulo Cantieri</strong> serve a garantire <strong>competenze specifiche in materia di salute e sicurezza nei cantieri temporanei o mobili</strong> (Titolo IV del D.lgs. 81/2008).
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso è rivolto a <strong>Dirigenti che hanno già completato il corso base (12 ore)</strong> e che operano nei settori ATECO in cui siano coinvolti <strong>cantieri temporanei o mobili</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-3">
                  Settori di applicazione:
                </p>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold text-amber-900 mb-2">1. Costruzioni (ATECO F):</p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Costruzione di edifici</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Ingegneria civile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Lavori specializzati per l'edilizia</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-amber-900 mb-2">2. Altri settori con attività in cantiere:</p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Impiantistica (es. elettrici/idraulici in cantiere)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Manutenzioni straordinarie su strutture/impianti</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>Montaggio di ponteggi o opere provvisionali</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Competenze Acquisite */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Competenze Acquisite</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Il Dirigente sarà messo in grado di:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Conoscere i <strong>rischi tipici dei cantieri temporanei e mobili</strong>, inclusi quelli derivanti da attività interferenti</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Acquisire competenze sulla <strong>gestione operativa della sicurezza in cantiere</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Comprendere <strong>ruoli e responsabilità</strong> (committente, coordinatori, imprese, subappaltatori, preposti, ecc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Applicare le norme del <strong>Titolo IV del D.lgs. 81/2008</strong> (PSC, POS, notifica preliminare, etc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Gestire la <strong>cooperazione e il coordinamento</strong> tra imprese e lavoratori autonomi</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pianificare e controllare <strong>attività ad alto rischio</strong> (scavi, ponteggi, lavori in quota, ecc.)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Verificare la <strong>documentazione obbligatoria di cantiere</strong> e implementare sistemi di vigilanza</span>
                  </div>
                </div>
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
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">Compiti Specifici del Dirigente dell'Impresa Affidataria nei Cantieri Temporanei e Mobili</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Redazione dei piani di sicurezza</strong>: finalità, tempi e contenuti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Misure generali di tutela</strong> secondo quanto previsto dall'art. 95 del d.lgs. n. 81/2008</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Obblighi del datore di lavoro, dei dirigenti e dei preposti</strong> di cui all'art. 96 del d.lgs. n. 81/2008</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700"><strong>Cronoprogramma dei lavori</strong></span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esempi e analisi di un <strong>PSC</strong> (Piano di Sicurezza e Coordinamento)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esempi e analisi di un <strong>POS</strong> (Piano Operativo di Sicurezza)</span>
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
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Il corso può essere erogato in <strong>modalità E-Learning</strong> o <strong>in presenza</strong>, secondo le preferenze dell'azienda e nel rispetto della normativa vigente.
                  </p>
                </div>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
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
        <section className="py-12 md:py-16 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-amber-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Modulo%20Aggiuntivo%20Cantieri%20per%20Dirigenti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-colors"
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
