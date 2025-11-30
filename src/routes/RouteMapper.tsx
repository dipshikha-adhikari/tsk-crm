import React, { ReactElement, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import { PrivateRoute } from "./PrivateRoute";
import Navbar from "@/components/shared/header/Navbar";

// Lazy-loaded pages
const AuthView = lazy(() => import("@/features/auth/view"));
const Dashboard = lazy(
  () => import("@/features/dashboard/view/Dashboard.view")
);
const StudentsPage = lazy(
  () => import("@/features/students/student-list/view/Students.view")
);
const UnauthorizedPage = lazy(() => import("@/components/pages/Unauthorized"));




// Centralized route config
interface RouteConfig {
  path: string;
  element: ReactElement;
  private?: boolean;
  roles?: string[];
}

const ROUTES_CONFIG: RouteConfig[] = [
  { path: ROUTES.AUTH, element: <AuthView /> },
  { path: "/", element: <Navigate to={ROUTES.DASHBOARD} replace /> },
  { path: ROUTES.DASHBOARD, element: <Dashboard />, private: true },
  { path: ROUTES.STUDENTS, element: <StudentsPage />, private: true },
  // {
  //   path: ROUTES.TEACHERS,
  //   element: <TeachersPage />,
  //   private: true,
  //   roles: ["admin"],
  // },
  { path: "/unauthorized", element: <UnauthorizedPage /> },
];

const RouteMapper = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {" "}
      <Routes>
        {ROUTES_CONFIG.map((route) => {
          if (route?.private && route?.element) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute >
                  <>
                    <Navbar /> 
                    {route?.element}</>
                  </PrivateRoute>
                }
              />
            );
          } else {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          }
        })}{" "}
      </Routes>{" "}
    </Suspense>
  );
};

export default RouteMapper;
