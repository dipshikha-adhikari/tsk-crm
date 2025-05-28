import RouteMapper from "@/routes/RouteMapper";
import { AppProviders } from "./context";

const App = () => {
  return (
    <AppProviders>
      <div className="bg-background text-foreground">
        <RouteMapper />
      </div>
    </AppProviders>
  );
};

export default App;
