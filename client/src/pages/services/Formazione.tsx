/*
  Service Page: Formazione
  - Corsi obbligatori, attestati
  - Contenuti dettagliati stile ANFOS
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import { CheckCircle, GraduationCap, Users, Clock, Award, BookOpen, School } from "lucide-react";

const faqs = [
  {
    question: "Quali corsi sono obbligatori per i lavoratori?",
    answer: "Tutti i lavoratori devono frequentare un corso di formazione generale (4 ore) e un corso di formazione specifica (4, 8 o 16 ore in base al rischio aziendale). Inoltre, sono obbligatori i corsi per addetti antincendio e primo soccorso, e corsi specifici per alcune mansioni (es. carrellisti, lavori in quota)."
  },
  {
    question: "Ogni quanto va aggiornata la formazione?",
    answer: "La formazione dei lavoratori va aggiornata ogni 5 anni (6 ore). La formazione antincendio va aggiornata ogni 5 anni (2, 5 o 8 ore in base al livello). La formazione primo soccorso va aggiornata ogni 3 anni (4 o 6 ore). Il RLS va aggiornato annualmente."
  },
  {
    question: "I corsi online sono validi?",
    answer: "Sì, i corsi online (e-learning) sono validi per la formazione generale dei lavoratori e per alcune parti della formazione specifica a rischio basso. Per i rischi medio e alto, e per i corsi pratici (antincendio, primo soccorso, attrezzature), è necessaria la formazione in presenza o in videoconferenza."
  },
  {
    question: "Chi può erogare la formazione sulla sicurezza?",
    answer: "La formazione può essere erogata da soggetti formatori accreditati dalla Regione, da enti bilaterali, da associazioni sindacali, o da formatori qualificati secondo i criteri del D.I. 6 marzo 2013. I nostri docenti sono tutti in possesso dei requisiti di legge."
  },
  {
    question: "Cosa succede se non formo i miei dipendenti?",
    answer: "La mancata formazione dei lavoratori comporta sanzioni per il datore di lavoro: arresto da 2 a 4 mesi o ammenda da 1.474,21 a 6.388,23 euro. In caso di infortunio, la mancata formazione può aggravare la posizione del datore di lavoro."
  },
];

const relatedServices = [
  { title: "Sicurezza sul Lavoro", href: "/servizi/sicurezza-lavoro" },
  { title: "Medicina del Lavoro", href: "/servizi/medicina-lavoro" },
  { title: "HACCP", href: "/servizi/haccp" },
];

const courses = [
  {
    category: "Formazione Lavoratori",
    items: [
      { name: "Formazione Generale Lavoratori", duration: "4 ore", validity: "Permanente", price: "€50" },
      { name: "Formazione Specifica Rischio Basso", duration: "4 ore", validity: "5 anni", price: "€60" },
      { name: "Formazione Specifica Rischio Medio", duration: "8 ore", validity: "5 anni", price: "€90" },
      { name: "Formazione Specifica Rischio Alto", duration: "16 ore", validity: "5 anni", price: "€150" },
      { name: "Aggiornamento Lavoratori", duration: "6 ore", validity: "5 anni", price: "€70" },
    ]
  },
  {
    category: "Figure della Sicurezza",
    items: [
      { name: "Corso Preposto", duration: "8 ore", validity: "2 anni", price: "€120" },
      { name: "Corso Dirigente", duration: "16 ore", validity: "5 anni", price: "€200" },
      { name: "Corso RLS", duration: "32 ore", validity: "1 anno", price: "€350" },
      { name: "Corso RSPP Datore di Lavoro (Basso)", duration: "16 ore", validity: "5 anni", price: "€250" },
      { name: "Corso RSPP Datore di Lavoro (Medio)", duration: "32 ore", validity: "5 anni", price: "€400" },
      { name: "Corso RSPP Datore di Lavoro (Alto)", duration: "48 ore", validity: "5 anni", price: "€550" },
    ]
  },
  {
    category: "Emergenze",
    items: [
      { name: "Addetto Antincendio Livello 1", duration: "4 ore", validity: "5 anni", price: "€80" },
      { name: "Addetto Antincendio Livello 2", duration: "8 ore", validity: "5 anni", price: "€150" },
      { name: "Addetto Antincendio Livello 3", duration: "16 ore", validity: "5 anni", price: "€250" },
      { name: "Addetto Primo Soccorso (Gruppo B-C)", duration: "12 ore", validity: "3 anni", price: "€150" },
      { name: "Addetto Primo Soccorso (Gruppo A)", duration: "16 ore", validity: "3 anni", price: "€200" },
    ]
  },
  {
    category: "Attrezzature di Lavoro",
    items: [
      { name: "Carrelli Elevatori (Muletto)", duration: "12 ore", validity: "5 anni", price: "€180" },
      { name: "Piattaforme Elevabili (PLE)", duration: "10 ore", validity: "5 anni", price: "€200" },
      { name: "Gru su Autocarro", duration: "12 ore", validity: "5 anni", price: "€250" },
      { name: "Escavatori e Pale", duration: "16 ore", validity: "5 anni", price: "€300" },
      { name: "Lavori in Quota e DPI III Categoria", duration: "8 ore", validity: "5 anni", price: "€180" },
    ]
  },
  {
    category: "Rischi Specifici",
    items: [
      { name: "Rischio Elettrico (PES-PAV-PEI)", duration: "16 ore", validity: "5 anni", price: "€250" },
      { name: "Spazi Confinati", duration: "8 ore", validity: "5 anni", price: "€200" },
      { name: "Diisocianati (NCO)", duration: "4 ore", validity: "5 anni", price: "€80" },
      { name: "Amianto (Operatori)", duration: "30 ore", validity: "Permanente", price: "€400" },
    ]
  },
];

export default function Formazione() {
  return (
    <ServicePageLayout
      title="Formazione Sicurezza sul Lavoro"
      subtitle="Corsi obbligatori per lavoratori, preposti, dirigenti, RSPP, RLS, antincendio e primo soccorso. Attestati validi e riconosciuti su tutto il territorio nazionale."
      badge="Corsi Certificati"
      heroImage="/images/training-room.jpg"
      icon={<School className="w-4 h-4" />}
      intro={
        <p>
          La formazione è uno degli obblighi fondamentali previsti dal D.Lgs 81/08 per garantire 
          la sicurezza nei luoghi di lavoro. Lo Studio Sicurezza Padalino organizza corsi di 
          formazione per tutte le figure aziendali, con docenti qualificati e attestati validi 
          su tutto il territorio nazionale. Offriamo corsi in aula, in videoconferenza e in 
          modalità e-learning per rispondere alle esigenze di ogni azienda.
        </p>
      }
      faqs={faqs}
      relatedServices={relatedServices}
      quickInfo={{
        duration: "Da 4 a 48 ore",
        validity: "Da 1 a 5 anni",
        cost: "Da €50/corso + IVA",
      }}
    >
      {/* Cos'è Section */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          L'Importanza della Formazione
        </h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          La formazione sulla sicurezza non è solo un obbligo di legge, ma uno strumento 
          fondamentale per prevenire infortuni e malattie professionali. Un lavoratore formato 
          è consapevole dei rischi presenti nel proprio ambiente di lavoro e sa come comportarsi 
          per proteggere sé stesso e i colleghi.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Il <strong>D.Lgs 81/08</strong> e l'<strong>Accordo Stato-Regioni</strong> stabiliscono 
          i contenuti minimi e la durata dei corsi di formazione per ogni figura aziendale. 
          La mancata formazione comporta sanzioni penali e amministrative per il datore di lavoro.
        </p>
      </section>

      {/* Modalità di Erogazione */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Modalità di Erogazione
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">In Aula</h3>
            <p className="text-sm text-muted-foreground">
              Formazione presso la nostra sede o direttamente in azienda. Ideale per gruppi 
              e per corsi con parte pratica.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">Videoconferenza</h3>
            <p className="text-sm text-muted-foreground">
              Formazione sincrona a distanza con interazione diretta con il docente. 
              Valida come formazione in presenza.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-gray-900 mb-2">E-Learning</h3>
            <p className="text-sm text-muted-foreground">
              Piattaforma online accessibile 24/7. Ideale per la formazione generale 
              e per aziende con sedi distribuite.
            </p>
          </div>
        </div>
      </section>

      {/* Catalogo Corsi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Catalogo Corsi e Prezzi
        </h2>
        
        {courses.map((category, catIndex) => (
          <div key={catIndex} className="mb-8">
            <h3 className="font-display text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              {category.category}
            </h3>
            <div className="bg-white border rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-4 font-semibold">Corso</th>
                      <th className="text-left py-3 px-4 font-semibold">Durata</th>
                      <th className="text-left py-3 px-4 font-semibold">Validità</th>
                      <th className="text-left py-3 px-4 font-semibold">Prezzo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((course, courseIndex) => (
                      <tr key={courseIndex} className="border-t">
                        <td className="py-3 px-4 font-medium">{course.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{course.duration}</td>
                        <td className="py-3 px-4 text-muted-foreground">{course.validity}</td>
                        <td className="py-3 px-4 font-semibold text-primary">{course.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}

        <p className="text-sm text-muted-foreground mt-4">
          * I prezzi sono indicativi e per singolo partecipante. Sconti disponibili per gruppi aziendali. 
          Contattaci per un preventivo personalizzato.
        </p>
      </section>

      {/* Attestati */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Attestati e Certificazioni
        </h2>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
          <p className="text-muted-foreground mb-4">
            Al termine di ogni corso viene rilasciato un <strong>attestato nominativo</strong> 
            conforme alla normativa vigente, con indicazione di:
          </p>
          <ul className="space-y-2">
            {[
              "Dati anagrafici del partecipante",
              "Denominazione del corso e riferimenti normativi",
              "Durata e data di svolgimento",
              "Firma del docente e del responsabile del progetto formativo",
              "Contenuti del corso",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mt-4">
            Gli attestati sono validi su tutto il territorio nazionale e vengono consegnati 
            in formato digitale entro 48 ore dal termine del corso.
          </p>
        </div>
      </section>

      {/* Obblighi Formativi */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
          Obblighi Formativi per Figura
        </h2>
        <div className="space-y-4">
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Lavoratori</h3>
            <p className="text-sm text-muted-foreground">
              Formazione generale (4 ore) + Formazione specifica (4-16 ore in base al rischio). 
              Aggiornamento ogni 5 anni (6 ore).
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Preposti</h3>
            <p className="text-sm text-muted-foreground">
              Formazione lavoratori + Corso preposto (8 ore). Aggiornamento ogni 2 anni (6 ore).
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">Dirigenti</h3>
            <p className="text-sm text-muted-foreground">
              Corso dirigenti (16 ore). Aggiornamento ogni 5 anni (6 ore). 
              Sostituisce la formazione lavoratori.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">RSPP Datore di Lavoro</h3>
            <p className="text-sm text-muted-foreground">
              Corso RSPP (16-48 ore in base al rischio). Aggiornamento ogni 5 anni (6-14 ore).
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-2">RLS</h3>
            <p className="text-sm text-muted-foreground">
              Corso RLS (32 ore). Aggiornamento annuale (4-8 ore in base ai dipendenti).
            </p>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
