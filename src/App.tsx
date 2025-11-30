import RouteMapper from "@/routes/RouteMapper";
import { AppProviders } from "./context";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./store";
import { listenToAuthChanges } from "./store/slices/authSlice";
import { useEffect } from "react";

const App = () => {


  return (
    <AppProviders>
      <div className="bg-background text-foreground">
        <RouteMapper />
      </div>
    </AppProviders>
  );
};
export default App
