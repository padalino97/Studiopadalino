import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, AlertCircle, MessageCircle, Users } from "lucide-react";

export default function PrepostiStradaliNew() {
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
              <span className="text-foreground font-medium">Preposti Stradali</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  LEADERSHIP
                </div>
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Preposti Stradali" className="w-full h-auto rounded-lg shadow-lg" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso Preposti Stradali</h1>
                <p className="text-lg text-muted-foreground mb-6">Durata <strong>16 ore</strong> (8 teoriche + 8 pratiche)</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">16 ore totali</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-indigo-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Preposti e responsabili di lavori stradali</p>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Preposti%20Stradali" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">
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
                <p className="text-lg text-muted-foreground leading-relaxed">Formazione specifica per preposti e responsabili di lavori stradali. I preposti stradali hanno responsabilità di coordinamento e supervisione della sicurezza nei cantieri stradali e devono possedere competenze tecniche e gestionali specifiche.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">Preposti, responsabili di cantiere e supervisori che coordinano lavori stradali e devono garantire la sicurezza dei lavoratori e degli utenti della strada.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <div className="mb-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">MODULO TEORICO (8 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Normativa sulla sicurezza nei lavori stradali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Responsabilità del preposto e coordinamento</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gestione dei rischi e della circolazione stradale</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-indigo-900 mb-4">MODULO PRATICO (8 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esercitazioni di coordinamento e supervisione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gestione delle emergenze e primo soccorso</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Comunicazione e leadership in cantiere</span>
                    </div>
                  </div>
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

        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Preposti%20Stradali" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
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
