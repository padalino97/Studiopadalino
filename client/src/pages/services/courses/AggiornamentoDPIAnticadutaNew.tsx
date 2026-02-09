import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, AlertCircle, MessageCircle, RefreshCw, Users } from "lucide-react";

export default function AggiornamentoDPIAnticadutaNew() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-50 border-b border-gray-200 py-4">
          <div className="container">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-foreground">Home</a>
              <span>/</span>
              <a href="/servizi/formazione" className="hover:text-foreground">Formazione</a>
              <span>/</span>
              <span className="text-foreground font-medium">Aggiornamento DPI Anticaduta</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  AGGIORNAMENTO
                </div>
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Aggiornamento DPI" className="w-full h-auto rounded-lg shadow-lg" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Aggiornamento DPI Anticaduta</h1>
                <p className="text-lg text-muted-foreground mb-6">Durata <strong>4 ore</strong></p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-orange-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">4 ore totali</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Operatori con certificazione DPI scaduta</p>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20DPI%20Anticaduta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  Contattaci su WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container">
            <div className="max-w-4xl">
              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Descrizione</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">Aggiornamento periodico per addetti che svolgono lavori in quota con DPI anticaduta. Mantiene le competenze tecniche e la consapevolezza dei rischi.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200 bg-orange-50 border-l-4 border-orange-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-orange-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">Addetti che svolgono lavori in quota con certificazione DPI anticaduta in scadenza.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Riferimenti Legislativi</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• D.Lgs. 81/08 art. 77</li>
                    <li>• D.Lgs. 81/08 art. 107</li>
                    <li>• D.Lgs. 81/08 art. 115</li>
                  </ul>
                </div>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Sanzioni</h2>
                <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
                  <p className="text-lg text-gray-700 leading-relaxed">Arresto da 3 a 6 mesi o ammenda da 2.500 a 6.400 euro.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a rinnovare?</h2>
              <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Aggiornamento%20DPI%20Anticaduta" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors">
                <MessageCircle className="w-5 h-5" />
                Contattaci su WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
