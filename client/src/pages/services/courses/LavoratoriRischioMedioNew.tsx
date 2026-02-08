import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, Award, AlertCircle, MessageCircle, Briefcase, RefreshCw, Users } from "lucide-react";

export default function LavoratoriRischioMedioNew() {
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
              <a href="/servizi/sicurezza-lavoro" className="hover:text-foreground transition-colors">Lavoratori</a>
              <span>/</span>
              <span className="text-foreground font-medium">Rischio Medio</span>
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
                  RISCHIO MEDIO
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop" 
                  alt="Lavoratori Rischio Medio" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Contenuto */}
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso di Formazione per Lavoratori Rischio Medio</h1>
                <p className="text-lg text-muted-foreground mb-2">
                  <strong>Formazione Base + Specifica</strong>
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Durata <strong>12 ore</strong> (4 ore base + 8 ore specifica)
                </p>

                {/* Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata Totale</p>
                      <p className="text-sm text-muted-foreground">12 ore (4 base + 8 specifica)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Aziende rischio medio (agricoltura, trasporti, istruzione)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Validità</p>
                      <p className="text-sm text-muted-foreground">Aggiornamento quinquennale (6 ore)</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Lavoratori%20Rischio%20Medio"
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
                  Il Testo Unico sulla sicurezza sul lavoro, approvato con il D.lgs. 81/2008, definisce il lavoratore come <strong>"Persona che, indipendentemente dalla tipologia contrattuale, svolge un'attività lavorativa nell'ambito dell'organizzazione di un datore di lavoro pubblico o privato, con o senza retribuzione"</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Si tratta di una figura di fondamentale importanza, che <strong>rappresenta l'ossatura organizzativa di ogni impresa</strong>. Il lavoratore contribuisce in modo essenziale al raggiungimento degli obiettivi aziendali e incide significativamente sulla reputazione dell'organizzazione.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Questo corso completo combina la <strong>formazione generale (4 ore)</strong> con la <strong>formazione specifica per rischio medio (8 ore)</strong>, fornendo una preparazione completa e conforme alla normativa vigente.
                </p>
              </div>

              {/* A Chi È Rivolto */}
              <div className="mb-12 pb-12 border-b border-gray-200 bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Il corso è destinato a <strong>tutte le aziende a medio rischio</strong> che impiegano almeno un lavoratore subordinato, parasubordinato, volontario o un lavoratore autonomo in via esclusiva.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-semibold mb-3">
                  I macrosettori classificati a rischio medio comprendono:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Agricoltura</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Pesca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Trasporti e magazzinaggio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Istruzione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Pubblica amministrazione</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>Assistenza sociale non residenziale</span>
                  </li>
                </ul>
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
                      <li>• Artt. 20 e 37 del D.lgs. 81/08</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Programma */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                
                {/* Modulo 1 - Formazione Generale */}
                <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">MODULO 1 – Formazione Generale (4 ore)</h3>
                  <p className="text-gray-700 mb-4">Credito formativo permanente - Non richiede aggiornamento</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Il sistema legislativo in materia di sicurezza dei lavoratori</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">La responsabilità civile e penale e la tutela assicurativa</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Il sistema istituzionale della prevenzione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Organizzazione della prevenzione aziendale</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Diritti e doveri dei vari soggetti aziendali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Organi di vigilanza, controllo e assistenza</span>
                    </div>
                  </div>
                </div>

                {/* Modulo 2 - Formazione Specifica */}
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">MODULO 2 – Formazione Specifica Rischio Medio (8 ore)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rischi specifici per mansione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Misure di prevenzione e protezione specifiche</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm italic">
                    La trattazione dei rischi sarà declinata secondo la loro effettiva presenza nel settore di appartenenza dell'azienda e dalla specificità del rischio.
                  </p>
                </div>
              </div>

              {/* Durata */}
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-4">Durata</h2>
                <p className="text-lg text-muted-foreground">
                  <strong>12 ore totali</strong>: 4 ore formazione generale + 8 ore formazione specifica
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
                        La mancata formazione del lavoratore comporta sanzioni, che possono includere <strong>l'arresto da due a quattro mesi o un'ammenda da 1.708,61 € a 7.403,96 €</strong>, come previsto dall'art. 55, comma 5, lettera c) del D.lgs. 81/2008.
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
                    Il corso di formazione per lavoratori prevede un <strong>aggiornamento periodico quinquennale di 6 ore</strong>.
                  </p>
                  <p className="text-gray-600 mt-3 text-sm italic">
                    Nota: La formazione generale (4 ore) è credito formativo permanente e non richiede aggiornamento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-amber-600 to-orange-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <p className="text-amber-100 mb-8">
                Contattaci per informazioni, disponibilità e iscrizioni. Rispondiamo entro 24 ore.
              </p>
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Lavoratori%20Rischio%20Medio"
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
