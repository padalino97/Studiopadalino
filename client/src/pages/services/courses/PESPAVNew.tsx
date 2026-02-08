import { ChevronRight, Clock, CheckCircle, AlertCircle, RotateCcw } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PESPAVNew() {
  const whatsappPhone = "346583585";
  const whatsappMessage = encodeURIComponent(
    "Ciao! Sono interessato al corso: Corso PES/PAV"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Breadcrumb */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link href="/servizi" className="hover:text-blue-400 transition-colors">
              Servizi
            </Link>
            <ChevronRight size={16} />
            <Link href="/servizi/formazione" className="hover:text-blue-400 transition-colors">
              Formazione
            </Link>
            <ChevronRight size={16} />
            <span className="text-slate-300">Corso PES/PAV</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm mb-4">
              Macchine e Attrezzature
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Corso PES/PAV
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Contenuti in fase di completamento. Contattaci per maggiori informazioni.
            </p>
            <a
              href={"https://wa.me/" + whatsappPhone + "?text=" + whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contattaci su WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center">
          <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Pagina in Costruzione</h2>
          <p className="text-slate-400 mb-6">
            I dettagli del corso verranno aggiunti a breve. Contattaci per ricevere informazioni complete.
          </p>
          <a
            href={"https://wa.me/" + whatsappPhone + "?text=" + whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Richiedi Informazioni
          </a>
        </div>
      </div>
    </div>
  );
}
