/*
  Service Page: Sicurezza Cantieri
  - CSP, CSE, coordinamento
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, HardHat, FileText, ClipboardCheck, Eye } from "lucide-react";

const faqs = [
  {
    question: "Quando è obbligatorio nominare il CSP e il CSE?",
    answer: "Il Coordinatore per la Sicurezza in fase di Progettazione (CSP) e il Coordinatore per la Sicurezza in fase di Esecuzione (CSE) sono obbligatori quando nel cantiere operano più imprese, anche non contemporaneamente. La nomina spetta al committente o al responsabile dei lavori."
  },
  {
    question: "Qual è la differenza tra CSP e CSE?",
    answer: "Il CSP opera in fase di progettazione e redige il PSC (Piano di Sicurezza e Coordinamento). Il CSE opera in fase di esecuzione, verifica l'applicazione del PSC, coordina le imprese e aggiorna il piano in base all'andamento dei lavori. Possono essere la stessa persona."
  },
  {
    question: "Cos'è il PSC?",
    answer: "Il Piano di Sicurezza e Coordinamento (PSC) è il documento che analizza i rischi del cantiere, definisce le misure di prevenzione e protezione, e coordina le attività delle diverse imprese. È redatto dal CSP e deve essere consegnato alle imprese prima dell'inizio dei lavori."
  },
  {
    question: "Cos'è il POS?",
    answer: "Il Piano Operativo di Sicurezza (POS) è il documento che ogni impresa esecutrice deve redigere per i propri lavoratori. Contiene la valutazione dei rischi specifici dell'impresa in relazione al cantiere e le misure di prevenzione adottate. Deve essere coerente con il PSC."
  },
  {
    question: "Quali sono le responsabilità del committente?",
    answer: "Il committente deve: verificare l'idoneità tecnico-professionale delle imprese, nominare il CSP e il CSE quando obbligatorio, trasmettere il PSC alle imprese, verificare che le imprese abbiano redatto il POS, e comunicare alle imprese i nominativi dei coordinatori."
  },
];

const relatedServices = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Formazione", href: "/servizi/formazione" },
  { title: "Medicina del Lavoro", href: "/servizi/medicina-lavoro" },
];

export default function SicurezzaCantieri() {
  return (
    <ServicePageLayout
      title="Sicurezza Cantieri"
      subtitle="Coordinamento CSP e CSE, redazione PSC, POS, PIMUS, fascicolo dell'opera. Sopralluoghi e verifiche periodiche in cantiere secondo il Titolo IV del D.Lgs 81/08."
      badge="Coordinamento"
      intro={
        <p>
          I cantieri edili rappresentano uno degli ambienti di lavoro a più alto rischio. 
          La normativa prevede obblighi specifici per committenti, imprese e coordinatori 
          per garantire la sicurezza di tutti i lavoratori coinvolti. Lo Studio Sicurezza 
          Padalino offre servizi completi di coordinamento della sicurezza in cantiere, 
          dalla progettazione all'esecuzione, con professionisti qualificati e abilitati.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "PSC in 10-15 giorni",
        validity: "Durata del cantiere",
        cost: "Da €500 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          La Sicurezza nei Cantieri Edili
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Il <strong>Titolo IV del D.Lgs 81/08</strong> disciplina la sicurezza nei cantieri 
          temporanei o mobili. Quando in un cantiere operano più imprese (anche non contemporaneamente), 
          il committente deve nominare un <strong>Coordinatore per la Sicurezza</strong> che si 
          occupi di pianificare e coordinare le misure di prevenzione.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il coordinatore deve essere un tecnico abilitato (ingegnere, architetto, geometra, 
          perito) che abbia frequentato uno specifico corso di formazione di 120 ore e che 
          mantenga l'abilitazione con aggiornamenti periodici.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* CSP */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  CSP - Coordinatore in Fase di Progettazione
                </h3>
                <p className="text-muted-foreground mb-4">
                  Assunzione dell'incarico di Coordinatore per la Sicurezza in fase di Progettazione, 
                  con redazione di tutta la documentazione necessaria prima dell'inizio dei lavori.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Analisi progetto", "Redazione PSC", "Stima dei costi sicurezza", "Fascicolo dell'opera", "Notifica preliminare", "Verifica idoneità imprese"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CSE */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  CSE - Coordinatore in Fase di Esecuzione
                </h3>
                <p className="text-muted-foreground mb-4">
                  Assunzione dell'incarico di Coordinatore per la Sicurezza in fase di Esecuzione, 
                  con presenza in cantiere, coordinamento delle imprese e vigilanza sul rispetto del PSC.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Sopralluoghi periodici", "Verifica applicazione PSC", "Coordinamento imprese", "Verifica POS imprese", "Aggiornamento PSC", "Riunioni di coordinamento", "Segnalazione inadempienze", "Verbali di sopralluogo"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Documentazione */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Documentazione di Cantiere
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione di tutta la documentazione necessaria per la sicurezza in cantiere, 
                  sia per il committente che per le imprese esecutrici.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["PSC (Piano Sicurezza Coordinamento)", "POS (Piano Operativo Sicurezza)", "PIMUS (Piano Montaggio Ponteggi)", "DUVRI (Interferenze)", "Fascicolo dell'Opera", "Notifica preliminare", "Layout di cantiere", "Cronoprogramma sicurezza"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Consulenza */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <HardHat className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Consulenza per Imprese
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supporto alle imprese esecutrici per la redazione del POS e per la gestione 
                  della sicurezza nei cantieri in cui operano.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Redazione POS", "Verifica idoneità tecnica", "Formazione lavoratori", "Fornitura DPI", "Assistenza sopralluoghi", "Gestione emergenze"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documenti Principali */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Documenti della Sicurezza in Cantiere
        </h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">PSC - Piano di Sicurezza e Coordinamento</h3>
            <p className="text-sm text-muted-foreground mb-3">
              È il documento principale della sicurezza in cantiere. Contiene l'analisi dei rischi, 
              le misure di prevenzione, il cronoprogramma dei lavori, le procedure di coordinamento 
              tra le imprese e la stima dei costi della sicurezza.
            </p>
            <p className="text-sm font-medium text-primary">Redatto dal CSP, obbligatorio quando operano più imprese.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">POS - Piano Operativo di Sicurezza</h3>
            <p className="text-sm text-muted-foreground mb-3">
              È il documento che ogni impresa esecutrice deve redigere. Contiene la valutazione 
              dei rischi specifici dell'impresa, l'elenco delle attrezzature, le procedure di lavoro 
              e le misure di prevenzione adottate.
            </p>
            <p className="text-sm font-medium text-primary">Redatto dall'impresa, deve essere coerente con il PSC.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">PIMUS - Piano di Montaggio, Uso e Smontaggio</h3>
            <p className="text-sm text-muted-foreground mb-3">
              È il documento specifico per i ponteggi. Contiene le istruzioni per il montaggio, 
              l'uso e lo smontaggio del ponteggio, con schemi grafici e indicazioni operative.
            </p>
            <p className="text-sm font-medium text-primary">Obbligatorio per tutti i ponteggi di altezza superiore a 2 metri.</p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Fascicolo dell'Opera</h3>
            <p className="text-sm text-muted-foreground mb-3">
              È il documento che accompagna l'opera per tutta la sua vita utile. Contiene le 
              informazioni necessarie per la manutenzione in sicurezza dell'opera e per eventuali 
              lavori futuri.
            </p>
            <p className="text-sm font-medium text-primary">Redatto dal CSP, consegnato al committente a fine lavori.</p>
          </div>
        </div>
      </section>

      {/* Costi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Costi Indicativi
        </h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            I costi dipendono dalla complessità del cantiere, dalla durata dei lavori e dal 
            numero di imprese coinvolte. Ecco alcune indicazioni:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-semibold">Servizio</th>
                  <th className="text-left py-3 font-semibold">Costo indicativo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">CSP (cantiere semplice)</td>
                  <td className="py-3">Da €500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">CSP (cantiere complesso)</td>
                  <td className="py-3">Da €1.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">CSE (canone mensile)</td>
                  <td className="py-3">Da €300/mese + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">CSP + CSE (pacchetto)</td>
                  <td className="py-3">Da €800 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">POS (per impresa)</td>
                  <td className="py-3">Da €200 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">PIMUS</td>
                  <td className="py-3">Da €150 + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">Sopralluogo singolo</td>
                  <td className="py-3">Da €100 + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Per cantieri di lunga durata o di particolare complessità, offriamo preventivi personalizzati.
          </p>
        </div>
      </section>

      {/* Obblighi del Committente */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Obblighi del Committente
        </h2>
        <p className="text-muted-foreground mb-4">
          Il committente (o il responsabile dei lavori) ha precisi obblighi in materia di sicurezza:
        </p>
        <ul className="space-y-3">
          {[
            "Nominare il CSP e il CSE quando obbligatorio (più imprese in cantiere)",
            "Verificare l'idoneità tecnico-professionale delle imprese e dei lavoratori autonomi",
            "Trasmettere il PSC alle imprese prima dell'inizio dei lavori",
            "Comunicare alle imprese i nominativi dei coordinatori",
            "Verificare che le imprese abbiano redatto il POS",
            "Trasmettere la notifica preliminare all'ASP e alla Direzione Territoriale del Lavoro",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 bg-white border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ServicePageLayout>
  );
}
