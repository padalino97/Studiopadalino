import { useEffect } from "react";
import CoursePresenceTemplate from "@/components/CoursePresenceTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PrepostiPresenza() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CoursePresenceTemplate
          title="Preposti"
          h1Title="Corso Preposti Catania - 12 Ore Nuovo Accordo 2025"
          duration="12 ore (teoria + pratica)"
          updateFrequency="2 anni"
          description="Il corso per preposti è obbligatorio secondo l'Art. 37 del D.Lgs 81/08. Con il Nuovo Accordo 2025 e il D.L. 146/2021, l'aggiornamento è ora OBBLIGATORIO OGNI 2 ANNI (non più 5 anni). Rivolto ai preposti e capi cantiere delle aziende catanesi, il corso fornisce le competenze pratiche per gestire la sicurezza sul campo."
          targetAudience="preposti, capi cantiere e supervisori"
          normativeRef="37, comma 7"
          sanctions={{ min: "2.000", max: "8.000" }}
          location="Catania - Zona Industriale Pantano d'Arci"
          equipment={[
            "Escavatore CAT 320",
            "Carrello Elevatore STILL",
            "Gru FASSI",
            "Ponteggi e trabattelli",
            "Dispositivi di protezione individuale",
          ]}
          advantages={[
            "🏗️ Macchine reali: Escavatori, gru, carrelli operativi",
            "👨‍🏫 Istruttori esperti: Professionisti settore catanese",
            "📍 Sede comoda: Facilmente raggiungibile da Catania",
            "🚗 Parcheggio gratuito: Per tutti i partecipanti",
            "⚡ Patentino immediato: Operativo dal giorno successivo",
            "🛡️ Sicurezza garantita: Area controllata e attrezzata",
          ]}
          maxParticipants={15}
          nextDates={[
            "📅 10-11 Marzo 2026 (Lunedì-Martedì)",
            "📅 24-25 Marzo 2026 (Lunedì-Martedì)",
            "📅 7-8 Aprile 2026 (Lunedì-Martedì)",
          ]}
          urgencyAlert="⚠️ ATTENZIONE: Aggiornamento ora OGNI 2 ANNI - Chi ha fatto l'ultimo aggiornamento nel 2022 deve ripetere nel 2024!"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
