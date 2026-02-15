import { CourseTemplate } from "./CourseTemplate";

export default function PrimoSocorsoOnline() {
  return (
    <CourseTemplate
      title="Primo Soccorso - Modulo Teorico Online"
      subtitle="Formazione teorica su tecniche di primo intervento"
      duration="6 ore"
      type="online"
      description="Modulo teorico sulla gestione del primo soccorso e tecniche di rianimazione. Parte online del corso primo soccorso, da completare con pratica in presenza."
      objectives={[
        "Riconoscere le emergenze mediche",
        "Imparare le tecniche di primo intervento",
        "Conoscere la rianimazione cardiopolmonare",
        "Gestire le emorragie e le fratture",
        "Utilizzare il defibrillatore automatico"
      ]}
      contents={[
        "Riconoscimento delle emergenze mediche",
        "Valutazione dello stato di coscienza",
        "Rianimazione cardiopolmonare (RCP)",
        "Gestione delle emorragie",
        "Fratture e immobilizzazione",
        "Ustioni e avvelenamenti",
        "Uso del defibrillatore automatico (DAE)",
        "Comunicazione con i servizi di emergenza"
      ]}
      requirements={[
        "Accesso a computer e connessione internet",
        "Disponibilità di 6 ore per il corso",
        "Completamento della pratica in presenza (10 ore)"
      ]}
      certification="Attestato teorico, da completare con pratica in presenza per certificazione completa"
    />
  );
}
