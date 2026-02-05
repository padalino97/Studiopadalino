import { useEffect } from "react";
import CoursePresenceTemplate from "@/components/CoursePresenceTemplate";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function AntincendioPresenza() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CoursePresenceTemplate
          title="Antincendio"
          h1Title="Corso Antincendio Catania - Prova Pratica Obbligatoria"
          duration="8 ore (teoria + pratica)"
          updateFrequency="3 anni"
          description="Il corso antincendio è obbligatorio per gli incaricati della prevenzione incendi secondo l'Art. 37 del D.Lgs 81/08 e il D.M. 2 settembre 2021. Include prova pratica obbligatoria con estintori reali che si svolge nel nostro campo prove attrezzato a Catania. Rivolto a responsabili e incaricati della prevenzione incendi nelle aziende catanesi."
          targetAudience="incaricati prevenzione incendi"
          normativeRef="37, comma 8"
          sanctions={{ min: "2.000", max: "8.000" }}
          location="Catania - Zona Industriale Pantano d'Arci"
          equipment={[
            "Estintori polvere ABC",
            "Estintori CO2",
            "Estintori schiuma",
            "Estintori acqua",
            "Idranti e tubazioni",
            "Segnaletica antincendio",
          ]}
          advantages={[
            "🏗️ Pratica con estintori reali: Esperienza concreta",
            "👨‍🏫 Istruttori esperti: Professionisti antincendio qualificati",
            "📍 Sede comoda: Facilmente raggiungibile da Catania",
            "🚗 Parcheggio gratuito: Per tutti i partecipanti",
            "⚡ Attestato immediato: Valido 3 anni",
            "🛡️ Sicurezza garantita: Area controllata e attrezzata",
          ]}
          maxParticipants={20}
          nextDates={[
            "📅 12-13 Marzo 2026 (Mercoledì-Giovedì)",
            "📅 26-27 Marzo 2026 (Mercoledì-Giovedì)",
            "📅 9-10 Aprile 2026 (Mercoledì-Giovedì)",
          ]}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
