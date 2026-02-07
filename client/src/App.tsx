import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieBanner from "./components/CookieBanner";
import SchemaMarkup from "./components/SchemaMarkup";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/Home";

// Service Pages
import SicurezzaLavoro from "./pages/services/SicurezzaLavoro";
import MedicinaLavoro from "./pages/services/MedicinaLavoro";
import Formazione from "./pages/services/Formazione";
import FormazioneNew from "./pages/services/FormazioneNew";
import FormazioneComplete from "./pages/services/FormazioneComplete";
import AutorizzazioniSanitarie from "./pages/services/AutorizzazioniSanitarie";
import QualitaISO from "./pages/services/QualitaISO";
import PrivacyGDPR from "./pages/services/PrivacyGDPR";
import SicurezzaCantieri from "./pages/services/SicurezzaCantieri";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Blog from "./pages/Blog";

// Course Pages
import RSPPCourse from "./pages/services/courses/RSPP";
import LavoratoriCourse from "./pages/services/courses/Lavoratori";
import PrepostiCourse from "./pages/services/courses/Preposti";
import AntincendioCourse from "./pages/services/courses/Antincendio";
import PrimoSoccorsoCourse from "./pages/services/courses/PrimoSoccorso";
import RLSCourse from "./pages/services/courses/RLS";
import DirigentiCourse from "./pages/services/courses/Dirigenti";
import HACCPCoursePage from "./pages/services/courses/HACCP";

// New Online Courses
import RsppOnline from "./pages/services/courses/RsppOnline";
import LavoratoriOnline from "./pages/services/courses/LavoratoriOnline";
import DirigentiOnline from "./pages/services/courses/DirigentiOnline";
import AsppOnline from "./pages/services/courses/AsppOnline";
import RlsOnline from "./pages/services/courses/RlsOnline";
import PrivacyOnline from "./pages/services/courses/PrivacyOnline";
import HACCPOnline from "./pages/services/courses/HACCPOnline";
import DiisocianatiOnline from "./pages/services/courses/DiisocianatiOnline";
import AntincendioOnline from "./pages/services/courses/AntincendioOnline";
import PrimoSocorsoOnline from "./pages/services/courses/PrimoSocorsoOnline";

// New Presence Courses
import PrepostiPresenza from "./pages/services/courses/PrepostiPresenza";
import CarrelliElevatori from "./pages/services/courses/CarrelliElevatori";

// All 44 Course Pages
import PrepostiNew from "@/pages/services/courses/PrepostiNew";
import DatoriLavoroNew from "@/pages/services/courses/DatoriLavoroNew";
import RLSNew from "@/pages/services/courses/RLSNew";
import DatoriLavoro from "./pages/services/courses/DatoriLavoro";
import RLS from "./pages/services/courses/RLS";
import AggiornamentoPreposti from "./pages/services/courses/AggiornamentoPreposti";
import DatoriLavoroCantieri from "./pages/services/courses/DatoriLavoroCantieri";
import AggiornamentoRLSPiccole from "./pages/services/courses/AggiornamentoRLSPiccole";
import DatoriLavoroModuloCantieri from "./pages/services/courses/DatoriLavoroModuloCantieri";
import AggiornamentoRLSGrandi from "./pages/services/courses/AggiornamentoRLSGrandi";
import RSPPModuloComune from "./pages/services/courses/RSPPModuloComune";
import RSPPModuloIntegrativo from "./pages/services/courses/RSPPModuloIntegrativo";
import RSPPModuloCantieri from "./pages/services/courses/RSPPModuloCantieri";
import Dirigenti from "./pages/services/courses/Dirigenti";
import DirigentiCantieri from "./pages/services/courses/DirigentiCantieri";
import DirigentiModuloCantieri from "./pages/services/courses/DirigentiModuloCantieri";
import AggiornamentoDatori from "./pages/services/courses/AggiornamentoDatori";
import AggiornamentoDirigenti from "./pages/services/courses/AggiornamentoDirigenti";
import LavoratoriGenerale from "./pages/services/courses/LavoratoriGenerale";
import LavoratoriRischioBasso from "./pages/services/courses/LavoratoriRischioBasso";
import LavoratoriRischioMedio from "./pages/services/courses/LavoratoriRischioMedio";
import LavoratoriRischioAlto from "./pages/services/courses/LavoratoriRischioAlto";
import LavoratoriSpecificaBasso from "./pages/services/courses/LavoratoriSpecificaBasso";
import LavoratoriFormazioneBasso from "./pages/services/courses/LavoratoriFormazioneBasso";
import LavoratoriSpecificaAlto from "./pages/services/courses/LavoratoriSpecificaAlto";
import AggiornamentoLavoratori from "./pages/services/courses/AggiornamentoLavoratori";
import LavoratoriEnglish from "./pages/services/courses/LavoratoriEnglish";
import PrimoSoccorsoBC from "./pages/services/courses/PrimoSoccorsoBC";
import PrimoSoccorsoA from "./pages/services/courses/PrimoSoccorsoA";
import AggiornamentoPrimoSoccorsoA from "./pages/services/courses/AggiornamentoPrimoSoccorsoA";
import AggiornamentoPrimoSoccorsoBC from "./pages/services/courses/AggiornamentoPrimoSoccorsoBC";
import AntincendioLivello1 from "./pages/services/courses/AntincendioLivello1";
import AntincendioLivello2 from "./pages/services/courses/AntincendioLivello2";
import AggiornamentoAntincendio1 from "./pages/services/courses/AggiornamentoAntincendio1";
import AggiornamentoAntincendio2 from "./pages/services/courses/AggiornamentoAntincendio2";
import BLSDDefibrillatore from "./pages/services/courses/BLSDDefibrillatore";
import PLE from "./pages/services/courses/PLE";
import PonteggiTrabattelli from "./pages/services/courses/PonteggiTrabattelli";
import DPIFuni from "./pages/services/courses/DPIFuni";
import AmbientiConfinati from "./pages/services/courses/AmbientiConfinati";
import PESPAV from "./pages/services/courses/PESPAV";
import GruCarroponte from "./pages/services/courses/GruCarroponte";
import LavoriStradali from "./pages/services/courses/LavoriStradali";
import MovimentoTerra from "./pages/services/courses/MovimentoTerra";
import Trattori from "./pages/services/courses/Trattori";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Service Pages */}
      <Route path="/servizi/sicurezza-lavoro" component={SicurezzaLavoro} />
      <Route path="/servizi/medicina-lavoro" component={MedicinaLavoro} />
      <Route path="/servizi/formazione" component={FormazioneComplete} />
      <Route path="/servizi/autorizzazioni-sanitarie" component={AutorizzazioniSanitarie} />
      <Route path="/servizi/qualita-iso" component={QualitaISO} />
      <Route path="/servizi/haccp" component={HACCPCoursePage} />
      <Route path="/servizi/privacy-gdpr" component={PrivacyGDPR} />
      <Route path="/servizi/sicurezza-cantieri" component={SicurezzaCantieri} />
      
      {/* Course Pages - Old */}
      <Route path="/servizi/formazione/rspp" component={RSPPCourse} />
      <Route path="/servizi/formazione/lavoratori" component={LavoratoriCourse} />
      <Route path="/servizi/formazione/preposti" component={PrepostiNew} />
      <Route path="/servizi/formazione/datori-di-lavoro" component={DatoriLavoroNew} />
      <Route path="/servizi/formazione/rls" component={RLSNew} />
      <Route path="/servizi/formazione/antincendio" component={AntincendioCourse} />
      <Route path="/servizi/formazione/primo-soccorso" component={PrimoSoccorsoCourse} />
      <Route path="/servizi/formazione/dirigenti" component={DirigentiCourse} />
      <Route path="/servizi/formazione/haccp" component={HACCPCoursePage} />
      
      {/* New Online Courses */}
      <Route path="/formazione/rspp-online" component={RsppOnline} />
      <Route path="/formazione/lavoratori-online" component={LavoratoriOnline} />
      <Route path="/formazione/dirigenti-online" component={DirigentiOnline} />
      <Route path="/formazione/aspp-online" component={AsppOnline} />
      <Route path="/formazione/rls-online" component={RlsOnline} />
      <Route path="/formazione/privacy-online" component={PrivacyOnline} />
      <Route path="/formazione/haccp-online" component={HACCPOnline} />
      <Route path="/formazione/diisocianati-online" component={DiisocianatiOnline} />
      <Route path="/formazione/antincendio-online" component={AntincendioOnline} />
      <Route path="/formazione/primo-soccorso-online" component={PrimoSocorsoOnline} />
      
      {/* New Presence Courses */}
      <Route path="/formazione/preposti-presenza" component={PrepostiPresenza} />
      <Route path="/formazione/carrelli-elevatori" component={CarrelliElevatori} />
      
      {/* All 44 Course Routes */}
      <Route path="/formazione/preposti" component={PrepostiNew} />
      <Route path="/formazione/datori-lavoro" component={DatoriLavoro} />
      <Route path="/formazione/rls" component={RLS} />
      <Route path="/formazione/aggiornamento-preposti" component={AggiornamentoPreposti} />
      <Route path="/formazione/datori-lavoro-cantieri" component={DatoriLavoroCantieri} />
      <Route path="/formazione/aggiornamento-rls-piccole" component={AggiornamentoRLSPiccole} />
      <Route path="/formazione/datori-lavoro-modulo-cantieri" component={DatoriLavoroModuloCantieri} />
      <Route path="/formazione/aggiornamento-rls-grandi" component={AggiornamentoRLSGrandi} />
      <Route path="/formazione/rspp-modulo-comune" component={RSPPModuloComune} />
      <Route path="/formazione/rspp-modulo-integrativo" component={RSPPModuloIntegrativo} />
      <Route path="/formazione/rspp-modulo-cantieri" component={RSPPModuloCantieri} />
      <Route path="/formazione/dirigenti" component={Dirigenti} />
      <Route path="/formazione/dirigenti-cantieri" component={DirigentiCantieri} />
      <Route path="/formazione/dirigenti-modulo-cantieri" component={DirigentiModuloCantieri} />
      <Route path="/formazione/aggiornamento-datori" component={AggiornamentoDatori} />
      <Route path="/formazione/aggiornamento-dirigenti" component={AggiornamentoDirigenti} />
      <Route path="/formazione/lavoratori-generale" component={LavoratoriGenerale} />
      <Route path="/formazione/lavoratori-rischio-basso" component={LavoratoriRischioBasso} />
      <Route path="/formazione/lavoratori-rischio-medio" component={LavoratoriRischioMedio} />
      <Route path="/formazione/lavoratori-rischio-alto" component={LavoratoriRischioAlto} />
      <Route path="/formazione/lavoratori-specifica-basso" component={LavoratoriSpecificaBasso} />
      <Route path="/formazione/lavoratori-formazione-basso" component={LavoratoriFormazioneBasso} />
      <Route path="/formazione/lavoratori-specifica-alto" component={LavoratoriSpecificaAlto} />
      <Route path="/formazione/aggiornamento-lavoratori" component={AggiornamentoLavoratori} />
      <Route path="/formazione/lavoratori-english" component={LavoratoriEnglish} />
      <Route path="/formazione/primo-soccorso-bc" component={PrimoSoccorsoBC} />
      <Route path="/formazione/primo-soccorso-a" component={PrimoSoccorsoA} />
      <Route path="/formazione/aggiornamento-primo-soccorso-a" component={AggiornamentoPrimoSoccorsoA} />
      <Route path="/formazione/aggiornamento-primo-soccorso-bc" component={AggiornamentoPrimoSoccorsoBC} />
      <Route path="/formazione/antincendio-livello-1" component={AntincendioLivello1} />
      <Route path="/formazione/antincendio-livello-2" component={AntincendioLivello2} />
      <Route path="/formazione/aggiornamento-antincendio-1" component={AggiornamentoAntincendio1} />
      <Route path="/formazione/aggiornamento-antincendio-2" component={AggiornamentoAntincendio2} />
      <Route path="/formazione/blsd-defibrillatore" component={BLSDDefibrillatore} />
      <Route path="/formazione/ple" component={PLE} />
      <Route path="/formazione/ponteggi-trabattelli" component={PonteggiTrabattelli} />
      <Route path="/formazione/dpi-funi" component={DPIFuni} />
      <Route path="/formazione/ambienti-confinati" component={AmbientiConfinati} />
      <Route path="/formazione/pes-pav" component={PESPAV} />
      <Route path="/formazione/gru-carroponte" component={GruCarroponte} />
      <Route path="/formazione/lavori-stradali" component={LavoriStradali} />
      <Route path="/formazione/movimento-terra" component={MovimentoTerra} />
      <Route path="/formazione/trattori" component={Trattori} />
      
      {/* Blog Pages */}
      <Route path="/blog" component={Blog} />
      
      {/* Legal Pages */}
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      
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
          <SchemaMarkup />
          <Breadcrumbs />
          <Router />
          <CookieBanner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
