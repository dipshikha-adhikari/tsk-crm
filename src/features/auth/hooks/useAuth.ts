import { AppDispatch, RootState } from "@/store";
import { loginUserThunk, logoutUserThunk, registerUserThunk } from "@/store/slices/authSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { loading } = useSelector((state: RootState) => state.auth);

  const toggleForm = () => setIsRegistering(prev => !prev);

  const handleLogin = async (email: string, password: string) => {
    const toastId = toast.loading("Logging in...");
    try {
      await dispatch(loginUserThunk({ email, password })).unwrap();
      toast.success("Login successful!", { id: toastId });
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Login failed", { id: toastId });
    }
  };

  const handleRegister = async (email: string, password: string) => {
    const toastId = toast.loading("Registering...");
    try {
      await dispatch(registerUserThunk({ email, password })).unwrap();
      toast.success("Registration successful!", { id: toastId });
      navigate("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Registration failed", { id: toastId });
    }
  };

  const handleLogout = async () => {
  const toastId = toast.loading("Logging out...");
  try {
    await dispatch(logoutUserThunk()).unwrap();
    toast.success("Logged out successfully", { id: toastId });
    navigate("/auth");
  } catch (err: any) {
    toast.error(err.message || "Logout failed", { id: toastId });
  }
};


  return {
    isRegistering,
    toggleForm,
    loading,
    handleLogin,
    handleRegister,
    handleLogout
  };
};
