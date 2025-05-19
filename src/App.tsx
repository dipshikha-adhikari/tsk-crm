import { Toaster } from "react-hot-toast";
import Navbar from "./components/shared/Navbar.js";
import { AuthProvider } from "./context/AuthContext";
import RouteMapper from "./routes/RouteMapper.js";

const App = () => {
  return (
    <AuthProvider>
      <div className="bg-background text-foreground">
        <Navbar />
        <RouteMapper />
        <Toaster position="bottom-left" reverseOrder={false} />
      </div>
    </AuthProvider>
  );
};

export default App;
