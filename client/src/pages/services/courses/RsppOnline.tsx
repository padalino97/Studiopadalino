import { useEffect } from "react";
import CourseOnlineTemplate from "@/components/CourseOnlineTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function RsppOnline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CourseOnlineTemplate
          title="RSPP Datore"
          h1Title="Aggiornamento RSPP Datore Online Catania - Valido Italia"
          duration="8 ore"
          updateFrequency="5 anni"
          description="L'aggiornamento RSPP Datore è obbligatorio per i datori di lavoro che ricoprono il ruolo di Responsabile della Sicurezza. Con il Nuovo Accordo 2025, l'aggiornamento è stato semplificato a sole 8 ore fisse ogni 5 anni, permettendo ai datori di lavoro di completare l'obbligo senza interrompere l'attività aziendale."
          targetAudience="datori di lavoro e RSPP"
          normativeRef="37, comma 6 e 7"
          sanctions={{ min: "3.000", max: "12.000" }}
          advantages={[
            "🖥️ Comodità totale: Segui dal tuo ufficio a Catania",
            "⏰ Risparmio tempo: Zero trasferte, zero giorni persi",
            "💰 Convenienza: Tariffe speciali aziende siciliane",
            "📱 Flessibilità: Interrompi e riprendi quando vuoi",
            "✅ Validità garantita: Conforme Nuovo Accordo 2025",
            "🎯 Supporto locale: Tutor da Catania h9-18",
          ]}
          modulesList={[
            "Normativa aggiornata D.Lgs 81/08 e Nuovo Accordo 2025",
            "Obblighi e responsabilità del Datore di Lavoro",
            "Valutazione dei rischi e DVR",
            "Gestione della sicurezza in azienda",
            "Comunicazione e coinvolgimento dei lavoratori",
            "Verifiche e audit di sicurezza",
            "Casi pratici e applicazioni reali",
            "Test finale di verifica",
          ]}
          nextStartDate="Prossima partenza: 15 Febbraio 2026 (Attivazione in 5 minuti)"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
