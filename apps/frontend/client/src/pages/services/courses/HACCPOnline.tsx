import { CourseTemplate } from "./CourseTemplate";

export default function HACCPOnline() {
  return (
    <CourseTemplate
      title="HACCP per Alimentaristi"
      subtitle="Formazione sulla sicurezza alimentare e sistema HACCP"
      duration="3 ore"
      type="online"
      description="Corso sulla sicurezza alimentare e sistema HACCP per tutti i manipolatori di alimenti. Conforme alla normativa europea e italiana sulla sicurezza alimentare."
      objectives={[
        "Comprendere i principi del sistema HACCP",
        "Conoscere i pericoli biologici, chimici e fisici",
        "Imparare a identificare i punti critici di controllo",
        "Gestire correttamente la tracciabilità",
        "Prevenire la contaminazione degli alimenti"
      ]}
      contents={[
        "Introduzione alla sicurezza alimentare",
        "Principi del sistema HACCP",
        "Pericoli biologici, chimici e fisici",
        "Punti critici di controllo (CCP)",
        "Igiene personale e pulizia",
        "Tracciabilità e rintracciabilità",
        "Gestione degli allergeni",
        "Controlli e documentazione"
      ]}
      requirements={[
        "Lavorare nel settore alimentare",
        "Accesso a computer e connessione internet",
        "Disponibilità di 3 ore per il corso"
      ]}
      certification="Attestato di frequenza, riconosciuto per la conformità normativa alimentare"
    />
  );
}
