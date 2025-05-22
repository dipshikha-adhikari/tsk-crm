import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import RouteMapper from "./routes/RouteMapper.js";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-background text-foreground">
        <RouteMapper />
        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
    </AuthProvider>
  );
};

export default App;
