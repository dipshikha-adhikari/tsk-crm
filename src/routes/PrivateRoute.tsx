import { Navigate } from "react-router-dom";
import type { JSX } from "react";
import { useAuth } from "@/context/AuthContext.js";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  return user ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
