import { CourseTemplate } from "./CourseTemplate";

export default function DiisocianatiOnline() {
  return (
    <CourseTemplate
      title="Diisocianati (NCO) - Patentino Chimici Pericolosi"
      subtitle="Formazione obbligatoria per l'utilizzo di sostanze chimiche pericolose"
      duration="3 ore"
      type="online"
      description="Corso sulla sicurezza nell'utilizzo di diisocianati e altre sostanze chimiche pericolose. Conforme al D.Lgs 81/08 e alle linee guida ECHA."
      objectives={[
        "Comprendere i pericoli dei diisocianati",
        "Conoscere le modalità di esposizione",
        "Imparare le misure di prevenzione",
        "Utilizzare correttamente i DPI",
        "Gestire le emergenze e i rifiuti"
      ]}
      contents={[
        "Caratteristiche dei diisocianati",
        "Pericoli per la salute e l'ambiente",
        "Vie di esposizione e sintomi",
        "Misure di prevenzione e protezione",
        "Dispositivi di protezione individuale (DPI)",
        "Etichettatura e schede di sicurezza",
        "Gestione dei rifiuti chimici",
        "Procedure di emergenza"
      ]}
      requirements={[
        "Lavorare con sostanze chimiche pericolose",
        "Accesso a computer e connessione internet",
        "Disponibilità di 3 ore per il corso"
      ]}
      certification="Patentino per l'utilizzo di sostanze chimiche pericolose, riconosciuto a livello nazionale"
    />
  );
}
