import React, { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

const AuthView = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  const handleLogin = (email: string, password: string) => {
    console.log("Logging in:", email, password);
    // Call controller here
  };

  const handleRegister = (email: string, password: string) => {
    console.log("Registering:", email, password);
    // Call controller here
  };

  return (
    <div className="min-h-[90vh] max-w-7xl mx-auto flex items-center   px-sm md:px-md">
      <div className="flex flex-col  h-full gap-sm md:flex-row w-full  rounded-lg ">
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
