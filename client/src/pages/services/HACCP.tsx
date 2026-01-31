/*
  Service Page: HACCP
  - Sicurezza alimentare
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, UtensilsCrossed, FileText, FlaskConical, GraduationCap } from "lucide-react";

const faqs = [
  {
    question: "Cos'è l'HACCP?",
    answer: "HACCP (Hazard Analysis and Critical Control Points) è un sistema di autocontrollo igienico-sanitario obbligatorio per tutte le aziende che operano nel settore alimentare. È basato sull'analisi dei pericoli e l'identificazione dei punti critici di controllo per garantire la sicurezza degli alimenti."
  },
  {
    question: "Chi deve avere il manuale HACCP?",
    answer: "Il manuale HACCP è obbligatorio per tutte le attività che trattano alimenti: ristoranti, bar, pizzerie, pasticcerie, panifici, macellerie, pescherie, supermercati, mense, catering, trasporto alimenti, produzione alimentare, e qualsiasi altra attività del settore food."
  },
  {
    question: "Ogni quanto va aggiornato il manuale HACCP?",
    answer: "Il manuale HACCP deve essere aggiornato ogni volta che ci sono modifiche significative nell'attività: nuovi prodotti, nuove attrezzature, modifiche ai locali, cambio fornitori, nuove normative. È buona prassi verificarlo almeno una volta all'anno."
  },
  {
    question: "Quali sono le sanzioni per mancanza di HACCP?",
    answer: "Le sanzioni per mancanza o inadeguatezza del sistema HACCP vanno da 1.000 a 6.000 euro. In caso di gravi carenze igieniche, l'autorità sanitaria può disporre la sospensione dell'attività fino alla risoluzione delle non conformità."
  },
  {
    question: "Gli attestati HACCP hanno scadenza?",
    answer: "Sì, gli attestati di formazione HACCP hanno validità variabile in base alla normativa regionale. In Sicilia, la validità è di 3 anni per tutti gli operatori del settore alimentare. È necessario frequentare un corso di aggiornamento prima della scadenza."
  },
];

const relatedServices = [
  { title: "Formazione", href: "/servizi/formazione" },
  { title: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie" },
  { title: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso" },
];

export default function HACCP() {
  return (
    <ServicePageLayout
      title="HACCP - Sicurezza Alimentare"
      subtitle="Manuali di autocontrollo, formazione alimentaristi, analisi di laboratorio e assistenza durante i controlli ASP. Conformità al Reg. CE 852/2004."
      badge="Sicurezza Alimentare"
      heroImage="/images/hero-consulting.jpg"
      icon={<UtensilsCrossed className="w-4 h-4" />}
      intro={
        <p>
          La sicurezza alimentare è un obbligo di legge per tutte le aziende del settore food. 
          Il sistema HACCP (Hazard Analysis and Critical Control Points) è lo strumento principale 
          per garantire che gli alimenti siano sicuri per il consumatore. Lo Studio Sicurezza 
          Padalino offre un servizio completo: dalla redazione del manuale di autocontrollo 
          alla formazione del personale, dalle analisi di laboratorio all'assistenza durante 
          i controlli dell'ASP.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "Manuale in 5-7 giorni",
        validity: "Aggiornamento periodico",
        cost: "Da €200 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Cos'è il Sistema HACCP?
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          L'HACCP è un sistema preventivo di controllo degli alimenti finalizzato a garantire 
          la sicurezza igienica. È stato introdotto in Europa con la <strong>Direttiva 93/43/CEE</strong> 
          e successivamente aggiornato con il <strong>Regolamento CE 852/2004</strong>, che stabilisce 
          le norme generali in materia di igiene dei prodotti alimentari.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il sistema si basa su <strong>7 principi fondamentali</strong>: identificazione dei pericoli, 
          determinazione dei punti critici di controllo (CCP), definizione dei limiti critici, 
          monitoraggio dei CCP, azioni correttive, procedure di verifica e documentazione.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* Manuale HACCP */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Manuale di Autocontrollo HACCP
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione del manuale HACCP personalizzato per la tua attività, con analisi 
                  dei pericoli, identificazione dei CCP, procedure operative e schede di registrazione.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Sopralluogo in azienda", "Analisi dei processi", "Identificazione pericoli", "Definizione CCP", "Procedure operative", "Schede di registrazione", "Istruzioni operative", "Piano di sanificazione"].map((item, i) => (
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
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Formazione Alimentaristi
                </h3>
                <p className="text-muted-foreground mb-4">
                  Corsi di formazione per tutti gli operatori del settore alimentare, 
                  con rilascio di attestato valido ai sensi della normativa regionale.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Corso base (4 ore)", "Corso responsabili (8 ore)", "Corso aggiornamento", "Formazione in azienda", "E-learning disponibile", "Attestato immediato"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Analisi */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FlaskConical className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Analisi di Laboratorio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Analisi microbiologiche e chimiche su alimenti, superfici e acque, 
                  presso laboratori accreditati. Campionamento e interpretazione dei risultati.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Analisi microbiologiche", "Analisi chimiche", "Tamponi superfici", "Analisi acque", "Campionamento", "Interpretazione risultati"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Assistenza */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <UtensilsCrossed className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Assistenza e Consulenza
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supporto continuo per la gestione del sistema HACCP e assistenza 
                  durante i controlli delle autorità sanitarie.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Assistenza controlli ASP", "Gestione non conformità", "Aggiornamento manuale", "Verifiche periodiche", "Consulenza telefonica", "Sopralluoghi programmati"].map((item, i) => (
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

      {/* Attività Interessate */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Attività Interessate
        </h2>
        <p className="text-muted-foreground mb-6">
          Il sistema HACCP è obbligatorio per tutte le attività che trattano alimenti:
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            "Ristoranti e trattorie",
            "Bar e caffetterie",
            "Pizzerie",
            "Pasticcerie e gelaterie",
            "Panifici",
            "Macellerie",
            "Pescherie",
            "Supermercati e minimarket",
            "Mense aziendali e scolastiche",
            "Catering e banqueting",
            "Trasporto alimenti",
            "Produzione alimentare",
            "Agriturismi",
            "B&B con colazione",
            "Distributori automatici",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 bg-white border rounded-lg p-3">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-sm">{item}</span>
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
                  <td className="py-3">Manuale HACCP base (bar, piccola ristorazione)</td>
                  <td className="py-3">Da €200 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Manuale HACCP completo (ristorante, produzione)</td>
                  <td className="py-3">Da €350 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Aggiornamento manuale HACCP</td>
                  <td className="py-3">Da €100 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Corso alimentaristi base (4 ore)</td>
                  <td className="py-3">€50/persona + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Corso responsabili (8 ore)</td>
                  <td className="py-3">€80/persona + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Analisi microbiologiche alimenti</td>
                  <td className="py-3">Da €30/campione + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">Tamponi superfici (kit 5 tamponi)</td>
                  <td className="py-3">Da €80 + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * Offriamo pacchetti completi (manuale + formazione + analisi) a prezzi vantaggiosi.
          </p>
        </div>
      </section>

      {/* I 7 Principi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          I 7 Principi dell'HACCP
        </h2>
        <div className="space-y-3">
          {[
            { num: 1, title: "Analisi dei pericoli", desc: "Identificare i pericoli biologici, chimici e fisici in ogni fase del processo" },
            { num: 2, title: "Identificazione dei CCP", desc: "Determinare i punti critici di controllo dove i pericoli possono essere prevenuti o eliminati" },
            { num: 3, title: "Definizione dei limiti critici", desc: "Stabilire i valori limite che devono essere rispettati per ogni CCP" },
            { num: 4, title: "Monitoraggio dei CCP", desc: "Definire le procedure di monitoraggio per verificare il rispetto dei limiti" },
            { num: 5, title: "Azioni correttive", desc: "Stabilire le azioni da intraprendere quando un CCP non è sotto controllo" },
            { num: 6, title: "Procedure di verifica", desc: "Definire le attività per verificare l'efficacia del sistema HACCP" },
            { num: 7, title: "Documentazione", desc: "Mantenere registrazioni adeguate per dimostrare l'applicazione del sistema" },
          ].map((item) => (
            <div key={item.num} className="flex items-start gap-4 bg-white border rounded-lg p-4">
              <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.num}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
