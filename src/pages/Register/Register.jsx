import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Register = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    const { name, photo, email, password } = data;

    createUser(email, password)
      .then(async (result) => {
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });

        toast.success("Registration completed successfully 🎉");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // Google login
  const handleGoogleRegister = () => {
    googleSignIn()
      .then((result) => {
        toast.success(`Welcome, ${result.user?.displayName || "User"} 🏡`);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div>
      <PageTitle title="Register" />
      <Navbar />

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50">
            <h1 className="text-4xl font-bold">Join HomeFinder</h1>
          </div>
        </div>

        {/* FORM */}
        <div className="flex items-center justify-center p-6 bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
            <h2 className="text-2xl font-bold text-center">Create Account</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {/* Name */}
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 3, message: "Minimum 3 characters" },
                })}
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
              />
              <p className="text-sm text-red-500">{errors.name?.message}</p>

              {/* Photo */}
              <input
                {...register("photo", {
                  required: "Photo URL required",
                })}
                placeholder="Photo URL"
                className="w-full p-3 border rounded-lg"
              />
              <p className="text-sm text-red-500">{errors.photo?.message}</p>

              {/* Email */}
              <input
                {...register("email", {
                  required: "Email required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
              <p className="text-sm text-red-500">{errors.email?.message}</p>

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password required",
                    minLength: {
                      value: 6,
                      message: "Min 6 characters",
                    },
                  })}
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <p className="text-sm text-red-500">{errors.password?.message}</p>

              {/* Terms */}
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: "You must accept terms",
                  })}
                />
                I agree to terms
              </label>
              <p className="text-sm text-red-500">{errors.terms?.message}</p>

              {/* Submit */}
              <button className="w-full py-3 text-white bg-green-600 rounded-lg">
                Create Account
              </button>
            </form>

            {/* Google */}
            <button
              onClick={handleGoogleRegister}
              className="flex items-center justify-center w-full gap-2 py-2 mt-4 border rounded-lg"
            >
              <FaGoogle /> Continue with Google
            </button>

            <p className="mt-4 text-sm text-center">
              Already have account?{" "}
              <Link to="/login" className="text-green-600">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
