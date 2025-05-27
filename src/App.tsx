import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import RouteMapper from "./routes/RouteMapper.js";
import { UIProvider } from "./context/ui/UIProvider";

const App = () => {
  return (
    <AuthProvider>
      <UIProvider>
        <div className="bg-background text-foreground">
          <RouteMapper />
          <Toaster position="bottom-left" reverseOrder={false} />
        </div>
      </UIProvider>
    </AuthProvider>
  );
};

export default App;
