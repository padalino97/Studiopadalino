/*
  Service Page: Formazione
  - Corsi obbligatori, attestati
  - Contenuti dettagliati stile ANFOS
  - Schede corsi con pagine dedicate
*/

import ServicePageLayout from "@/components/ServicePageLayout";
import CourseCard from "@/components/CourseCard";
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
    id: "rspp",
    title: "Corso RSPP",
    subtitle: "Responsabile Servizio Prevenzione e Protezione",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <Award className="w-3 h-3" />,
    duration: "100 ore",
    level: "Avanzato",
    href: "/servizi/formazione/rspp",
  },
  {
    id: "lavoratori",
    title: "Sicurezza Lavoratori",
    subtitle: "Formazione obbligatoria per tutti i dipendenti",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/VHUFEpwvVlSkzYEd.jpg",
    icon: <Users className="w-3 h-3" />,
    duration: "8 ore",
    level: "Base",
    href: "/servizi/formazione/lavoratori",
  },
  {
    id: "preposti",
    title: "Corso Preposti",
    subtitle: "Formazione per coordinatori e supervisori",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <Users className="w-3 h-3" />,
    duration: "8 ore",
    level: "Intermedio",
    href: "/servizi/formazione/preposti",
  },
  {
    id: "antincendio",
    title: "Antincendio",
    subtitle: "Prevenzione e gestione delle emergenze incendio",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <Award className="w-3 h-3" />,
    duration: "4 ore",
    level: "Base",
    href: "/servizi/formazione/antincendio",
  },
  {
    id: "primo-soccorso",
    title: "Primo Soccorso",
    subtitle: "Interventi di emergenza e rianimazione cardiopolmonare",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/yqOtMscJOKgzwgVm.jpg",
    icon: <Award className="w-3 h-3" />,
    duration: "12 ore",
    level: "Base",
    href: "/servizi/formazione/primo-soccorso",
  },
  {
    id: "rls",
    title: "Corso RLS",
    subtitle: "Rappresentante Lavoratori per la Sicurezza",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <Users className="w-3 h-3" />,
    duration: "32 ore",
    level: "Avanzato",
    href: "/servizi/formazione/rls",
  },
  {
    id: "dirigenti",
    title: "Corso Dirigenti",
    subtitle: "Responsabilità e compiti dei dirigenti in sicurezza",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <Award className="w-3 h-3" />,
    duration: "16 ore",
    level: "Avanzato",
    href: "/servizi/formazione/dirigenti",
  },
  {
    id: "haccp",
    title: "HACCP Alimentaristi",
    subtitle: "Certificazione per operatori del settore alimentare",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg",
    icon: <BookOpen className="w-3 h-3" />,
    duration: "8 ore",
    level: "Base",
    href: "/servizi/formazione/haccp",
  },
];

const courseCategories = [
  {
    category: "Formazione Lavoratori",
    items: [
      { name: "Formazione Generale Lavoratori", duration: "4 ore", validity: "Permanente", price: "50 EUR" },
      { name: "Formazione Specifica Rischio Basso", duration: "4 ore", validity: "5 anni", price: "60 EUR" },
      { name: "Formazione Specifica Rischio Medio", duration: "8 ore", validity: "5 anni", price: "90 EUR" },
      { name: "Formazione Specifica Rischio Alto", duration: "16 ore", validity: "5 anni", price: "150 EUR" },
      { name: "Aggiornamento Lavoratori", duration: "6 ore", validity: "5 anni", price: "70 EUR" },
    ]
  },
  {
    category: "Figure della Sicurezza",
    items: [
      { name: "Corso Preposto", duration: "8 ore", validity: "2 anni", price: "120 EUR" },
      { name: "Corso Dirigente", duration: "16 ore", validity: "5 anni", price: "200 EUR" },
      { name: "Corso RLS", duration: "32 ore", validity: "1 anno", price: "350 EUR" },
      { name: "Corso RSPP Datore di Lavoro (Basso)", duration: "16 ore", validity: "5 anni", price: "250 EUR" },
      { name: "Corso RSPP Datore di Lavoro (Medio)", duration: "32 ore", validity: "5 anni", price: "400 EUR" },
      { name: "Corso RSPP Datore di Lavoro (Alto)", duration: "48 ore", validity: "5 anni", price: "550 EUR" },
    ]
  },
  {
    category: "Emergenze",
    items: [
      { name: "Addetto Antincendio Livello 1", duration: "4 ore", validity: "5 anni", price: "80 EUR" },
      { name: "Addetto Antincendio Livello 2", duration: "8 ore", validity: "5 anni", price: "150 EUR" },
      { name: "Addetto Antincendio Livello 3", duration: "16 ore", validity: "5 anni", price: "250 EUR" },
      { name: "Addetto Primo Soccorso (Gruppo B-C)", duration: "12 ore", validity: "3 anni", price: "150 EUR" },
      { name: "Addetto Primo Soccorso (Gruppo A)", duration: "16 ore", validity: "3 anni", price: "200 EUR" },
    ]
  },
  {
    category: "Attrezzature di Lavoro",
    items: [
      { name: "Carrelli Elevatori (Muletto)", duration: "12 ore", validity: "5 anni", price: "180 EUR" },
      { name: "Piattaforme Elevabili (PLE)", duration: "10 ore", validity: "5 anni", price: "200 EUR" },
      { name: "Gru su Autocarro", duration: "12 ore", validity: "5 anni", price: "250 EUR" },
      { name: "Escavatori e Pale", duration: "16 ore", validity: "5 anni", price: "300 EUR" },
      { name: "Lavori in Quota e DPI III Categoria", duration: "8 ore", validity: "5 anni", price: "180 EUR" },
    ]
  },
  {
    category: "Rischi Specifici",
    items: [
      { name: "Rischio Elettrico (PES-PAV-PEI)", duration: "16 ore", validity: "5 anni", price: "250 EUR" },
      { name: "Spazi Confinati", duration: "8 ore", validity: "5 anni", price: "200 EUR" },
      { name: "Diisocianati (NCO)", duration: "4 ore", validity: "5 anni", price: "80 EUR" },
      { name: "Amianto (Operatori)", duration: "30 ore", validity: "Permanente", price: "400 EUR" },
    ]
  },
];

export default function Formazione() {
  return (
    <ServicePageLayout
      title="Formazione Sicurezza sul Lavoro"
      subtitle="Corsi obbligatori per lavoratori, preposti, dirigenti, RSPP, RLS, antincendio e primo soccorso. Attestati validi e riconosciuti su tutto il territorio nazionale."
      badge="Corsi Certificati"
      heroImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663305612957/zyQDylVlaeLOnFjk.jpg"
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
        cost: "Da 50 EUR/corso + IVA",
      }}
    >
      {/* Corsi Principali con Schede */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">
          I Corsi Principali
        </h2>
        <p className="text-muted-foreground mb-8">
          Scegli il corso più adatto alle tue esigenze. Clicca su "Scopri di più" per 
          visualizzare i dettagli completi, il programma e le modalità di iscrizione.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              subtitle={course.subtitle}
              image={course.image}
              icon={course.icon}
              duration={course.duration}
              level={course.level}
              href={course.href}
            />
          ))}
        </div>
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

      {/* Catalogo Corsi Completo */}
      <section className="mb-12">
        <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
          Catalogo Corsi Completo e Prezzi
        </h2>
        
        {courseCategories.map((category, catIndex) => (
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
