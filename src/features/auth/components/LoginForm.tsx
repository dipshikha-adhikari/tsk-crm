// features/auth/components/LoginForm.tsx
import { useForm } from "react-hook-form";

type Props = {
  onSubmit: (email: string, password: string) => void;
};

const LoginForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const handleLogin = async (data: { email: string; password: string }) => {
    await onSubmit(data.email, data.password);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-full max-w-md mx-auto text-foreground bg-background space-y-4"
    >
      <div>
        <label className="block mb-1 ">Email</label>
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="w-full px-3 py-2 border rounded-md "
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1 ">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="w-full px-3 py-2 border rounded-md "
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
