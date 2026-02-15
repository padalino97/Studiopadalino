import { CourseTemplate } from "./CourseTemplate";

export default function LavoratoriFormazioneBasso() {
  return (
    <CourseTemplate
      title="Corso per Lavoratori Formazione Specifica Rischio Basso"
      subtitle="Formazione professionale conforme al D.Lgs 81/08"
      duration="8 ore"
      type="presenza"
      location="Catania"
      description="Corso Corso per Lavoratori Formazione Specifica Rischio Basso. I contenuti dettagliati saranno aggiunti a breve."
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
