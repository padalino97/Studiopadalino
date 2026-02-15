import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "all");
    localStorage.setItem("analyticalCookies", "true");
    localStorage.setItem("marketingCookies", "true");
    setShowBanner(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("cookieConsent", "essential");
    localStorage.setItem("analyticalCookies", "false");
    localStorage.setItem("marketingCookies", "false");
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    const analyticalCheckbox = document.getElementById("analytical-cookies") as HTMLInputElement;
    const marketingCheckbox = document.getElementById("marketing-cookies") as HTMLInputElement;
    
    localStorage.setItem("cookieConsent", "selected");
    localStorage.setItem("analyticalCookies", analyticalCheckbox?.checked ? "true" : "false");
    localStorage.setItem("marketingCookies", marketingCheckbox?.checked ? "true" : "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900 border-t border-slate-700 shadow-2xl">
      <div className="container max-w-6xl py-6">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4 flex-1">
              <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-white mb-2">Cookie e Tracciamento</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Utilizziamo cookie tecnici (necessari), analitici e di marketing per migliorare la tua esperienza. 
                  Puoi personalizzare le tue preferenze o accettare tutti i cookie.
                </p>
                <Link href="/cookie-policy" className="text-xs text-primary hover:underline">
                  Leggi la nostra Cookie Policy
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
              >
                Personalizza
              </button>
              <button
                onClick={handleAcceptEssential}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
              >
                Solo Essenziali
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Accetta Tutti
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="flex-shrink-0 p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-white">Personalizza Cookie</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 bg-slate-800 p-4 rounded-lg">
              {/* Necessary Cookies */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="necessary-cookies"
                  checked
                  disabled
                  className="mt-1 w-4 h-4 rounded"
                />
                <div className="flex-1">
                  <label htmlFor="necessary-cookies" className="font-medium text-white cursor-pointer">
                    Cookie Tecnici (Necessari)
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    Essenziali per il funzionamento del sito. Non possono essere disabilitati.
                  </p>
                </div>
              </div>

              {/* Analytical Cookies */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-700">
                <input
                  type="checkbox"
                  id="analytical-cookies"
                  defaultChecked={false}
                  className="mt-1 w-4 h-4 rounded"
                />
                <div className="flex-1">
                  <label htmlFor="analytical-cookies" className="font-medium text-white cursor-pointer">
                    Cookie Analitici
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    Ci aiutano a comprendere come usi il sito e a migliorare l'esperienza.
                  </p>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-start gap-3 pt-3 border-t border-slate-700">
                <input
                  type="checkbox"
                  id="marketing-cookies"
                  defaultChecked={false}
                  className="mt-1 w-4 h-4 rounded"
                />
                <div className="flex-1">
                  <label htmlFor="marketing-cookies" className="font-medium text-white cursor-pointer">
                    Cookie di Marketing
                  </label>
                  <p className="text-xs text-gray-400 mt-1">
                    Utilizzati per mostrarti annunci personalizzati su altri siti.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowDetails(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
              >
                Indietro
              </button>
              <button
                onClick={handleAcceptSelected}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
              >
                Salva Preferenze
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
