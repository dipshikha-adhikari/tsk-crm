
import { ReactElement, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Navbar from "@/components/shared/header/Navbar";

interface PrivateRouteProps {
  children: ReactElement; // Must be ReactElement
}

export const PrivateRoute = ({ children }: PrivateRouteProps): ReactElement => {
  const { user, isAuthReady } = useSelector((state: RootState) => state.auth);

  if (!isAuthReady) return <div>Loading...</div>;

  return user ? 
    <>
      {children}
    </>
  : <Navigate to="/auth" replace />;
};
