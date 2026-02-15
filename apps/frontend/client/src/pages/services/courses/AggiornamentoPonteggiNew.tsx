import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function AggiornamentoPonteggiNew() {
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
              <span className="text-foreground font-medium">Aggiornamento Ponteggi</span>
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
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="Aggiornamento Ponteggi" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Aggiornamento per Addetti al Montaggio, Smontaggio e Trasformazione dei Ponteggi</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Formazione Teorica + Pratica</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>4 ore</strong> (1 ora teorica + 3 ore pratiche)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">4 ore (1 teorica + 3 pratiche)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-emerald-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Lavoratori e preposti già formati che necessitano dell'aggiornamento</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-teal-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">4 anni</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Ponteggi"
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
                  Il corso di aggiornamento è rivolto ai lavoratori e ai preposti addetti alle operazioni di montaggio/smontaggio di ponteggi già formati, ma che necessitino dell'aggiornamento previsto dal D.Lgs. 81/08.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Il corso è finalizzato al mantenimento dei requisiti degli addetti alle attività di montaggio, smontaggio e trasformazione di ponteggi, garantendo il rispetto della normativa vigente e l'aggiornamento sulle buone prassi e le novità tecniche.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso è indirizzato ai <strong>lavoratori addetti all'uso di attrezzature di lavoro in quota</strong> che hanno già effettuato il corso base e necessitano dell'aggiornamento quinquennale obbligatorio previsto dalla normativa sulla sicurezza nei cantieri.
                </p>
              </div>

              {/* Prerequisiti */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Prerequisiti</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Possesso attestato corso base</strong> "Lavoratori e preposti addetti al montaggio/smontaggio/trasformazione di ponteggi"
                  </p>
                </div>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Normativa di Riferimento</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Art. 32 del d.lgs. 81/2008 e s.m.i.</li>
                      <li>• D.Lgs. 81/08 - Titolo IV, Capo II "Lavori in quota"</li>
                      <li>• D.Lgs. 81/08 - Titolo IV, Capo I "Cantieri"</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                {/* Modulo Teorico */}
                <div className="mb-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">MODULO TEORICO (1 ORA)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aggiornamento sulle norme di buona tecnica e buone prassi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aggiornamento D.Lgs. 81/08 e s.m.i. (Titolo IV, Capo II "Lavori in quota" e Titolo IV, Capo I "Cantieri")</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aggiornamento DPI anticaduta</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aggiornamento tecniche di montaggio, smontaggio, trasformazione ponteggio (PTG, PTP, PMTP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Aggiornamenti elementi di gestione prima emergenza – salvataggio</span>
                    </div>
                  </div>
                </div>

                {/* Modulo Pratico */}
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-4">MODULO PRATICO (3 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio-smontaggio-trasformazione di ponteggio a tubi e giunti (PTG)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio-smontaggio-trasformazione di ponteggio a telai prefabbricati (PTP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Montaggio-smontaggio-trasformazione di ponteggio a montanti e traversi prefabbricati (PMTP)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Elementi di gestione prima emergenza</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Salvataggio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>4 ore totali</strong>: 1 ora formazione teorica + 3 ore formazione pratica
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Al termine del corso verrà rilasciato un <strong>attestato di formazione a norma di legge</strong>.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'attestato certifica il completamento dell'aggiornamento quinquennale obbligatorio e il mantenimento dei requisiti per le attività di montaggio, smontaggio e trasformazione di ponteggi.
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
                        La mancata partecipazione all'aggiornamento quinquennale obbligatorio comporta sanzioni per il datore di lavoro, secondo quanto previsto dall'art. 87 del D.lgs. 81/2008. I lavoratori non aggiornati non possono svolgere attività di montaggio e smontaggio di ponteggi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Validità */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Validità</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    L'attestato di aggiornamento ha validità di <strong>4 anni</strong> dalla data di rilascio, dopodiché è necessario effettuare un nuovo aggiornamento.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20Ponteggi"
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
