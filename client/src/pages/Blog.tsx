import { useEffect } from "react";
import { Link } from "wouter";
import { Calendar, User, ArrowRight, Search } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "dvr-2024-obblighi-sanzioni",
    title: "DVR 2024: Obblighi e Sanzioni per Aziende a Catania",
    excerpt: "Guida completa agli obblighi del Documento di Valutazione dei Rischi 2024. Scopri le sanzioni previste e come mettersi in regola.",
    date: "15 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "Sicurezza sul Lavoro",
    image: "/images/dvr-2024.jpg",
    readTime: "8 min"
  },
  {
    id: 2,
    slug: "certificazione-iso-9001-catania",
    title: "Come Ottenere la Certificazione ISO 9001 a Catania: Guida Completa",
    excerpt: "Scopri i passi per ottenere la certificazione ISO 9001 per la gestione della qualità. Tempi, costi e benefici per la tua azienda.",
    date: "12 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "Sistemi di Qualità",
    image: "/images/iso-9001.jpg",
    readTime: "10 min"
  },
  {
    id: 3,
    slug: "corsi-sicurezza-obbligatori-2024",
    title: "Corsi Sicurezza Obbligatori 2024: Cosa Devono Sapere le Aziende Catanesi",
    excerpt: "Elenco completo dei corsi di formazione obbligatori per la sicurezza sul lavoro nel 2024. RSPP, lavoratori, preposti e dirigenti.",
    date: "10 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "Formazione",
    image: "/images/corsi-sicurezza.jpg",
    readTime: "7 min"
  },
  {
    id: 4,
    slug: "medicina-lavoro-visite-obbligatorie",
    title: "Medicina del Lavoro: Visite Obbligatorie e Protocolli Sanitari",
    excerpt: "Quando sono obbligatorie le visite mediche? Quali sono i protocolli sanitari? Guida completa alla sorveglianza sanitaria.",
    date: "8 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "Medicina del Lavoro",
    image: "/images/medicina-lavoro.jpg",
    readTime: "9 min"
  },
  {
    id: 5,
    slug: "rspp-esterno-responsabilita",
    title: "RSPP Esterno: Responsabilità, Obblighi e Costi",
    excerpt: "Guida completa al Responsabile del Servizio di Prevenzione e Protezione esterno. Quali sono le sue responsabilità e come scegliere il migliore.",
    date: "5 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "Sicurezza sul Lavoro",
    image: "/images/rspp.jpg",
    readTime: "11 min"
  },
  {
    id: 6,
    slug: "haccp-ristorazione-catania",
    title: "HACCP per la Ristorazione a Catania: Guida Pratica",
    excerpt: "Come implementare il sistema HACCP nella tua attività di ristorazione. Requisiti, controlli e documentazione necessaria.",
    date: "2 Gennaio 2024",
    author: "Dott. Alessandro Padalino",
    category: "HACCP",
    image: "/images/haccp.jpg",
    readTime: "8 min"
  }
];

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20" />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 py-16 border-b border-border">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Blog Sicurezza e Qualità
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Articoli, guide e approfondimenti su sicurezza sul lavoro, medicina del lavoro, 
            sistemi di qualità e formazione professionale.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Cerca articoli..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-bold text-lg mb-4 text-foreground">Categorie</h3>
              <ul className="space-y-2">
                <li>
                  <button className="text-primary hover:underline font-medium">
                    Tutti ({blogPosts.length})
                  </button>
                </li>
                {categories.map((category: string) => (
                  <li key={category}>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      {category} ({blogPosts.filter(p => p.category === category).length})
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Box */}
            <div className="mt-8 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-lg p-6 border border-primary/30">
              <h3 className="font-bold text-foreground mb-2">Hai Domande?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Contattaci direttamente per una consulenza personalizzata.
              </p>
              <a
                href="https://wa.me/393465835685"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors w-full justify-center"
              >
                <span>Contattaci</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-48 h-48 md:h-auto bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-blue-500/30 transition-colors">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{post.category}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                        >
                          Leggi
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
                ← Precedente
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-white font-medium">
                1
              </button>
              <button className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-card transition-colors">
                Successivo →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
