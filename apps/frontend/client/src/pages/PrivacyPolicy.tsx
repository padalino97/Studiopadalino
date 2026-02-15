import { useEffect } from "react";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Content */}
      <div className="container max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Titolare del Trattamento</h2>
            <p>
              <strong>Studio Sicurezza Padalino</strong><br />
              Dott. Alessandro Giuseppe Padalino<br />
              Via Altarelli 10<br />
              95055 San Pietro Clarenza (CT)<br />
              P.IVA: IT05843750877<br />
              Email: studiosicurezzapadalino@gmail.com<br />
              Telefono: +393465835685
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Tipologie di Dati Raccolti</h2>
            <p>
              Nel corso della navigazione sul nostro sito web, potremmo raccogliere le seguenti categorie di dati personali:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Dati di identificazione (nome, cognome, email, telefono)</li>
              <li>Dati di contatto forniti tramite form</li>
              <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
              <li>Cookie e dati di tracciamento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Base Giuridica del Trattamento</h2>
            <p>
              Il trattamento dei dati personali è effettuato sulla base dei seguenti fondamenti giuridici:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Consenso esplicito dell'interessato (Art. 6, comma 1, lett. a) GDPR)</li>
              <li>Esecuzione di un contratto (Art. 6, comma 1, lett. b) GDPR)</li>
              <li>Adempimento di obblighi legali (Art. 6, comma 1, lett. c) GDPR)</li>
              <li>Interessi legittimi (Art. 6, comma 1, lett. f) GDPR)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Rispondere alle richieste di informazioni e preventivi</li>
              <li>Fornire i servizi di consulenza richiesti</li>
              <li>Comunicazioni commerciali e di marketing (previa autorizzazione)</li>
              <li>Adempimento di obblighi legali e fiscali</li>
              <li>Analisi dell'utilizzo del sito web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Destinatari dei Dati</h2>
            <p>
              I dati personali possono essere comunicati a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornitori di servizi tecnici (hosting, email, analytics)</li>
              <li>Autorità pubbliche quando richiesto dalla legge</li>
              <li>Consulenti e professionisti coinvolti nella fornitura dei servizi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Diritti dell'Interessato</h2>
            <p>
              Secondo il GDPR, hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accedere ai tuoi dati personali</li>
              <li>Rettificare dati inesatti</li>
              <li>Cancellare i dati (diritto all'oblio)</li>
              <li>Limitare il trattamento</li>
              <li>Portabilità dei dati</li>
              <li>Opporsi al trattamento</li>
              <li>Revocare il consenso in qualsiasi momento</li>
            </ul>
            <p className="mt-4">
              Per esercitare questi diritti, contattaci all'indirizzo email: studiosicurezzapadalino@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Periodo di Conservazione</h2>
            <p>
              I dati personali sono conservati per il periodo necessario a soddisfare le finalità per cui sono stati raccolti, 
              e comunque non oltre il periodo richiesto dalla legge applicabile (es. 10 anni per dati fiscali).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Cookie Policy</h2>
            <p>
              Il nostro sito utilizza cookie tecnici e analitici. I cookie tecnici sono necessari per il funzionamento del sito. 
              I cookie analitici vengono utilizzati solo previa acquisizione del tuo consenso esplicito.
            </p>
            <p className="mt-4">
              Puoi gestire le tue preferenze sui cookie attraverso le impostazioni del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Sicurezza dei Dati</h2>
            <p>
              Implementiamo misure di sicurezza tecniche e organizzative appropriate per proteggere i tuoi dati personali 
              da accesso non autorizzato, alterazione, divulgazione o distruzione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Modifiche alla Privacy Policy</h2>
            <p>
              Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento. 
              Le modifiche entreranno in vigore non appena pubblicate sul sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">11. Contatti</h2>
            <p>
              Per domande relative a questa Privacy Policy, contattaci:
            </p>
            <p className="mt-4">
              <strong>Studio Sicurezza Padalino</strong><br />
              Email: studiosicurezzapadalino@gmail.com<br />
              Telefono: +393465835685<br />
              Indirizzo: Via Altarelli 10, 95055 San Pietro Clarenza (CT)
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-8">
            Ultimo aggiornamento: 4 Febbraio 2026
          </p>
        </div>
      </div>
    </div>
  );
}
