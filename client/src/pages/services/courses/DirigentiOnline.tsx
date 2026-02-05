import { useEffect } from "react";
import CourseOnlineTemplate from "@/components/CourseOnlineTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function DirigentiOnline() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CourseOnlineTemplate
          title="Dirigenti"
          h1Title="Aggiornamento Dirigenti Online Catania - Valido Italia"
          duration="6 ore"
          updateFrequency="5 anni"
          description="L'aggiornamento per i dirigenti è obbligatorio ogni 5 anni secondo l'Art. 37 del D.Lgs 81/08. Rivolto ai dirigenti e quadri delle aziende di Catania e provincia, il corso online fornisce le competenze necessarie per gestire la sicurezza sul lavoro in modo efficace. Con il Nuovo Accordo 2025, il corso può essere completato interamente online con massima flessibilità."
          targetAudience="dirigenti e quadri"
          normativeRef="37, comma 4"
          sanctions={{ min: "2.500", max: "10.000" }}
          advantages={[
            "🖥️ Comodità totale: Segui dal tuo ufficio a Catania",
            "⏰ Risparmio tempo: Zero trasferte, zero giorni persi",
            "💰 Convenienza: Tariffe speciali aziende siciliane",
            "📱 Flessibilità: Interrompi e riprendi quando vuoi",
            "✅ Validità garantita: Conforme Nuovo Accordo 2025",
            "🎯 Supporto locale: Tutor da Catania h9-18",
          ]}
          modulesList={[
            "Normativa sulla sicurezza e responsabilità dei dirigenti",
            "Valutazione dei rischi e gestione della sicurezza",
            "Organizzazione della prevenzione in azienda",
            "Ruolo dei dirigenti nella gestione della sicurezza",
            "Comunicazione e coinvolgimento dei lavoratori",
            "Audit e verifiche di conformità",
            "Gestione delle emergenze e crisi",
            "Casi pratici e best practices",
          ]}
          nextStartDate="Prossima partenza: 25 Febbraio 2026 (Attivazione in 5 minuti)"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
