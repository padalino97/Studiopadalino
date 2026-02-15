import { ArrowLeft, CheckCircle, Clock, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function PrimoSoccorsoCourse() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12">
        <div className="container">
          <Link href="/servizi/formazione">
            <a className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeft className="w-4 h-4" />
              Torna ai Corsi
            </a>
          </Link>
          <h1 className="font-display text-4xl font-bold mb-4">
            Corso Primo Soccorso
          </h1>
          <p className="text-xl text-gray-300">
            Interventi di emergenza e rianimazione cardiopolmonare
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cos'è il corso */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Cos'è il Corso Primo Soccorso?
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Il corso primo soccorso fornisce le competenze necessarie per prestare 
                interventi di emergenza in caso di infortunio o malore. È obbligatorio 
                per gli addetti incaricati del primo soccorso, secondo il D.Lgs 81/08 
                e il D.M. 15 luglio 2003.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La formazione comprende tecniche di rianimazione cardiopolmonare (RCP), 
                gestione delle emorragie, traumi e situazioni di emergenza medica.
              </p>
            </section>

            {/* A chi è rivolto */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                A Chi è Rivolto?
              </h2>
              <ul className="space-y-3">
                {[
                  "Addetti incaricati del primo soccorso",
                  "Lavoratori in aziende con rischi specifici",
                  "Personale di strutture pubbliche e private",
                  "Operatori sanitari e socio-assistenziali",
                  "Chiunque voglia acquisire competenze di primo soccorso",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Come si svolge */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Come si Svolge?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Il corso è strutturato in due livelli in base al gruppo aziendale:
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Gruppo B-C (12 ore)</h3>
                  <p className="text-sm text-muted-foreground">
                    Per aziende a basso e medio rischio. Comprende RCP, gestione delle emorragie, 
                    traumi, manovre di salvataggio.
                  </p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Gruppo A (16 ore)</h3>
                  <p className="text-sm text-muted-foreground">
                    Per aziende ad alto rischio. Corso completo con approfondimenti su 
                    situazioni di emergenza complesse.
                  </p>
                </div>
              </div>
            </section>

            {/* Durata */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Durata e Tempistiche
              </h2>
              <div className="bg-gray-50 border rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Durata Totale</h3>
                    <p className="text-muted-foreground">12-16 ore (in base al gruppo)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Frequenza</h3>
                    <p className="text-muted-foreground">
                      2-3 giorni (in aula con esercitazioni pratiche)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Validità</h3>
                    <p className="text-muted-foreground">
                      3 anni (aggiornamento obbligatorio ogni 3 anni: 4-6 ore)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contenuti */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Contenuti del Corso
              </h2>
              <div className="space-y-4">
                <details className="bg-white border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 flex items-center justify-between">
                    Rianimazione Cardiopolmonare (RCP)
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-sm text-muted-foreground space-y-2">
                    <p>• Riconoscimento dell'arresto cardiaco</p>
                    <p>• Massaggio cardiaco esterno</p>
                    <p>• Respirazione artificiale</p>
                    <p>• Uso del defibrillatore automatico (DAE)</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 flex items-center justify-between">
                    Gestione delle Emorragie
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-sm text-muted-foreground space-y-2">
                    <p>• Riconoscimento delle emorragie</p>
                    <p>• Tecniche di compressione</p>
                    <p>• Uso di bende e lacci emostatici</p>
                    <p>• Prevenzione dello shock</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 flex items-center justify-between">
                    Traumi e Fratture
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-sm text-muted-foreground space-y-2">
                    <p>• Riconoscimento dei traumi</p>
                    <p>• Immobilizzazione di fratture</p>
                    <p>• Gestione delle lesioni spinali</p>
                    <p>• Trasporto del ferito</p>
                  </div>
                </details>

                <details className="bg-white border rounded-lg p-4 cursor-pointer group">
                  <summary className="font-semibold text-gray-900 flex items-center justify-between">
                    Situazioni di Emergenza
                    <span className="group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-sm text-muted-foreground space-y-2">
                    <p>• Soffocamento e ostruzione delle vie aeree</p>
                    <p>• Ustioni e avvelenamenti</p>
                    <p>• Shock e perdita di coscienza</p>
                    <p>• Procedure di emergenza</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Vantaggi */}
            <section>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Vantaggi del Corso
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Competenze per salvare vite umane",
                  "Rianimazione cardiopolmonare efficace",
                  "Gestione corretta dei traumi",
                  "Conformità normativa garantita",
                  "Sicurezza dei lavoratori",
                  "Interventi tempestivi ed efficaci",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 sticky top-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-6">
                Informazioni Rapide
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Durata</p>
                  <p className="font-semibold text-gray-900">12-16 ore</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Validità</p>
                  <p className="font-semibold text-gray-900">3 anni</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Costo</p>
                  <p className="font-semibold text-gray-900">Da 150 EUR + IVA</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Attestato</p>
                  <p className="font-semibold text-gray-900">Riconosciuto Nazionale</p>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/393465835685?text=Sono%20interessato%20al%20corso%20Primo%20Soccorso"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-8 inline-flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.503-2.335 1.236-3.356 2.259-1.02 1.02-1.756 2.119-2.259 3.357-.504 1.238-.96 2.646-.949 4.255.012 1.61.273 3.255.8 4.82.527 1.565 1.236 2.855 2.359 3.978 1.123 1.123 2.413 1.832 3.978 2.359 1.565.527 3.21.788 4.82.8 1.609-.012 3.017-.445 4.255-.949 1.238-.503 2.335-1.236 3.357-2.259 1.02-1.02 1.756-2.119 2.259-3.357.504-1.238.96-2.646.949-4.255-.012-1.61-.273-3.255-.8-4.82-.527-1.565-1.236-2.855-2.359-3.978-1.123-1.123-2.413-1.832-3.978-2.359-1.565-.527-3.21-.788-4.82-.8z" />
                </svg>
                Richiedi Informazioni
              </a>
            </div>

            {/* Servizi Correlati */}
            <div className="mt-8 bg-white border rounded-xl p-6">
              <h3 className="font-display text-lg font-bold text-gray-900 mb-4">
                Servizi Correlati
              </h3>
              <div className="space-y-2">
                <Link href="/servizi/sicurezza-lavoro">
                  <a className="block text-blue-600 hover:text-blue-700 text-sm font-medium">
                    → Sicurezza sul Lavoro
                  </a>
                </Link>
                <Link href="/servizi/medicina-lavoro">
                  <a className="block text-blue-600 hover:text-blue-700 text-sm font-medium">
                    → Medicina del Lavoro
                  </a>
                </Link>
                <Link href="/servizi/formazione">
                  <a className="block text-blue-600 hover:text-blue-700 text-sm font-medium">
                    → Tutti i Corsi
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
