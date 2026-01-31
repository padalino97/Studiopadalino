/*
  Service Page: Sistemi di Qualità ISO
  - ISO 9001, 14001, 45001
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, Award, Target, RefreshCw, Shield } from "lucide-react";

const faqs = [
  {
    question: "Cos'è la certificazione ISO?",
    answer: "La certificazione ISO è un riconoscimento rilasciato da un ente terzo accreditato che attesta la conformità del sistema di gestione aziendale a uno standard internazionale. Le certificazioni più diffuse sono ISO 9001 (qualità), ISO 14001 (ambiente) e ISO 45001 (sicurezza)."
  },
  {
    question: "La certificazione ISO è obbligatoria?",
    answer: "No, la certificazione ISO è volontaria. Tuttavia, è spesso richiesta come requisito per partecipare a gare d'appalto pubbliche, per lavorare con grandi aziende, o per accedere a determinati mercati. Inoltre, dimostra l'impegno dell'azienda verso la qualità e il miglioramento continuo."
  },
  {
    question: "Quanto tempo ci vuole per ottenere la certificazione?",
    answer: "I tempi dipendono dalla dimensione e complessità dell'azienda e dal livello di partenza. In media, per una PMI, il percorso di implementazione richiede 3-6 mesi. Dopo l'implementazione, l'ente di certificazione effettua l'audit e rilascia il certificato entro 30-60 giorni."
  },
  {
    question: "Quanto dura la certificazione ISO?",
    answer: "La certificazione ISO ha validità triennale. Durante questo periodo, l'ente di certificazione effettua audit di sorveglianza annuali per verificare il mantenimento del sistema. Al termine dei tre anni, è necessario un audit di rinnovo (ricertificazione)."
  },
  {
    question: "Quali sono i vantaggi della certificazione ISO?",
    answer: "I principali vantaggi sono: miglioramento dell'organizzazione interna, riduzione dei costi e degli sprechi, maggiore soddisfazione dei clienti, accesso a nuovi mercati e gare d'appalto, miglioramento dell'immagine aziendale, e riduzione dei rischi."
  },
];

const relatedServices = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie" },
  { title: "Privacy GDPR", href: "/servizi/privacy-gdpr" },
];

const certifications = [
  {
    code: "ISO 9001:2015",
    title: "Sistema di Gestione Qualità",
    description: "Lo standard più diffuso al mondo per la gestione della qualità. Aiuta le organizzazioni a migliorare l'efficienza dei processi e la soddisfazione dei clienti.",
    benefits: ["Miglioramento processi", "Soddisfazione clienti", "Riduzione errori", "Accesso gare pubbliche"],
    icon: Target,
  },
  {
    code: "ISO 14001:2015",
    title: "Sistema di Gestione Ambientale",
    description: "Standard per la gestione degli aspetti ambientali dell'organizzazione. Dimostra l'impegno verso la sostenibilità e la riduzione dell'impatto ambientale.",
    benefits: ["Riduzione impatto ambientale", "Risparmio energetico", "Conformità normativa", "Immagine green"],
    icon: RefreshCw,
  },
  {
    code: "ISO 45001:2018",
    title: "Sistema di Gestione Sicurezza",
    description: "Standard per la salute e sicurezza sul lavoro. Integra la gestione della sicurezza nei processi aziendali per prevenire infortuni e malattie professionali.",
    benefits: ["Riduzione infortuni", "Conformità D.Lgs 81/08", "Miglioramento clima aziendale", "Riduzione costi"],
    icon: Shield,
  },
  {
    code: "ISO 37001:2016",
    title: "Sistema di Gestione Anticorruzione",
    description: "Standard per prevenire, rilevare e affrontare la corruzione. Sempre più richiesto per partecipare a gare pubbliche e lavorare con la PA.",
    benefits: ["Prevenzione corruzione", "Trasparenza", "Accesso PA", "Reputazione"],
    icon: Award,
  },
];

export default function QualitaISO() {
  return (
    <ServicePageLayout
      title="Sistemi di Qualità ISO"
      subtitle="Implementazione e certificazione ISO 9001, ISO 14001, ISO 45001, ISO 37001. Audit interni, formazione e assistenza per il mantenimento del sistema."
      badge="Certificazioni"
      intro={
        <p>
          I sistemi di gestione certificati ISO rappresentano uno strumento strategico per 
          migliorare l'organizzazione aziendale, ridurre i costi, aumentare la competitività 
          e accedere a nuovi mercati. Lo Studio Sicurezza Padalino accompagna le aziende in 
          tutto il percorso: dall'analisi iniziale all'implementazione del sistema, fino 
          all'ottenimento della certificazione e al suo mantenimento nel tempo.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "3-6 mesi per certificazione",
        validity: "3 anni (audit annuali)",
        cost: "Da €2.000 + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Cosa Sono i Sistemi di Gestione ISO?
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Un sistema di gestione è un insieme di processi, procedure e responsabilità che 
          un'organizzazione utilizza per raggiungere i propri obiettivi. Gli standard ISO 
          forniscono un framework riconosciuto a livello internazionale per strutturare 
          questi sistemi in modo efficace.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          La certificazione ISO è rilasciata da un <strong>ente di certificazione accreditato</strong> 
          (come DNV, Bureau Veritas, TÜV, Certiquality) dopo aver verificato, tramite audit, 
          che il sistema di gestione dell'azienda è conforme ai requisiti dello standard.
        </p>
      </section>

      {/* Certificazioni */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Le Certificazioni ISO
        </h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white border rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <cert.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="badge-regulation">{cert.code}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.benefits.map((benefit, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
                        <CheckCircle className="w-3 h-3 text-primary" />
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Il Nostro Approccio */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Il Nostro Approccio
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
            <h3 className="font-semibold text-gray-900 mb-2">Analisi Iniziale</h3>
            <p className="text-sm text-muted-foreground">
              Valutiamo lo stato attuale dell'organizzazione, identifichiamo i gap rispetto 
              allo standard e definiamo il piano di implementazione.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
            <h3 className="font-semibold text-gray-900 mb-2">Implementazione</h3>
            <p className="text-sm text-muted-foreground">
              Sviluppiamo la documentazione del sistema (manuale, procedure, istruzioni) 
              e supportiamo l'azienda nell'applicazione pratica.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
            <h3 className="font-semibold text-gray-900 mb-2">Formazione</h3>
            <p className="text-sm text-muted-foreground">
              Formiamo il personale sui requisiti dello standard e sulle procedure aziendali, 
              creando consapevolezza a tutti i livelli.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
            <h3 className="font-semibold text-gray-900 mb-2">Audit Interno</h3>
            <p className="text-sm text-muted-foreground">
              Conduciamo audit interni per verificare la conformità del sistema e identificare 
              eventuali aree di miglioramento prima dell'audit di certificazione.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">5</div>
            <h3 className="font-semibold text-gray-900 mb-2">Certificazione</h3>
            <p className="text-sm text-muted-foreground">
              Assistiamo l'azienda durante l'audit dell'ente di certificazione e supportiamo 
              la risoluzione di eventuali non conformità.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">6</div>
            <h3 className="font-semibold text-gray-900 mb-2">Mantenimento</h3>
            <p className="text-sm text-muted-foreground">
              Supportiamo l'azienda nel mantenimento del sistema nel tempo, con audit interni 
              periodici e assistenza per gli audit di sorveglianza.
            </p>
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
            I costi dipendono dalla dimensione dell'azienda, dalla complessità dei processi 
            e dallo stato di partenza. Ecco alcune indicazioni:
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
                  <td className="py-3">ISO 9001 - PMI (fino a 15 dipendenti)</td>
                  <td className="py-3">Da €2.000 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">ISO 9001 - Media impresa (16-50 dip.)</td>
                  <td className="py-3">Da €3.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">ISO 14001 (aggiuntiva)</td>
                  <td className="py-3">Da €1.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">ISO 45001 (aggiuntiva)</td>
                  <td className="py-3">Da €1.500 + IVA</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Sistema integrato (9001+14001+45001)</td>
                  <td className="py-3">Da €4.500 + IVA</td>
                </tr>
                <tr>
                  <td className="py-3">Mantenimento annuale</td>
                  <td className="py-3">Da €800/anno + IVA</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * I costi dell'ente di certificazione (audit) sono esclusi e variano in base all'ente scelto.
          </p>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Perché Certificarsi?
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Accesso a gare d'appalto pubbliche",
            "Requisito per lavorare con grandi aziende",
            "Miglioramento dell'organizzazione interna",
            "Riduzione dei costi e degli sprechi",
            "Maggiore soddisfazione dei clienti",
            "Miglioramento dell'immagine aziendale",
            "Riduzione dei rischi operativi",
            "Vantaggio competitivo sul mercato",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-white border rounded-lg p-4">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ServicePageLayout>
  );
}
