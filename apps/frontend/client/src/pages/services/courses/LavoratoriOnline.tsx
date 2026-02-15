import { useEffect } from "react";
import CourseOnlineTemplate from "@/components/CourseOnlineTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function LavoratoriOnline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CourseOnlineTemplate
          title="Formazione Lavoratori"
          h1Title="Aggiornamento Formazione Lavoratori Online Catania - Riconosciuto Italia"
          duration="6 ore"
          updateFrequency="5 anni"
          description="L'aggiornamento della formazione generale per i lavoratori è obbligatorio ogni 5 anni secondo l'Art. 37 del D.Lgs 81/08. Rivolto a tutti i dipendenti delle aziende di Catania e provincia, il corso online permette di completare l'obbligo formativo comodamente dal proprio ufficio, con massima flessibilità e senza interruzioni lavorative."
          targetAudience="lavoratori e dipendenti"
          normativeRef="37, comma 1"
          sanctions={{ min: "2.000", max: "8.000" }}
          advantages={[
            "🖥️ Comodità totale: Segui dal tuo ufficio a Catania",
            "⏰ Risparmio tempo: Zero trasferte, zero giorni persi",
            "💰 Convenienza: Tariffe speciali aziende siciliane",
            "📱 Flessibilità: Interrompi e riprendi quando vuoi",
            "✅ Validità garantita: Conforme Nuovo Accordo 2025",
            "🎯 Supporto locale: Tutor da Catania h9-18",
          ]}
          modulesList={[
            "Concetti di pericolo, rischio, danno, prevenzione",
            "Organizzazione della prevenzione in azienda",
            "Diritti, doveri e responsabilità dei lavoratori",
            "Organi di vigilanza, controllo e assistenza",
            "Rischi specifici del settore",
            "Misure di prevenzione e protezione",
            "Dispositivi di protezione individuale",
            "Emergenze e procedure di evacuazione",
          ]}
          nextStartDate="Prossima partenza: 20 Febbraio 2026 (Attivazione in 5 minuti)"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
