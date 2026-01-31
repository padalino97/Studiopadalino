/*
  Design: Authoritative Consulting - Enhanced
  Component: WhatsApp Floating Button
  - Design moderno con gradiente
  - Animazioni elaborate
  - Tooltip migliorato
*/

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/393465835685";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
      
      {/* Button */}
      <motion.div 
        className="relative w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        
        {/* Pulse rings */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-30" />
        <span className="absolute inset-[-4px] rounded-full border border-[#25D366]/50 animate-pulse" />
      </motion.div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-2.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none text-sm font-medium shadow-xl transform group-hover:translate-x-0 translate-x-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Scrivici su WhatsApp
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-3 h-3 bg-slate-800" />
      </div>

      {/* Badge */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-xs font-bold">1</span>
      </div>
    </motion.a>
  );
}
