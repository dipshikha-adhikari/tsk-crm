import { ReactNode } from "react";
import { UIProvider } from "./ui/UIProvider";
import { ThemeProvider } from "./theme/ThemeProvider";
import { AuthProvider } from "./auth/AuthProvider";

type ProviderComponent = ({ children }: { children: ReactNode }) => JSX.Element;

export const combineProviders = (...providers: ProviderComponent[]) => {
  return ({ children }: { children: ReactNode }) =>
    providers.reduceRight(
      (acc, Provider) => <Provider>{acc}</Provider>,
      children
    );
};

export const AppProviders = combineProviders(
  UIProvider,
  ThemeProvider,
  AuthProvider
  // Add other providers here:
);
