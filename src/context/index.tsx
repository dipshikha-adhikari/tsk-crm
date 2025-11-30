import { Provider as ReduxProvider } from "react-redux";
import { store } from "@/store";
import { UIProvider } from "./ui/UIProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import { AuthProvider } from "./auth/AuthProvider";
import { ToastProvider } from "./ui/ToastProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider store={store}>
      <UIProvider>
        <ThemeProvider>
          <AuthProvider>
               <ToastProvider/>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </UIProvider>
    </ReduxProvider>
  );
};
