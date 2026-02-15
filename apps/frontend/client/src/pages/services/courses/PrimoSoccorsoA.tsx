import { CourseTemplate } from "./CourseTemplate";

export default function PrimoSoccorsoA() {
  return (
    <CourseTemplate
      title="Corso di Primo Soccorso (Aziende Gruppo A)"
      subtitle="Formazione professionale conforme al D.Lgs 81/08"
      duration="16 ore"
      type="presenza"
      location="Catania"
      description="Corso Corso di Primo Soccorso (Aziende Gruppo A). I contenuti dettagliati saranno aggiunti a breve."
      objectives={[
        "Obiettivo 1 - Da definire",
        "Obiettivo 2 - Da definire",
        "Obiettivo 3 - Da definire",
      ]}
      contents={[
        "Argomento 1 - Da definire",
        "Argomento 2 - Da definire",
        "Argomento 3 - Da definire",
      ]}
      requirements={[
        "Requisito 1 - Da definire",
        "Requisito 2 - Da definire",
      ]}
      certification="Attestato di frequenza riconosciuto a livello nazionale"
    />
  );
}
