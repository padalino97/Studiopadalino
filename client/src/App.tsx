import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

// Service Pages
import SicurezzaLavoro from "./pages/services/SicurezzaLavoro";
import MedicinaLavoro from "./pages/services/MedicinaLavoro";
import Formazione from "./pages/services/Formazione";
import AutorizzazioniSanitarie from "./pages/services/AutorizzazioniSanitarie";
import QualitaISO from "./pages/services/QualitaISO";
import HACCP from "./pages/services/HACCP";
import PrivacyGDPR from "./pages/services/PrivacyGDPR";
import SicurezzaCantieri from "./pages/services/SicurezzaCantieri";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Service Pages */}
      <Route path="/servizi/sicurezza-lavoro" component={SicurezzaLavoro} />
      <Route path="/servizi/medicina-lavoro" component={MedicinaLavoro} />
      <Route path="/servizi/formazione" component={Formazione} />
      <Route path="/servizi/autorizzazioni-sanitarie" component={AutorizzazioniSanitarie} />
      <Route path="/servizi/qualita-iso" component={QualitaISO} />
      <Route path="/servizi/haccp" component={HACCP} />
      <Route path="/servizi/privacy-gdpr" component={PrivacyGDPR} />
      <Route path="/servizi/sicurezza-cantieri" component={SicurezzaCantieri} />
      
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
