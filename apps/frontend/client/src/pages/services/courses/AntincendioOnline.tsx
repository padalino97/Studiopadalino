import { CourseTemplate } from "./CourseTemplate";

export default function AntincendioOnline() {
  return (
    <CourseTemplate
      title="Antincendio - Modulo Teorico Online"
      subtitle="Formazione teorica sulla prevenzione e gestione incendi"
      duration="4 ore"
      type="online"
      description="Modulo teorico sulla prevenzione incendi e gestione delle emergenze. Parte online del corso antincendio, da completare con pratica in presenza."
      objectives={[
        "Comprendere i principi della combustione",
        "Conoscere i sistemi di prevenzione incendi",
        "Imparare le procedure di evacuazione",
        "Utilizzare correttamente i sistemi di spegnimento",
        "Gestire le emergenze incendio"
      ]}
      contents={[
        "Principi della combustione e del fuoco",
        "Classificazione degli incendi",
        "Sistemi di prevenzione incendi",
        "Vie di esodo e piani di evacuazione",
        "Segnaletica di sicurezza",
        "Sistemi di spegnimento (estintori, idranti, sprinkler)",
        "Procedure di emergenza",
        "Ruoli e responsabilità"
      ]}
      requirements={[
        "Accesso a computer e connessione internet",
        "Disponibilità di 4 ore per il corso",
        "Completamento della pratica in presenza (8 ore)"
      ]}
      certification="Attestato teorico, da completare con pratica in presenza per certificazione completa"
    />
  );
}
