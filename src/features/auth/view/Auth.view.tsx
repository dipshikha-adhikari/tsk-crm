import React, { useEffect, useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../controllers/auth.controller";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { auth } from "../../../lib/firebase";
import { ROUTES } from "@/routes/routes";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

const AuthView = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const { user } = useAuth();

  // Redirect logged-in users to dashboard
  useEffect(() => {
    if (user) {
      navigate(ROUTES.DASHBOARD);
    }
  }, [user, navigate]);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleLogin = async (email: string, password: string) => {
    const toastId = toast.loading("Logging in...");
    try {
      await loginUser(email, password);

      navigate(ROUTES.DASHBOARD);
      toast.success("Login successful!", { id: toastId });
      // redirect or update UI
    } catch (error: any) {
      toast.error(error.message || "Registration failed", { id: toastId });
    }
  };

  const handleRegister = async (email: string, password: string) => {
    const toastId = toast.loading("Creating your account...");

    try {
      // Firebase registration logic goes here
      await createUserWithEmailAndPassword(auth, email, password); // example
      toast.success("Registration successful!", { id: toastId });
    } catch (err: any) {
      toast.error(err.message || "Registration failed", { id: toastId });
    }
  };

  return (
    <div className="min-h-[90vh] max-w-7xl mx-auto flex items-center   px-sm md:px-md">
      <div className="flex flex-col  h-full gap-sm md:flex-row w-full justify-center rounded-lg ">
        {/* Left - Form */}
        <div className="w-full md:w-1/2  flex-1">
          <h2 className="text-3xl font-bold text-center mb-6 ">
            {isRegistering ? "Register" : "Login"}
          </h2>
          {isRegistering ? (
            <RegisterForm onSubmit={handleRegister} />
          ) : (
            <LoginForm onSubmit={handleLogin} />
          )}
          <p className="text-center mt-4">
            {isRegistering
              ? "Already have an account?"
              : "Don't have an account?"}
            <button
              className="ml-2 text-blue-500  cursor-pointer hover:underline"
              onClick={toggleForm}
            >
              {isRegistering ? "Login" : "Register"}
            </button>
          </p>
        </div>

        {/* Right - Image */}
        <div className="hidden overflow-hidden h-full max-h-[500px] md:flex justify-end flex-2  ">
          <img
            src="/auth.png"
            alt="Auth illustration"
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default AuthView;
