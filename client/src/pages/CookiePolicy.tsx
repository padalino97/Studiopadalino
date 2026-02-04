import { useEffect } from "react";

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Content */}
      <div className="container max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>

        <div className="prose prose-invert max-w-none text-foreground space-y-6">
          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Cosa sono i Cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti il nostro sito web. 
              Vengono utilizzati per migliorare l'esperienza di navigazione, ricordare le tue preferenze e analizzare il traffico del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Tipologie di Cookie Utilizzati</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Cookie Tecnici (Necessari)</h3>
            <p>
              Questi cookie sono essenziali per il funzionamento del sito web. Permettono di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Mantenere la sessione di navigazione</li>
              <li>Ricordare le tue scelte (es. lingua, tema)</li>
              <li>Garantire la sicurezza del sito</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Durata:</strong> Sessione o fino a 12 mesi
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Cookie Analitici</h3>
            <p>
              Questi cookie raccolgono informazioni anonime su come i visitatori utilizzano il sito. 
              Utilizziamo Google Analytics per:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Analizzare il traffico del sito</li>
              <li>Comprendere il comportamento dei visitatori</li>
              <li>Migliorare il contenuto e l'esperienza utente</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Durata:</strong> Fino a 24 mesi
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Cookie di Marketing</h3>
            <p>
              Questi cookie vengono utilizzati per tracciare i visitatori su più siti web 
              e visualizzare annunci pubblicitari rilevanti. Vengono utilizzati solo previa acquisizione del tuo consenso esplicito.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <strong>Durata:</strong> Fino a 24 mesi
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Come Gestire i Cookie</h2>
            <p>
              Puoi controllare e cancellare i cookie attraverso le impostazioni del tuo browser. 
              Ecco come fare su i browser più comuni:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
              <li><strong>Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti</li>
              <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati dei siti web</li>
              <li><strong>Edge:</strong> Impostazioni → Privacy, ricerca e servizi → Cancella dati di navigazione</li>
            </ul>
            <p className="mt-4">
              <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere il funzionamento del sito.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Cookie di Terze Parti</h2>
            <p>
              Il nostro sito potrebbe contenere cookie di terze parti (es. Google Analytics, social media). 
              Per informazioni su come queste aziende utilizzano i cookie, consulta le loro politiche sulla privacy:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline">Google Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/policies/cookies/" className="text-blue-500 hover:underline">Facebook Cookie Policy</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Consenso ai Cookie</h2>
            <p>
              Quando visiti il nostro sito per la prima volta, ti chiediamo di acconsentire all'utilizzo dei cookie. 
              Puoi:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Accettare tutti i cookie</li>
              <li>Rifiutare i cookie non essenziali</li>
              <li>Personalizzare le tue preferenze</li>
            </ul>
            <p className="mt-4">
              Puoi modificare le tue preferenze in qualsiasi momento attraverso le impostazioni del tuo browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Diritti dell'Utente</h2>
            <p>
              Secondo il GDPR e le normative sulla privacy, hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Essere informato sull'utilizzo dei cookie</li>
              <li>Dare o rifiutare il consenso</li>
              <li>Revocare il consenso in qualsiasi momento</li>
              <li>Accedere ai dati raccolti tramite cookie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-8 mb-4">Contatti</h2>
            <p>
              Per domande relative a questa Cookie Policy, contattaci:
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
