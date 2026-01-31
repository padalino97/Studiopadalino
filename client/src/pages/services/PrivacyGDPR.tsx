/*
  Service Page: Privacy GDPR
  - Protezione dati personali
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, Lock, FileText, Shield, Users } from "lucide-react";

const faqs = [
  {
    question: "Cos'è il GDPR?",
    answer: "Il GDPR (General Data Protection Regulation) è il Regolamento Europeo 2016/679 sulla protezione dei dati personali. È entrato in vigore il 25 maggio 2018 e si applica a tutte le organizzazioni che trattano dati personali di cittadini europei, indipendentemente dalla loro sede."
  },
  {
    question: "Chi deve adeguarsi al GDPR?",
    answer: "Tutte le aziende, i professionisti e le organizzazioni che trattano dati personali devono adeguarsi al GDPR. Questo include praticamente ogni attività: dalla piccola impresa al grande gruppo, dallo studio professionale all'associazione."
  },
  {
    question: "Cos'è il DPO e quando è obbligatorio?",
    answer: "Il DPO (Data Protection Officer) è il Responsabile della Protezione dei Dati. È obbligatorio per: enti pubblici, organizzazioni che effettuano monitoraggio regolare e sistematico su larga scala, organizzazioni che trattano su larga scala dati sensibili o giudiziari."
  },
  {
    question: "Quali sono le sanzioni per violazione del GDPR?",
    answer: "Le sanzioni possono arrivare fino a 20 milioni di euro o al 4% del fatturato mondiale annuo (se superiore). Per violazioni meno gravi, le sanzioni arrivano fino a 10 milioni di euro o al 2% del fatturato. Sono previste anche sanzioni penali per alcuni reati."
  },
  {
    question: "Cosa devo fare per essere conforme al GDPR?",
    answer: "I principali adempimenti sono: mappatura dei trattamenti, redazione del registro dei trattamenti, aggiornamento delle informative, raccolta dei consensi, nomina dei responsabili, adozione di misure di sicurezza adeguate, formazione del personale, e eventuale nomina del DPO."
  },
];

const relatedServices = [
  { title: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso" },
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Formazione", href: "/servizi/formazione" },
];

export default function PrivacyGDPR() {
  return (
    <ServicePageLayout
      title="Privacy e GDPR"
      subtitle="Adeguamento al Regolamento Europeo sulla protezione dei dati personali. Analisi compliance, documentazione, formazione e nomina DPO esterno."
      badge="Reg. UE 2016/679"
      heroImage="/images/hero-consulting.jpg"
      icon={<Lock className="w-4 h-4" />}
      intro={
        <p>
          La protezione dei dati personali è un obbligo per tutte le organizzazioni che 
          trattano informazioni relative a persone fisiche. Il GDPR ha introdotto nuovi 
          obblighi e sanzioni significative per chi non si adegua. Lo Studio Sicurezza 
          Padalino offre un servizio completo di consulenza privacy: dall'analisi iniziale 
          all'implementazione del sistema, dalla formazione del personale alla nomina 
          del DPO esterno.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "Adeguamento in 30-60 giorni",
        validity: "Aggiornamento continuo",
        cost: "Da €500 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Cos'è il GDPR?
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Il <strong>Regolamento Generale sulla Protezione dei Dati</strong> (GDPR - General Data 
          Protection Regulation) è la normativa europea che disciplina il trattamento dei dati 
          personali. È entrato in vigore il 25 maggio 2018 e ha sostituito la precedente direttiva 
          95/46/CE, introducendo un approccio basato sul rischio e sulla responsabilizzazione 
          del titolare del trattamento (accountability).
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il GDPR si applica a qualsiasi organizzazione che tratti dati personali di cittadini 
          europei, indipendentemente dalla sede dell'organizzazione. Le sanzioni per la non 
          conformità possono essere molto elevate, fino al 4% del fatturato mondiale.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* Analisi Compliance */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Analisi di Compliance
                </h3>
                <p className="text-muted-foreground mb-4">
                  Verifica dello stato attuale dell'organizzazione rispetto ai requisiti del GDPR, 
                  identificazione dei gap e definizione del piano di adeguamento.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Mappatura trattamenti", "Analisi basi giuridiche", "Verifica informative", "Verifica consensi", "Analisi misure sicurezza", "Gap analysis"].map((item, i) => (
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
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Documentazione Privacy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione di tutta la documentazione necessaria per la conformità al GDPR, 
                  personalizzata per la tua organizzazione.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Registro dei trattamenti", "Informative privacy", "Moduli consenso", "Nomine responsabili", "Accordi contitolarità", "Policy interne", "Procedure data breach", "DPIA (se necessaria)"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* DPO */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  DPO Esterno
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nomina e assunzione dell'incarico di Data Protection Officer esterno per 
                  le organizzazioni che ne hanno l'obbligo o che scelgono di nominarlo volontariamente.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Sorveglianza conformità", "Consulenza al titolare", "Punto di contatto Garante", "Gestione richieste interessati", "Audit periodici", "Aggiornamento normativo"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Formazione */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Formazione Privacy
                </h3>
                <p className="text-muted-foreground mb-4">
                  Corsi di formazione per il personale autorizzato al trattamento dei dati, 
                  come previsto dall'art. 29 del GDPR.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Corso base GDPR", "Corso per responsabili", "Formazione specifica", "E-learning disponibile", "Attestato di formazione", "Aggiornamenti periodici"].map((item, i) => (
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

      {/* Principali Adempimenti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Principali Adempimenti GDPR
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Registro dei Trattamenti", desc: "Documento che descrive tutti i trattamenti di dati personali effettuati dall'organizzazione" },
            { title: "Informative Privacy", desc: "Documenti che informano gli interessati su come vengono trattati i loro dati" },
            { title: "Consensi", desc: "Raccolta e gestione dei consensi per i trattamenti che lo richiedono" },
            { title: "Nomine", desc: "Nomina dei responsabili del trattamento e degli autorizzati" },
            { title: "Misure di Sicurezza", desc: "Implementazione di misure tecniche e organizzative adeguate" },
            { title: "Data Breach", desc: "Procedure per la gestione e notifica delle violazioni dei dati" },
            { title: "Diritti degli Interessati", desc: "Procedure per rispondere alle richieste di accesso, rettifica, cancellazione" },
            { title: "DPIA", desc: "Valutazione d'impatto per trattamenti ad alto rischio" },
          ].map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Costi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Costi Indicativi
        </h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
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
                  <td className="py-3">Adeguamento base (piccola impresa)</td>
                  <td className="py-3">Da €500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Adeguamento completo (media impresa)</td>
                  <td className="py-3">Da €1.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">DPO esterno (canone annuale)</td>
                  <td className="py-3">Da €1.200/anno + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Corso formazione privacy (4 ore)</td>
                  <td className="py-3">€80/persona + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Audit privacy periodico</td>
                  <td className="py-3">Da €300 + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">DPIA (Valutazione d'impatto)</td>
                  <td className="py-3">Da €800 + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * I costi variano in base alla complessità dell'organizzazione e al volume dei dati trattati.
          </p>
        </div>
      </section>

      {/* Sanzioni */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Le Sanzioni del GDPR
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Violazioni Minori</h3>
            <p className="text-3xl font-bold text-yellow-700 mb-2">Fino a €10 milioni</p>
            <p className="text-sm text-yellow-700">
              o il 2% del fatturato mondiale annuo (se superiore). Per violazioni relative a: 
              obblighi del titolare, certificazioni, organismi di controllo.
            </p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-semibold text-red-800 mb-2">Violazioni Gravi</h3>
            <p className="text-3xl font-bold text-red-700 mb-2">Fino a €20 milioni</p>
            <p className="text-sm text-red-700">
              o il 4% del fatturato mondiale annuo (se superiore). Per violazioni relative a: 
              principi base, diritti degli interessati, trasferimenti internazionali.
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
