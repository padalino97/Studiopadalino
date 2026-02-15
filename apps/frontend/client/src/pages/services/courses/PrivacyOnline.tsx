import { CourseTemplate } from "./CourseTemplate";

export default function PrivacyOnline() {
  return (
    <CourseTemplate
      title="Privacy e GDPR - Formazione Obbligatoria"
      subtitle="Corso sulla protezione dei dati personali secondo il Regolamento UE 2016/679"
      duration="1 ora"
      type="online"
      description="Formazione obbligatoria sulla protezione dei dati personali e conformità al GDPR. Corso rapido e efficace per tutti i dipendenti che trattano dati personali."
      objectives={[
        "Comprendere i principi fondamentali del GDPR",
        "Conoscere i diritti degli interessati",
        "Imparare a gestire i dati personali correttamente",
        "Identificare i rischi di violazione della privacy",
        "Conoscere le sanzioni e le responsabilità"
      ]}
      contents={[
        "Introduzione al GDPR e normativa sulla privacy",
        "Principi fondamentali della protezione dei dati",
        "Diritti degli interessati (accesso, rettifica, cancellazione)",
        "Obblighi del titolare del trattamento",
        "Gestione sicura dei dati personali",
        "Violazioni di dati e notifiche",
        "Sanzioni amministrative e responsabilità",
        "Best practice in azienda"
      ]}
      requirements={[
        "Accesso a computer e connessione internet",
        "Disponibilità di 1 ora per il corso",
        "Nessuna conoscenza preliminare richiesta"
      ]}
      certification="Attestato di frequenza, riconosciuto per la conformità GDPR"
    />
  );
}
