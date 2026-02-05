import { useEffect } from "react";
import CoursePresenceTemplate from "@/components/CoursePresenceTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function CarrelliElevatori() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CoursePresenceTemplate
          title="Carrelli Elevatori"
          h1Title="Corso Carrelli Elevatori Catania - Campo Prove Attrezzato"
          duration="4 ore (teoria + pratica)"
          updateFrequency="5 anni"
          description="Il corso per operatori di carrelli elevatori è obbligatorio secondo l'Art. 73 del D.Lgs 81/08. Include prova pratica obbligatoria che si svolge nel nostro campo prove attrezzato a Catania con carrelli reali. Rivolto a operatori e aziende catanesi, garantisce abilitazione immediata all'utilizzo di carrelli elevatori in sicurezza."
          targetAudience="operatori di carrelli elevatori"
          normativeRef="73"
          sanctions={{ min: "1.500", max: "6.000" }}
          location="Catania - Zona Industriale Pantano d'Arci"
          equipment={[
            "Carrello Elevatore STILL 3 tonnellate",
            "Carrello Elevatore TOYOTA 2.5 tonnellate",
            "Carrello Elevatore HYSTER 5 tonnellate",
            "Attrezzature di carico e scarico",
            "Ostacoli e percorsi di prova",
          ]}
          advantages={[
            "🏗️ Macchine reali: Carrelli di diverse tonnellate",
            "👨‍🏫 Istruttori esperti: Professionisti settore catanese",
            "📍 Sede comoda: Facilmente raggiungibile da Catania",
            "🚗 Parcheggio gratuito: Per tutti i partecipanti",
            "⚡ Patentino immediato: Operativo dal giorno successivo",
            "🛡️ Ripetizione gratuita: Se non superi al primo tentativo",
          ]}
          maxParticipants={12}
          nextDates={[
            "📅 3 Marzo 2026 (Lunedì)",
            "📅 17 Marzo 2026 (Lunedì)",
            "📅 31 Marzo 2026 (Lunedì)",
            "📅 14 Aprile 2026 (Lunedì)",
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
