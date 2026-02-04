import { Link, useLocation } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumbs() {
  const [location] = useLocation();

  // Generate breadcrumbs based on current location
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Home", href: "/" }];
    
    if (location === "/") return breadcrumbs;

    const segments = location.split("/").filter(Boolean);

    segments.forEach((segment, index) => {
      const href = "/" + segments.slice(0, index + 1).join("/");
      const label = segment
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      // Custom labels for specific routes
      const customLabels: { [key: string]: string } = {
        "servizi": "Servizi",
        "sicurezza-lavoro": "Sicurezza sul Lavoro",
        "medicina-lavoro": "Medicina del Lavoro",
        "formazione": "Formazione",
        "autorizzazioni-sanitarie": "Autorizzazioni Sanitarie",
        "qualita-iso": "Sistemi di Qualità ISO",
        "haccp": "HACCP",
        "privacy-gdpr": "Privacy GDPR",
        "sicurezza-cantieri": "Sicurezza Cantieri",
        "rspp": "Corso RSPP",
        "lavoratori": "Corso Lavoratori",
        "preposti": "Corso Preposti",
        "antincendio": "Corso Antincendio",
        "primo-soccorso": "Primo Soccorso",
        "rls": "Corso RLS",
        "dirigenti": "Corso Dirigenti",
        "blog": "Blog",
        "privacy-policy": "Privacy Policy",
        "cookie-policy": "Cookie Policy",
      };

      breadcrumbs.push({
        label: customLabels[segment] || label,
        href
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-background border-b border-border py-3" aria-label="Breadcrumb">
      <div className="container">
        <ol className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index === 0 ? (
                <Link href={item.href} className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors">
                  <Home className="w-4 h-4" />
                  <span className="hidden sm:inline">Home</span>
                </Link>
              ) : index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium">{item.label}</span>
              ) : (
                <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              )}
              
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
