import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Planes from "./pages/Planes"
import Contacto from "./pages/Contacto"
import WhatsAppFloat from "./components/WhatsAppFloat";
import ScrollToTop from "./components/ScrollToTop";
import Legal from "./pages/Legal";
import Terms from "./pages/Terms";

function Router() { 
 return (
    <>

     <ScrollToTop />
      <Switch> 
        <Route path={"/"} component={Home} />
        <Route path={"/servicios"} component={Services} />
        <Route path={"/nosotros"} component={About} />
        <Route path={"/planes"} component={Planes} />
        <Route path={"/contacto"} component={Contacto} />
        <Route path={"/404"} component={NotFound} />
        <Route path={"/legal"} component={Legal} />
        <Route path={"/terms"} component={Terms} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>

      <WhatsAppFloat />
    </> 
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
