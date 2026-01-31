/*
  Design: Authoritative Consulting
  Component: Contact Section
  - Informazioni di contatto
  - CTA WhatsApp prominente
  - Orari e info pratiche
*/

import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/393465835685";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+39 346 583 5685",
    href: "tel:+393465835685",
  },
  {
    icon: Mail,
    label: "Email",
    value: "studiosicurezzapadalino@gmail.com",
    href: "mailto:studiosicurezzapadalino@gmail.com",
  },
  {
    icon: MapPin,
    label: "Sede",
    value: "Via Altarelli 10, San Pietro Clarenza (CT) 95055",
    href: "https://www.google.com/maps/search/?api=1&query=Via+Altarelli+10+San+Pietro+Clarenza+CT+95055",
  },
];

export default function ContactSection() {
  return (
    <section id="contatti" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Contatti</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Parliamo del Tuo Progetto
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Siamo a disposizione per rispondere alle tue domande e fornirti un preventivo 
              personalizzato. Contattaci tramite WhatsApp per una risposta rapida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-gray-900">{item.value}</p>
                  </div>
                </a>
              ))}

              {/* Business Hours */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-primary">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Orari di Apertura</p>
                  <p className="text-sm text-muted-foreground">Lun - Ven: 9:00 - 18:00</p>
                  <p className="text-sm text-muted-foreground">Sab: 9:00 - 13:00</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA Card */}
            <div className="bg-gray-900 p-8 rounded-xl text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-4">
                  Contattaci su WhatsApp
                </h3>

                <p className="text-gray-400 mb-6">
                  Il modo più veloce per ricevere assistenza. Scrivici su WhatsApp e ti risponderemo 
                  il prima possibile con tutte le informazioni di cui hai bisogno.
                </p>

                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full whatsapp-btn gap-2 text-lg py-6">
                    <MessageCircle className="w-5 h-5" />
                    Apri WhatsApp
                  </Button>
                </a>

                <p className="text-sm text-gray-500 mt-4">
                  +39 346 583 5685
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-700">
                  <div className="text-center">
                    <p className="font-display text-xl font-bold text-[#25D366]">24h</p>
                    <p className="text-xs text-gray-500">Risposta Media</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-xl font-bold text-[#25D366]">100%</p>
                    <p className="text-xs text-gray-500">Gratuito</p>
                  </div>
                  <div className="text-center">
                    <p className="font-display text-xl font-bold text-[#25D366]">7/7</p>
                    <p className="text-xs text-gray-500">Disponibilità</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* P.IVA */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-sm text-muted-foreground">
              Studio Sicurezza Padalino | P.IVA IT05843750877 | Via Altarelli 10, San Pietro Clarenza (CT) 95055
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
