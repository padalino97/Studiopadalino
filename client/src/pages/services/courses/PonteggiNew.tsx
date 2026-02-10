import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function PonteggiNew() {
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
              <span className="text-foreground font-medium">Ponteggi</span>
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
                  PRATICA OBBLIGATORIA
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Ponteggi" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso per Addetti e Preposti Montaggio, Smontaggio e Trasformazione di Ponteggi</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Formazione Teorica + Pratica (PiMUS)</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>12 ore</strong> (4 ore teoriche + 8 ore pratiche)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">12 ore (4 teoriche + 8 pratiche)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Addetti e preposti al montaggio, smontaggio e trasformazione di ponteggi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale (4 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Ponteggi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  Il corso PiMUS (Piano di Montaggio, Uso e Smontaggio) è un percorso formativo specializzato rivolto a imprese, datori di lavoro, RSPP e coordinatori della sicurezza nei cantieri che devono elaborare, controllare e garantire la corretta redazione del Piano di Montaggio, Uso e Smontaggio dei ponteggi.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Il PiMUS è il documento operativo da mettere a disposizione degli addetti ai lavori, riportante la concreta procedura di montaggio/smontaggio ed eventualmente trasformazione del ponteggio, con informazioni sui parametri di impiego e sulle manutenzioni/verifiche da eseguire in fase di utilizzo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  È finalizzato a garantire la sicurezza del personale addetto al montaggio e smontaggio, la sicurezza di chi utilizzerà il ponteggio e la sicurezza di persone terze che potrebbero interferire con le fasi di montaggio/smontaggio.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso è rivolto a <strong>imprese, datori di lavoro, RSPP, coordinatori della sicurezza nei cantieri</strong> e tutte le figure che non solo devono elaborare o controllare il PiMUS, ma la cui responsabilità personale è condizionata da una rigorosa e corretta redazione dello stesso.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Il PiMUS va redatto nei seguenti casi:</strong>
                </p>
                <ul className="mt-4 space-y-2 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Ponteggi metallici fissi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Ponteggi in legname</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Piani di carico</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>Ponti su ruote (orientamento prevalente)</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed mt-4">
                  A condizione che si operi a <strong>più di 2 (due) metri di altezza</strong> rispetto ad un piano stabile.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Normativa di Riferimento</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Art. 136, comma 8 e Allegato XXI D.lgs. 81/08 e s.m.i.</li>
                      <li>• D.lgs. 81/08 e s.m.i. (come aggiornato dal D.lgs. 106/09)</li>
                      <li>• Titolo IV, Capo II "Lavori in quota"</li>
                      <li>• Titolo IV, Capo I "Cantieri"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                {/* Modulo 1 - Giuridico-Normativo */}
                <div className="mb-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">MODULO GIURIDICO-NORMATIVO (4 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Legislazione generale di sicurezza in materia di prevenzione infortuni</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analisi dei rischi e norme di buona tecnica</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Statistiche degli infortuni e violazioni delle norme nei cantieri</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">D.lgs. 81/08 per la parte relativa ai "lavori in quota" e ai "cantieri"</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 2 - Tecnico */}
                <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">MODULO TECNICO (10 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Piano di montaggio, uso e smontaggio in sicurezza (P.I.M.U.S.)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Autorizzazione ministeriale, disegno esecutivo e progetto</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">DPI anticaduta: uso, caratteristiche tecniche, manutenzione, durata e conservazione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ancoraggi: tipologie e tecniche</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Verifiche di sicurezza: primo impianto, periodiche e straordinarie</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 3 - Pratico */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">MODULO PRATICO (14 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio – smontaggio – trasformazione di ponteggio a tubi e giunti (PTG)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio – smontaggio – trasformazione di ponteggio a telai prefabbricati (PTP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio – smontaggio – trasformazione di ponteggio a montanti e traversi prefabbricati (PMTP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Elementi di gestione prima emergenza – salvataggio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>28 ore totali</strong>: 14 ore formazione teorica + 14 ore formazione pratica
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine dei due moduli teorici si svolgerà una <strong>prima prova di verifica</strong>: un questionario a risposta multipla. Il superamento della prova, che si intende superata con <strong>almeno il 70% delle risposte esatte</strong>, consente il passaggio alla seconda parte del corso (quella pratica).
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine del modulo pratico avrà luogo una <strong>prova pratica di verifica finale</strong>, consistente in:
                  </p>
                  <ul className="mb-4 space-y-2 text-gray-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Montaggio-smontaggio-trasformazione di parti di ponteggi (PTG, PTP e PMTP)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Realizzazione di ancoraggi</span>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'esito positivo delle prove di verifica intermedia e finale, unitamente a una <strong>presenza pari almeno al 90% del monte ore</strong>, consente il rilascio dell'<strong>attestato di frequenza con verifica dell'apprendimento</strong>.
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
                        La mancata formazione sulla redazione e gestione del PiMUS comporta sanzioni significative per il datore di lavoro dell'impresa che monta e smonta i ponteggi, secondo quanto previsto dall'art. 87 del D.lgs. 81/2008.
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
                    Il corso di formazione per addetti al montaggio, smontaggio e trasformazione di ponteggi prevede un <strong>aggiornamento periodico quinquennale di 4 ore</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-blue-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Ponteggi"
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
