import { CourseTemplate } from "./CourseTemplate";

export default function Preposti() {
  return (
    <CourseTemplate
      title="Corso per Preposti"
      subtitle="Formazione professionale conforme al D.Lgs 81/08"
      duration="12 ore"
      type="presenza"
      location="Catania"
      description="Corso Corso per Preposti. I contenuti dettagliati saranno aggiunti a breve."
      targetAudience="Preposti, capi squadra, responsabili di cantiere e supervisori che necessitano di formazione sulla gestione della sicurezza e applicazione delle normative D.Lgs 81/08."
      objectives={[
        "Acquisire competenze sulla gestione della sicurezza",
        "Identificazione e valutazione dei rischi",
        "Comunicazione efficace con i lavoratori",
        "Applicazione delle normative D.Lgs 81/08",
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
