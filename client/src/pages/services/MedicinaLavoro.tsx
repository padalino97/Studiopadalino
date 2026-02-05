/*
  Service Page: Medicina del Lavoro
  - Visite mediche, sorveglianza sanitaria
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, Stethoscope, ClipboardList, Calendar, UserCheck, Heart } from "lucide-react";

const faqs = [
  {
    question: "Quando è obbligatoria la sorveglianza sanitaria?",
    answer: "La sorveglianza sanitaria è obbligatoria quando i lavoratori sono esposti a rischi specifici come: agenti chimici, fisici o biologici, movimentazione manuale dei carichi, uso di videoterminali per più di 20 ore settimanali, lavoro notturno, e altri rischi previsti dalla normativa."
  },
  {
    question: "Chi è il medico competente?",
    answer: "Il medico competente è un professionista specializzato in medicina del lavoro, nominato dal datore di lavoro per effettuare la sorveglianza sanitaria. Deve possedere specifici requisiti di legge e collabora con il datore di lavoro e il RSPP per la valutazione dei rischi."
  },
  {
    question: "Ogni quanto vanno fatte le visite mediche?",
    answer: "La periodicità delle visite mediche è stabilita dal medico competente nel protocollo sanitario, in base ai rischi specifici. In genere è annuale, ma può essere più frequente per alcuni rischi o meno frequente per altri, secondo la valutazione del medico."
  },
  {
    question: "Cosa succede se un lavoratore risulta non idoneo?",
    answer: "Se il lavoratore risulta non idoneo alla mansione specifica, il datore di lavoro deve adibire il lavoratore a mansioni equivalenti o inferiori, compatibili con il suo stato di salute. Il lavoratore può fare ricorso contro il giudizio entro 30 giorni all'organo di vigilanza territorialmente competente."
  },
  {
    question: "Le visite mediche sono a carico del datore di lavoro?",
    answer: "Sì, tutti i costi relativi alla sorveglianza sanitaria sono a carico del datore di lavoro, comprese le visite mediche, gli esami strumentali e di laboratorio previsti dal protocollo sanitario."
  },
];

const relatedServices = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Formazione", href: "/servizi/formazione" },
  { title: "Autorizzazioni Sanitarie", href: "/servizi/autorizzazioni-sanitarie" },
];

export default function MedicinaLavoro() {
  return (
    <ServicePageLayout
      title="Medicina del Lavoro"
      subtitle="Sorveglianza sanitaria, nomina medico competente, visite mediche preventive e periodiche. Tutela della salute dei lavoratori secondo il D.Lgs 81/08."
      badge="Sorveglianza Sanitaria"
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/yqOtMscJOKgzwgVm.jpg"
      icon={<Heart className="w-4 h-4" />}
      intro={
        <p>
          La medicina del lavoro è la branca della medicina che si occupa della prevenzione, 
          diagnosi e cura delle malattie professionali e degli infortuni sul lavoro. 
          Lo Studio Sicurezza Padalino offre un servizio completo di sorveglianza sanitaria, 
          collaborando con medici competenti qualificati per garantire la tutela della salute 
          dei tuoi dipendenti e la conformità normativa della tua azienda.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "Visite in 24-48h dalla richiesta",
        validity: "Secondo protocollo sanitario",
        cost: "Contattaci per un preventivo",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Cos'è la Sorveglianza Sanitaria?
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          La sorveglianza sanitaria è l'insieme degli atti medici finalizzati alla tutela 
          dello stato di salute e sicurezza dei lavoratori, in relazione all'ambiente di lavoro, 
          ai fattori di rischio professionali e alle modalità di svolgimento dell'attività lavorativa.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          È effettuata dal <strong>medico competente</strong> e comprende visite mediche preventive, 
          periodiche, su richiesta del lavoratore, in occasione del cambio mansione, alla cessazione 
          del rapporto di lavoro e al rientro dopo assenza per motivi di salute superiore a 60 giorni.
        </p>
      </section>

      {/* Servizi Offerti */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          I Nostri Servizi
        </h2>
        
        <div className="space-y-6">
          {/* Nomina Medico */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Nomina Medico Competente
                </h3>
                <p className="text-muted-foreground mb-4">
                  Individuazione e nomina di un medico competente qualificato, in possesso di tutti 
                  i requisiti previsti dalla legge. Il medico collaborerà con il datore di lavoro 
                  e il RSPP per la gestione della salute dei lavoratori.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Selezione medico qualificato", "Lettera di nomina", "Comunicazione agli enti", "Coordinamento attività"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Visite Mediche */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Visite Mediche
                </h3>
                <p className="text-muted-foreground mb-4">
                  Organizzazione e gestione delle visite mediche presso la sede aziendale o 
                  presso ambulatori convenzionati. Visite preventive, periodiche e su richiesta.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Visite preventive (assunzione)", "Visite periodiche", "Visite su richiesta", "Visite cambio mansione", "Visite rientro malattia", "Visite cessazione rapporto"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Protocollo Sanitario */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <ClipboardList className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Protocollo Sanitario
                </h3>
                <p className="text-muted-foreground mb-4">
                  Redazione del protocollo sanitario aziendale che definisce gli accertamenti 
                  sanitari da effettuare per ogni mansione, in base ai rischi specifici individuati 
                  nel DVR.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Analisi rischi per mansione", "Definizione accertamenti", "Periodicità visite", "Esami strumentali", "Esami di laboratorio", "Aggiornamento periodico"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Esami */}
          <div className="bg-white border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  Esami Strumentali e di Laboratorio
                </h3>
                <p className="text-muted-foreground mb-4">
                  Organizzazione di tutti gli esami previsti dal protocollo sanitario, 
                  presso laboratori e centri diagnostici convenzionati.
                </p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {["Audiometria", "Spirometria", "Visiotest", "ECG", "Esami ematochimici", "Drug test", "Alcol test", "Rx torace"].map((item, i) => (
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
            I costi della sorveglianza sanitaria dipendono dal numero di lavoratori, 
            dai rischi presenti e dagli accertamenti previsti dal protocollo sanitario.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 font-semibold">Servizio</th>
                  <th className="text-left py-3 font-semibold"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3">Visita medica base</td>
                  <td className="py-3">Contattaci per un preventivo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Visita + audiometria + spirometria</td>
                  <td className="py-3">Contattaci per un preventivo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Visita completa (tutti gli esami)</td>
                  <td className="py-3">Contattaci per un preventivo</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3">Drug test</td>
                  <td className="py-3">Contattaci per un preventivo</td>
                </tr>
                <tr>
                  <td className="py-3">Canone annuale medico competente</td>
                  <td className="py-3">Contattaci per un preventivo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            * I prezzi sono indicativi. Offriamo pacchetti personalizzati per aziende con più dipendenti.
          </p>
        </div>
      </section>

      {/* Giudizi di Idoneità */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Giudizi di Idoneità
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          Al termine della visita medica, il medico competente esprime un giudizio di idoneità 
          alla mansione specifica. I possibili giudizi sono:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Idoneità</h4>
            <p className="text-sm text-green-700">Il lavoratore può svolgere la mansione senza limitazioni.</p>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">Idoneità con prescrizioni</h4>
            <p className="text-sm text-yellow-700">Il lavoratore può svolgere la mansione con alcune limitazioni.</p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-800 mb-2">Inidoneità temporanea</h4>
            <p className="text-sm text-orange-700">Il lavoratore non può svolgere la mansione per un periodo limitato.</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Inidoneità permanente</h4>
            <p className="text-sm text-red-700">Il lavoratore non può svolgere la mansione specifica.</p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
