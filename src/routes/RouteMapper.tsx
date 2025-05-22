import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import AuthView from "@/features/auth/view";
import Dashboard from "@/features/dashboard/view/Dashboard.view";
import PrivateRoute from "./PrivateRoute";
import PrivateLayout from "@/components/layouts/PrivateLayout";
import StudentsPage from "@/features/students/student-list/view/Students.view";

const RouteMapper = () => {
  return (
    <Routes>
      {/* Public Pages */}
      {/* <Route path={ROUTES.LANDING} element={<LandingPage />} /> */}
      <Route path={ROUTES.AUTH} element={<AuthView />} />
      {/* Protected Routes */}
      <Route
        element={
          <PrivateRoute>
            <PrivateLayout />
          </PrivateRoute>
        }
      >
        <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.LANDING} element={<Dashboard />} />
        <Route path={ROUTES.STUDENTS} element={<StudentsPage />} />
      </Route>
    </Routes>
  );
};

export default RouteMapper;
