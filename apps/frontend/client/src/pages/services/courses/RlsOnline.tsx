import { CourseTemplate } from "./CourseTemplate";

export default function RlsOnline() {
  return (
    <CourseTemplate
      title="Aggiornamento RLS (Rappresentante dei Lavoratori per la Sicurezza)"
      subtitle="Formazione annuale obbligatoria per RLS secondo il D.Lgs 81/08"
      duration="8 ore"
      type="online"
      description="Corso di aggiornamento annuale obbligatorio per i Rappresentanti dei Lavoratori per la Sicurezza (RLS). Conforme al D.Lgs 81/08 e alle linee guida nazionali."
      objectives={[
        "Aggiornare le conoscenze su normativa e diritti dell'RLS",
        "Approfondire la valutazione dei rischi",
        "Migliorare le capacità di rappresentanza e negoziazione",
        "Conoscere i meccanismi di consultazione e partecipazione",
        "Sviluppare competenze di comunicazione con i lavoratori"
      ]}
      contents={[
        "Normativa sulla sicurezza e diritti dell'RLS",
        "Valutazione dei rischi e metodologie di analisi",
        "Consultazione e partecipazione dei lavoratori",
        "Comunicazione e sensibilizzazione",
        "Gestione delle segnalazioni e reclami",
        "Coordinamento con RSPP, ASPP e medico competente",
        "Vigilanza e controlli in azienda",
        "Responsabilità dell'RLS"
      ]}
      requirements={[
        "Essere nominato RLS in azienda",
        "Accesso a computer e connessione internet stabile",
        "Disponibilità di 8 ore per il corso"
      ]}
      certification="Attestato di frequenza e superamento test finale, riconosciuto a livello nazionale"
    />
  );
}
