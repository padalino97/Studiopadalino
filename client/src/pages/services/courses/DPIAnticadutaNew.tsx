import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function DPIAnticadutaNew() {
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
              <span className="text-foreground font-medium">DPI Anticaduta (3° Categoria)</span>
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
                  PRATICA OBBLIGATORIA
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" 
                  alt="DPI Anticaduta" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso Utilizzo DPI Anticaduta (3° Categoria)</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Dispositivi di Protezione Individuale</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>8 ore</strong> (4 ore teoriche + 4 ore pratiche)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-red-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">8 ore (4 teoriche + 4 pratiche)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Addetti che svolgono lavori in quota (altezza superiore a 2 metri)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento periodico obbligatorio</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20DPI%20Anticaduta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors"
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
                  I DPI anticaduta (Dispositivi di Protezione Individuale della 3° Categoria) sono equipaggiamenti essenziali per proteggere i lavoratori dal rischio di caduta dall'alto durante lavori in quota. Includono imbracature, caschi, cordini, assorbitori di energia e altri dispositivi di trattenuta e posizionamento.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'utilizzo corretto di questi dispositivi è fondamentale per garantire la sicurezza dei lavoratori esposti a rischi di caduta da altezze superiori a 2 metri. Una formazione specifica e l'abilitazione all'uso sono obbligatorie secondo il D.Lgs. 81/08.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-red-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Il corso è rivolto agli <strong>addetti che svolgono lavori in quota</strong>, ovvero attività lavorative che espongono il lavoratore al rischio di caduta da una quota posta ad altezza superiore a 2 metri rispetto ad un piano stabile. Tali addetti utilizzano per la protezione contro le cadute dall'alto diversi DPI di posizionamento e di trattenuta per l'utilizzo dei quali devono conseguire una specifica abilitazione.
                </p>
              </div>

              {/* Riferimenti Legislativi */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-foreground font-semibold mb-2">Normativa di Riferimento</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• D.Lgs. 81/08 art. 77 (Obblighi del datore di lavoro)</li>
                      <li>• D.Lgs. 81/08 art. 107 (Formazione per lavori in quota)</li>
                      <li>• D.Lgs. 81/08 art. 115 (Dispositivi di protezione individuale)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                {/* Modulo 1 - Teorico */}
                <div className="mb-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-900 mb-4">MODULO TEORICO (4 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Accenni sulla normativa in materia di igiene e sicurezza del lavoro per lavori in quota</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cenni sulle statistiche relative agli infortuni specifici nei lavori in quota</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analisi e valutazione dei rischi più ricorrenti nei lavori in quota</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">DPI specifici per lavori in quota: imbracature, caschi, cordini, fettucce, assorbitori di energia, connettori, freni, bloccanti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analisi dei fattori di idoneità e compatibilità con attrezzature e sostanze</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Modalità delle manutenzioni (verifica giornaliera e periodica, pulizia)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Classificazione normativa e tecniche di realizzazione degli ancoraggi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esposizione delle varie tipologie di attività con funi</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 2 - Pratico */}
                <div className="bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">MODULO PRATICO (4 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Tecniche e procedure operative con accesso dall'alto, di calata o discesa su funi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rischi e modalità di protezione delle funi (spigoli, nodi, usura)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Organizzazione del lavoro in squadra e compiti degli operatori</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Cenni di primo soccorso e procedure operative di salvataggio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Movimento su linee di accesso fisse e superamento dei frazionamenti</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Applicazione di tecniche di posizionamento dell'operatore</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Accesso in sicurezza ai luoghi di predisposizione degli ancoraggi</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Realizzazione di ancoraggi e frazionamenti su strutture artificiali o elementi naturali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esecuzione di calate, discese e tecniche operative con accesso e uscita</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Applicazione di tecniche di sollevamento, posizionamento e calata dei materiali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Applicazione di tecniche di evacuazione e salvataggio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>8 ore totali</strong>: 4 ore formazione teorica + 4 ore formazione pratica
                </p>
              </div>

              {/* Risultati */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Risultati</h2>
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Al termine del corso verrà rilasciato <strong>attestato di partecipazione valido ai sensi del D.Lgs. 81/08</strong>, previa frequenza e superamento delle prove di verifica previste.
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
                        La mancata formazione sull'uso di DPI anticaduta comporta sanzioni, che possono includere <strong>arresto da 3 mesi a 6 mesi o ammenda da 2.500 € a 6.400 €</strong> per il datore di lavoro e il dirigente, come previsto dal D.Lgs. 81/2008.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accreditamento */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Accreditamento</h2>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Studio Sicurezza Padalino è accreditato per l'erogazione di corsi di formazione in materia di salute e sicurezza sul lavoro, in conformità al D.Lgs. 81/2008 e secondo i più recenti standard di qualità.
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
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20DPI%20Anticaduta"
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
