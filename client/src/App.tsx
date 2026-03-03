import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Launch from "./pages/Launch";
import LaunchConfirmation from "./pages/LaunchConfirmation";
import LaunchWelcome from "./pages/LaunchWelcome";
import Day1 from "./pages/Day1";
import Day2 from "./pages/Day2";
import Day3 from "./pages/Day3";
import Day4 from "./pages/Day4";
import Day5 from "./pages/Day5";
import Day6 from "./pages/Day6";
import Day7 from "./pages/Day7";
import Day8 from "./pages/Day8";
import Day9 from "./pages/Day9";
import Day10 from "./pages/Day10";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import SiteNav from "./pages/SiteNav";

function Router() {
  return (
    <Switch>
      {/* Site navigation / page directory */}
      <Route path="/nav" component={SiteNav} />

      {/* Opt-In page */}
      <Route path="/" component={Launch} />
      <Route path="/launch" component={Launch} />

      {/* Thank You / Confirmation */}
      <Route path="/launch-plan-invite-confirmation" component={LaunchConfirmation} />

      {/* Welcome */}
      <Route path="/launch-plan-welcome" component={LaunchWelcome} />

      {/* Day pages */}
      <Route path="/launch-plan-day-1" component={Day1} />
      <Route path="/launch-plan-day-2" component={Day2} />
      <Route path="/launch-plan-day-3" component={Day3} />
      <Route path="/launch-plan-day-4" component={Day4} />
      <Route path="/launch-plan-day-5" component={Day5} />
      <Route path="/launch-plan-day-6" component={Day6} />
      <Route path="/launch-plan-day-7" component={Day7} />
      <Route path="/launch-plan-day-8" component={Day8} />
      <Route path="/launch-plan-day-9" component={Day9} />
      <Route path="/launch-plan-day-10" component={Day10} />

      {/* Legal */}
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
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
