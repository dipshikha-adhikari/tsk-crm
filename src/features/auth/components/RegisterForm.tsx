import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  onSubmit: (email: string, password: string) => Promise<void>;
  loading:boolean
};

const RegisterForm = ({ onSubmit ,loading}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<{ email: string; password: string; confirmPassword: string }>();

  const password = watch("password");
 

  const handleRegister = async (data) => {
    await onSubmit(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="w-full max-w-md mx-auto px-6 space-y-4"
    >
      <div>
        <label className="block mb-1 ">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 border rounded-md "
          disabled={loading}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 ">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          className="w-full px-3 py-2 border rounded-md "
          disabled={loading}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 ">Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
          className="w-full px-3 py-2 border rounded-md "
          disabled={loading}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
