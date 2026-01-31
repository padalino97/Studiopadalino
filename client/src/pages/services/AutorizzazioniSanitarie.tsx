/*
  Service Page: Autorizzazioni Sanitarie
  - Apertura e accreditamento strutture sanitarie
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, Building2, FileCheck, ClipboardList, Scale } from "lucide-react";

const faqs = [
  {
    question: "Cos'è l'autorizzazione sanitaria?",
    answer: "L'autorizzazione sanitaria è il provvedimento amministrativo che consente l'esercizio di attività sanitarie e socio-sanitarie. È rilasciata dalla Regione o dall'ASP competente e attesta che la struttura possiede i requisiti minimi strutturali, tecnologici e organizzativi previsti dalla normativa."
  },
  {
    question: "Qual è la differenza tra autorizzazione e accreditamento?",
    answer: "L'autorizzazione è il requisito minimo per operare, mentre l'accreditamento è un livello superiore che consente alla struttura di erogare prestazioni per conto del SSN. L'accreditamento richiede requisiti aggiuntivi di qualità e l'iscrizione in un apposito registro regionale."
  },
  {
    question: "Quanto tempo ci vuole per ottenere l'autorizzazione?",
    answer: "I tempi variano in base alla complessità della struttura e alla Regione. In generale, per una struttura semplice (ambulatorio) i tempi sono di 60-90 giorni dalla presentazione della domanda completa. Per strutture più complesse possono essere necessari 6-12 mesi."
  },
  {
    question: "Quali strutture necessitano di autorizzazione sanitaria?",
    answer: "Necessitano di autorizzazione: ambulatori medici e odontoiatrici, poliambulatori, studi di fisioterapia, centri di riabilitazione, strutture residenziali e semiresidenziali, laboratori di analisi, centri di diagnostica per immagini, e in generale tutte le strutture che erogano prestazioni sanitarie."
  },
  {
    question: "Cosa succede se opero senza autorizzazione?",
    answer: "L'esercizio di attività sanitarie senza autorizzazione costituisce reato penale (esercizio abusivo della professione) e comporta sanzioni amministrative, oltre alla chiusura immediata della struttura. È fondamentale ottenere l'autorizzazione prima di iniziare l'attività."
  },
];

const relatedServices = [
  { title: "Sistemi di Qualità ISO", href: "/servizi/qualita-iso" },
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Privacy GDPR", href: "/servizi/privacy-gdpr" },
];

export default function AutorizzazioniSanitarie() {
  return (
    <ServicePageLayout
      title="Autorizzazioni Sanitarie"
      subtitle="Consulenza per l'apertura, l'adeguamento e l'accreditamento di strutture sanitarie e socio-sanitarie. Assistenza completa per il rispetto dei requisiti normativi."
      badge="Strutture Mediche"
      intro={
        <p>
          L'apertura di una struttura sanitaria richiede il rispetto di numerosi requisiti 
          normativi e l'ottenimento di specifiche autorizzazioni. Lo Studio Sicurezza Padalino 
          offre un servizio completo di consulenza per guidarti in tutto il percorso: dalla 
          progettazione degli spazi alla presentazione della domanda, fino all'ottenimento 
          dell'autorizzazione e dell'eventuale accreditamento con il SSN.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "60-180 giorni",
        validity: "Permanente (con verifiche)",
        cost: "Da €1.500 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Il Percorso Autorizzativo
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          L'apertura di una struttura sanitaria in Italia è regolata da normative nazionali 
          e regionali che stabiliscono i requisiti minimi strutturali, tecnologici e organizzativi 
          che ogni struttura deve possedere. In Sicilia, la normativa di riferimento è il 
          <strong> D.A. 20/2024</strong> che ha aggiornato i requisiti per le strutture sanitarie.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il percorso autorizzativo prevede diverse fasi: verifica dei requisiti, adeguamento 
          della struttura, predisposizione della documentazione, presentazione della domanda 
          e sopralluogo dell'ASP. Un consulente esperto può fare la differenza tra un iter 
          rapido e senza intoppi e mesi di ritardi e richieste di integrazioni.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* Consulenza Preliminare */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Consulenza Preliminare
                </h3>
                <p className="text-muted-foreground mb-4">
                  Analisi di fattibilità del progetto, verifica dei requisiti normativi applicabili, 
                  individuazione delle criticità e definizione del percorso autorizzativo.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Analisi normativa applicabile", "Verifica requisiti strutturali", "Verifica requisiti tecnologici", "Verifica requisiti organizzativi", "Stima tempi e costi", "Piano di adeguamento"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Progettazione */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Supporto alla Progettazione
                </h3>
                <p className="text-muted-foreground mb-4">
                  Collaborazione con architetti e progettisti per garantire che gli spazi 
                  rispettino tutti i requisiti normativi fin dalla fase di progettazione.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Layout funzionale", "Dimensioni minime locali", "Percorsi e accessibilità", "Impianti tecnologici", "Arredi e attrezzature", "Segnaletica"].map((item, i) => (
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
                <FileCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Predisposizione Documentazione
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione di tutta la documentazione necessaria per la presentazione 
                  della domanda di autorizzazione.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Relazione tecnica", "Planimetrie conformi", "Regolamento interno", "Carta dei servizi", "Organigramma", "Procedure operative", "Modulistica", "Documentazione attrezzature"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Accreditamento */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Accreditamento Istituzionale
                </h3>
                <p className="text-muted-foreground mb-4">
                  Supporto per l'ottenimento dell'accreditamento con il Servizio Sanitario 
                  Nazionale, che consente di erogare prestazioni in convenzione.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Verifica requisiti aggiuntivi", "Sistema qualità", "Indicatori di performance", "Formazione del personale", "Domanda di accreditamento", "Assistenza sopralluogo"].map((item, i) => (
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

      {/* Tipologie di Strutture */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Tipologie di Strutture
        </h2>
        <p className="text-muted-foreground mb-6">
          Offriamo consulenza per l'autorizzazione di diverse tipologie di strutture sanitarie 
          e socio-sanitarie:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Ambulatori Medici", desc: "Medicina generale, specialistica, odontoiatria" },
            { title: "Poliambulatori", desc: "Strutture con più specialità mediche" },
            { title: "Studi di Fisioterapia", desc: "Riabilitazione e fisioterapia" },
            { title: "Centri Diagnostici", desc: "Radiologia, ecografia, laboratorio analisi" },
            { title: "Strutture Residenziali", desc: "RSA, case di riposo, comunità terapeutiche" },
            { title: "Centri Diurni", desc: "Strutture semiresidenziali" },
            { title: "Studi Medici Associati", desc: "Aggregazioni di professionisti" },
            { title: "Centri Estetici Medicali", desc: "Medicina estetica" },
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
          <p className="text-muted-foreground mb-4">
            I costi variano significativamente in base alla tipologia e complessità della struttura. 
            Ecco alcune indicazioni di massima:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-semibold">Tipologia</th>
                  <th className="text-left py-3 font-semibold">Costo indicativo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Studio medico singolo</td>
                  <td className="py-3">Da €1.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Ambulatorio/Poliambulatorio</td>
                  <td className="py-3">Da €2.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Centro di fisioterapia</td>
                  <td className="py-3">Da €2.000 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Laboratorio analisi</td>
                  <td className="py-3">Da €4.000 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Struttura residenziale (RSA)</td>
                  <td className="py-3">Da €8.000 + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">Accreditamento (aggiuntivo)</td>
                  <td className="py-3">Da €3.000 + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * I prezzi sono indicativi e comprendono la consulenza completa fino all'ottenimento 
            dell'autorizzazione. Contattaci per un preventivo dettagliato.
          </p>
        </div>
      </section>
    </ServicePageLayout>
  );
}
