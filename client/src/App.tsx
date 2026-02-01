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

// Course Pages
import RSPPCourse from "./pages/services/courses/RSPP";
import LavoratoriCourse from "./pages/services/courses/Lavoratori";
import PrepostiCourse from "./pages/services/courses/Preposti";
import AntincendioCourse from "./pages/services/courses/Antincendio";
import PrimoSoccorsoCourse from "./pages/services/courses/PrimoSoccorso";
import RLSCourse from "./pages/services/courses/RLS";
import DirigentiCourse from "./pages/services/courses/Dirigenti";
import HACCPCoursePage from "./pages/services/courses/HACCP";

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
      
      {/* Course Pages */}
      <Route path="/servizi/formazione/rspp" component={RSPPCourse} />
      <Route path="/servizi/formazione/lavoratori" component={LavoratoriCourse} />
      <Route path="/servizi/formazione/preposti" component={PrepostiCourse} />
      <Route path="/servizi/formazione/antincendio" component={AntincendioCourse} />
      <Route path="/servizi/formazione/primo-soccorso" component={PrimoSoccorsoCourse} />
      <Route path="/servizi/formazione/rls" component={RLSCourse} />
      <Route path="/servizi/formazione/dirigenti" component={DirigentiCourse} />
      <Route path="/servizi/formazione/haccp" component={HACCPCoursePage} />
      
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
