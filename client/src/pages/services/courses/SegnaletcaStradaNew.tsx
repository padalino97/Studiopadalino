import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Clock, AlertCircle, MessageCircle, Users } from "lucide-react";

export default function SegnaletcaStradaNew() {
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
              <span className="text-foreground font-medium">Segnaletica Stradale</span>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white border-b border-gray-200">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-yellow-600 text-white px-4 py-2 rounded-full font-bold text-sm z-10 transform -rotate-12">
                  LAVORI STRADALI
                </div>
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Segnaletica Stradale" className="w-full h-auto rounded-lg shadow-lg" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-foreground mb-4">Corso Addetto Segnaletica Stradale</h1>
                <p className="text-lg text-muted-foreground mb-6">Durata <strong>8 ore</strong> (4 teoriche + 4 pratiche)</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 bg-yellow-50 p-4 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Durata</p>
                      <p className="text-sm text-muted-foreground">8 ore totali</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
                    <Users className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Target</p>
                      <p className="text-sm text-muted-foreground">Addetti alla segnaletica stradale</p>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Segnaletica%20Stradale" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-bold transition-colors">
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
                <p className="text-lg text-muted-foreground leading-relaxed">Formazione specifica per addetti alla segnaletica stradale nei cantieri e nei lavori stradali. La corretta gestione della segnaletica è fondamentale per la sicurezza di lavoratori e utenti della strada.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-yellow-900 mb-6">A Chi È Rivolto</h2>
                <p className="text-lg text-gray-700 leading-relaxed">Addetti alla segnaletica stradale in cantieri, lavori stradali e situazioni che richiedono la gestione della circolazione stradale.</p>
              </div>

              <div className="mb-12 pb-12 border-b border-gray-200">
                <h2 className="text-3xl font-bold text-foreground mb-6">Programma</h2>
                <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-yellow-900 mb-4">MODULO TEORICO (4 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Normativa sulla segnaletica stradale</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Segnali e loro corretta applicazione</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rischi e misure di prevenzione</span>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">MODULO PRATICO (4 ORE)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Esercitazioni pratiche di posizionamento segnali</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gestione della circolazione stradale</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Procedure di sicurezza e primo soccorso</span>
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

        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-600 to-amber-600">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto a iscriverti?</h2>
              <a href="https://wa.me/393465835685?text=Sono%20interessato%20al%20Corso%20Segnaletica%20Stradale" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-yellow-600 px-8 py-4 rounded-lg font-bold hover:bg-yellow-50 transition-colors">
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
