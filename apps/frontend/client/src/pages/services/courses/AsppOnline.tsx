import { CourseTemplate } from "./CourseTemplate";

export default function AsppOnline() {
  return (
    <CourseTemplate
      title="Aggiornamento ASPP (Addetto Servizio Prevenzione e Protezione)"
      subtitle="Formazione quinquennale per ASPP secondo il Nuovo Accordo Stato-Regioni 2025"
      duration="40 ore"
      type="online"
      description="Corso di aggiornamento obbligatorio per gli Addetti del Servizio di Prevenzione e Protezione (ASPP). Conforme al Nuovo Accordo Stato-Regioni 2025 e al D.Lgs 81/08."
      objectives={[
        "Aggiornare le conoscenze su normativa e obblighi ASPP",
        "Approfondire la valutazione dei rischi aziendali",
        "Migliorare le competenze di comunicazione e gestione emergenze",
        "Conoscere le novità del Nuovo Accordo 2025",
        "Sviluppare capacità di coordinamento con il RSPP"
      ]}
      contents={[
        "Novità normative e Nuovo Accordo Stato-Regioni 2025",
        "Valutazione dei rischi e metodologie di analisi",
        "Gestione della documentazione di sicurezza",
        "Comunicazione e sensibilizzazione dei lavoratori",
        "Gestione delle emergenze e piani di evacuazione",
        "Coordinamento con il RSPP e il medico competente",
        "Vigilanza e controlli in azienda",
        "Responsabilità civili e penali dell'ASPP"
      ]}
      requirements={[
        "Essere nominato ASPP in azienda",
        "Possedere formazione base ASPP (40 ore)",
        "Accesso a computer e connessione internet stabile",
        "Disponibilità di 40 ore per il corso"
      ]}
      certification="Attestato di frequenza e superamento test finale, riconosciuto a livello nazionale"
    />
  );
}
