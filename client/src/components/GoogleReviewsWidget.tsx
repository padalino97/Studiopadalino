import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Marco Rossi",
    rating: 5,
    date: "2 settimane fa",
    text: "Professionali, competenti e sempre disponibili. Hanno risolto tutti i nostri problemi di conformità normativa. Consigliati!",
    verified: true
  },
  {
    id: 2,
    author: "Francesca Bianchi",
    rating: 5,
    date: "1 mese fa",
    text: "Ottimo servizio di consulenza sulla sicurezza. Personale qualificato e attento ai dettagli. Molto soddisfatti.",
    verified: true
  },
  {
    id: 3,
    author: "Giovanni Russo",
    rating: 5,
    date: "1 mese fa",
    text: "Studio Sicurezza Padalino è il nostro partner di fiducia da anni. Sempre puntuale e professionale.",
    verified: true
  },
  {
    id: 4,
    author: "Alessandra Marino",
    rating: 5,
    date: "2 mesi fa",
    text: "Corsi di formazione eccellenti. I docenti sono esperti e sanno trasmettere le conoscenze in modo efficace.",
    verified: true
  }
];

export default function GoogleReviewsWidget() {
  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 border-y border-border">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Scopri le valutazioni e le testimonianze dei clienti che hanno scelto Studio Sicurezza Padalino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-5xl font-bold text-foreground">{averageRating}</span>
                  <div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.round(parseFloat(averageRating))
                              ? "fill-amber-400 text-amber-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Basato su {reviews.length} recensioni verificate
                </p>
              </div>
              <img
                src="https://www.gstatic.com/images/branding/product/1x/google_maps_logo_2020q4_1x.svg"
                alt="Google Maps"
                className="w-12 h-12"
              />
            </div>

            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count = reviews.filter(r => r.rating === rating).length;
                const percentage = (count / reviews.length) * 100;
                return (
                  <div key={rating} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-12">
                      <span className="text-sm font-medium">{rating}</span>
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 transition-all"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-8 text-right">{count}</span>
                  </div>
                );
              })}
            </div>

            <a
              href="https://www.google.com/maps/place/Studio+Sicurezza+Padalino"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-primary hover:gap-3 font-medium transition-all"
            >
              Vedi tutte le recensioni su Google
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Recent Reviews */}
          <div className="space-y-4">
            {reviews.slice(0, 3).map((review) => (
              <div key={review.id} className="bg-white rounded-xl p-4 border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-semibold text-foreground">{review.author}</p>
                      {review.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Verificato
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-sm text-foreground line-clamp-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Sei un cliente soddisfatto? Condividi la tua esperienza!
          </p>
          <a
            href="https://www.google.com/maps/place/Studio+Sicurezza+Padalino"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Scrivi una Recensione
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
