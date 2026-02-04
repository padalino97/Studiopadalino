/*
  Service Page: Sicurezza sul Lavoro
  - DVR, RSPP, valutazione rischi
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, AlertTriangle, FileText, Users, Building, Shield } from "lucide-react";

const faqs = [
  {
    question: "Cos'è il DVR e quando è obbligatorio?",
    answer: "Il Documento di Valutazione dei Rischi (DVR) è un documento obbligatorio per tutte le aziende con almeno un lavoratore. Deve essere redatto dal datore di lavoro in collaborazione con il RSPP e il medico competente, e deve contenere la valutazione di tutti i rischi presenti in azienda e le misure di prevenzione adottate."
  },
  {
    question: "Cosa significa RSPP esterno?",
    answer: "Il RSPP (Responsabile del Servizio di Prevenzione e Protezione) esterno è un professionista qualificato che assume l'incarico di gestire la sicurezza aziendale per conto del datore di lavoro. È una soluzione ideale per le PMI che non hanno risorse interne dedicate alla sicurezza."
  },
  {
    question: "Ogni quanto va aggiornato il DVR?",
    answer: "Il DVR deve essere aggiornato ogni volta che ci sono modifiche significative nel processo produttivo, nell'organizzazione del lavoro, nell'introduzione di nuove attrezzature o sostanze, o a seguito di infortuni significativi. Non esiste una scadenza fissa, ma è buona prassi verificarlo almeno annualmente."
  },
  {
    question: "Quali sono le sanzioni per mancanza del DVR?",
    answer: "La mancata elaborazione del DVR comporta sanzioni penali per il datore di lavoro: arresto da 3 a 6 mesi o ammenda da 2.500 a 6.400 euro. In caso di infortunio grave, le conseguenze possono essere molto più severe."
  },
  {
    question: "Cosa comprende la valutazione dei rischi specifici?",
    answer: "La valutazione dei rischi specifici include: rischio rumore, vibrazioni, stress lavoro-correlato, rischio chimico, biologico, movimentazione manuale dei carichi, videoterminali, campi elettromagnetici, radiazioni ottiche e altri rischi specifici del settore di attività."
  },
];

const relatedServices = [
  { title: "Medicina del Lavoro", href: "/servizi/medicina-lavoro" },
  { title: "Formazione Sicurezza", href: "/servizi/formazione" },
  { title: "Sicurezza Cantieri", href: "/servizi/sicurezza-cantieri" },
];

export default function SicurezzaLavoro() {
  return (
    <ServicePageLayout
      title="Sicurezza sul Lavoro"
      subtitle="Consulenza completa per la sicurezza nei luoghi di lavoro secondo il D.Lgs 81/08. DVR, RSPP esterno, valutazione rischi e assistenza durante le ispezioni."
      badge="D.Lgs 81/08"
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/VHUFEpwvVlSkzYEd.jpg"
      icon={<Shield className="w-4 h-4" />}
      intro={
        <p>
          La sicurezza sul lavoro non è solo un obbligo di legge, ma un investimento strategico 
          per il futuro della tua azienda. Un ambiente di lavoro sicuro aumenta la produttività, 
          riduce i costi legati agli infortuni e migliora il clima aziendale. 
          Lo Studio Sicurezza Padalino offre un servizio completo di consulenza per aiutarti 
          a raggiungere e mantenere la piena conformità normativa.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "DVR in 7-15 giorni lavorativi",
        validity: "Aggiornamento ad ogni modifica",
        cost: "A partire da €300 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Cos'è la Sicurezza sul Lavoro?
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          La sicurezza sul lavoro è l'insieme delle misure preventive e protettive da adottare 
          per garantire la salute e l'incolumità dei lavoratori durante lo svolgimento delle 
          loro mansioni. In Italia, la normativa di riferimento è il <strong>Decreto Legislativo 81/2008</strong> 
          (Testo Unico sulla Sicurezza), che stabilisce obblighi precisi per datori di lavoro, 
          dirigenti, preposti e lavoratori.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il mancato rispetto delle norme sulla sicurezza comporta sanzioni amministrative e penali, 
          oltre alla responsabilità civile in caso di infortuni. Per questo è fondamentale affidarsi 
          a professionisti qualificati che possano guidare l'azienda verso la piena conformità.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* DVR */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Documento di Valutazione dei Rischi (DVR)
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione completa del DVR aziendale con analisi di tutti i rischi presenti, 
                  individuazione delle misure di prevenzione e protezione, programma di miglioramento 
                  e definizione delle procedure di emergenza.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Sopralluogo in azienda", "Analisi processi lavorativi", "Valutazione rischi", "Misure di prevenzione", "Procedure emergenza", "Aggiornamenti periodici"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RSPP */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  RSPP Esterno
                </h3>
                <p className="text-muted-foreground mb-4">
                  Assunzione dell'incarico di Responsabile del Servizio di Prevenzione e Protezione 
                  esterno. Un professionista qualificato che si occupa di tutti gli adempimenti 
                  in materia di sicurezza per conto della tua azienda.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Gestione documentazione", "Sopralluoghi periodici", "Riunioni periodiche", "Rapporti con enti", "Aggiornamento normativo", "Assistenza ispezioni"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Valutazioni Specifiche */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Valutazioni Rischi Specifici
                </h3>
                <p className="text-muted-foreground mb-4">
                  Valutazioni tecniche approfondite per rischi specifici che richiedono 
                  competenze specialistiche e, in alcuni casi, misurazioni strumentali.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Rischio rumore", "Rischio vibrazioni", "Rischio chimico", "Rischio biologico", "Stress lavoro-correlato", "Movimentazione carichi", "Videoterminali", "Campi elettromagnetici"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Cantieri */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Documentazione Cantieri
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione di tutta la documentazione necessaria per i cantieri edili 
                  e per i lavori in appalto.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["POS (Piano Operativo Sicurezza)", "PSC (Piano Sicurezza Coordinamento)", "PIMUS (Ponteggi)", "DUVRI (Interferenze)", "Fascicolo dell'Opera", "Notifica preliminare"].map((item, i) => (
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

      {/* Costi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Costi Indicativi
        </h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            I costi variano in base alla dimensione dell'azienda, al settore di attività 
            e alla complessità dei rischi presenti. Ecco alcune indicazioni di massima:
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
                  <td className="py-3">DVR base (fino a 10 dipendenti)</td>
                  <td className="py-3">Da €300 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">DVR completo (11-50 dipendenti)</td>
                  <td className="py-3">Da €500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">RSPP esterno (canone annuale)</td>
                  <td className="py-3">Da €600/anno + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Valutazione rischio rumore</td>
                  <td className="py-3">Da €250 + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">POS cantiere</td>
                  <td className="py-3">Da €200 + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * I prezzi sono indicativi e possono variare in base alle specifiche esigenze. 
            Contattaci per un preventivo personalizzato.
          </p>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          A Chi Si Rivolge
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I nostri servizi di consulenza sulla sicurezza sul lavoro sono rivolti a:
        </p>
        <ul className="space-y-3">
          {[
            "Aziende di ogni dimensione e settore produttivo",
            "Artigiani e piccole imprese",
            "Studi professionali e uffici",
            "Attività commerciali e di ristorazione",
            "Imprese edili e cantieri",
            "Strutture sanitarie e socio-assistenziali",
            "Enti pubblici e privati",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </ServicePageLayout>
  );
}
