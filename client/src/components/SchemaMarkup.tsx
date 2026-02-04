import { useEffect } from "react";

export default function SchemaMarkup() {
  useEffect(() => {
    // LocalBusiness Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://studio-sicurezza-padalino.manus.space",
      "name": "Studio Sicurezza Padalino",
      "description": "Consulenza professionale per sicurezza sul lavoro, medicina del lavoro, autorizzazioni sanitarie e sistemi di gestione qualità",
      "url": "https://studio-sicurezza-padalino.manus.space",
      "telephone": "+393465835685",
      "email": "studiosicurezzapadalino@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Altarelli 10",
        "addressLocality": "San Pietro Clarenza",
        "addressRegion": "CT",
        "postalCode": "95055",
        "addressCountry": "IT"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "37.5833",
        "longitude": "15.1500"
      },
      "areaServed": {
        "@type": "City",
        "name": "Catania",
        "url": "https://en.wikipedia.org/wiki/Catania"
      },
      "priceRange": "€€",
      "image": "https://studio-sicurezza-padalino.manus.space/logo.png",
      "sameAs": [
        "https://www.facebook.com/studiosicurezzapadalino",
        "https://www.linkedin.com/company/studio-sicurezza-padalino"
      ]
    };

    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Studio Sicurezza Padalino",
      "url": "https://studio-sicurezza-padalino.manus.space",
      "logo": "https://studio-sicurezza-padalino.manus.space/logo.png",
      "description": "Studio di consulenza per sicurezza sul lavoro, medicina del lavoro, autorizzazioni sanitarie e sistemi di gestione qualità",
      "founder": {
        "@type": "Person",
        "name": "Dott. Alessandro Giuseppe Padalino"
      },
      "foundingDate": "2009",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "telephone": "+393465835685",
        "email": "studiosicurezzapadalino@gmail.com"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Via Altarelli 10",
        "addressLocality": "San Pietro Clarenza",
        "addressRegion": "CT",
        "postalCode": "95055",
        "addressCountry": "IT"
      }
    };

    // Service Schema - Sicurezza sul Lavoro
    const serviceSicurezzaSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sicurezza sul Lavoro",
      "description": "Consulenza professionale per la sicurezza sul lavoro, valutazione dei rischi, DVR, RSPP esterno",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Studio Sicurezza Padalino",
        "url": "https://studio-sicurezza-padalino.manus.space"
      },
      "areaServed": {
        "@type": "City",
        "name": "Catania"
      },
      "url": "https://studio-sicurezza-padalino.manus.space/servizi/sicurezza-lavoro"
    };

    // Service Schema - Medicina del Lavoro
    const serviceMedicinaSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Medicina del Lavoro",
      "description": "Visite mediche, sorveglianza sanitaria, protocolli sanitari per aziende",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Studio Sicurezza Padalino",
        "url": "https://studio-sicurezza-padalino.manus.space"
      },
      "areaServed": {
        "@type": "City",
        "name": "Catania"
      },
      "url": "https://studio-sicurezza-padalino.manus.space/servizi/medicina-lavoro"
    };

    // Service Schema - Formazione
    const serviceFormazioneSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Corsi di Formazione Sicurezza",
      "description": "Corsi di formazione per RSPP, lavoratori, preposti, antincendio, primo soccorso",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Studio Sicurezza Padalino",
        "url": "https://studio-sicurezza-padalino.manus.space"
      },
      "areaServed": {
        "@type": "City",
        "name": "Catania"
      },
      "url": "https://studio-sicurezza-padalino.manus.space/servizi/formazione"
    };

    // Aggregate Rating Schema
    const aggregateRatingSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Studio Sicurezza Padalino",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Add all schemas to the document
    const schemas = [
      localBusinessSchema,
      organizationSchema,
      serviceSicurezzaSchema,
      serviceMedicinaSchema,
      serviceFormazioneSchema,
      aggregateRatingSchema
    ];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      // Cleanup scripts on unmount
      const scripts = document.querySelectorAll("script[type='application/ld+json']");
      scripts.forEach((script) => {
        if (script.textContent && (
          script.textContent.includes("Studio Sicurezza Padalino") ||
          script.textContent.includes("LocalBusiness") ||
          script.textContent.includes("Organization")
        )) {
          script.remove();
        }
      });
    };
  }, []);

  return null;
}
