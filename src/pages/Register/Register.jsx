import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const Register = () => {
  const authInfo = useContext(AuthContext);
  const { createUser, googleSignIn } = authInfo;

  // navigation
  const navigate = useNavigate();
  // location
  const location = useLocation();
  // state or showing password
  const [showPassword, setShowPassword] = useState(null);

  // error state
  const [errors, setErrors] = useState({});

  // form handle register
  const handleRegister = (e) => {
    e.preventDefault();

    // different method rather then e.target.email.value etc

    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.trim();
    const photo = form.get("photo")?.trim();
    const email = form.get("email")?.trim();
    const password = form.get("password");
    const termsChecked = form.get("terms");

    // validation
    const newErrors = {};

    // 🔹 Name
    if (!name || name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // 🔹 Photo URL
    const urlPattern = /^https?:\/\/.+/i;
    if (!urlPattern.test(photo)) {
      newErrors.photo = "Enter a valid image URL (jpg, png, etc.)";
    }

    // 🔹 Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    // 🔹 Password
    if (password.length < 6) {
      newErrors.password = "At least 6 characters required";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Must include an uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Must include a lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Must include a number";
    }

    // 🔹 Terms
    if (!termsChecked) {
      newErrors.terms = "You must accept the terms";
    }

    // ❌ If errors exist → stop
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // ✅ Clear errors
    setErrors({});

    const getFirebaseError = (code) => {
      switch (code) {
        case "auth/email-already-in-use":
          return "Email already in use";
        case "auth/invalid-email":
          return "Invalid email";
        case "auth/weak-password":
          return "Weak password";
        default:
          return "Registration failed";
      }
    };
    // create user with email and password using createUser function from auth context.
    createUser(email, password)
      .then(async (result) => {
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
        toast.success("Registration completed successfully 🎉");
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrors({ auth: getFirebaseError(error.code) });
      });
  };

  // handle google Sign In
  const handleGoogleRegister = () => {
    googleSignIn()
      .then(async (result) => {
        const user = result.user;

        // force refresh photo from provider
        // await updateProfile(user, {
        //   photoURL: user.photoURL || user.providerData?.[0]?.photoURL,
        // });

        toast.success(`Welcome, ${user?.displayName || "User"} 🏡`);

        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE (Image Section) */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Real Estate"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white bg-black/50">
            <h1 className="mb-4 text-4xl font-bold">Join HomeFinder</h1>
            <p className="max-w-md text-lg text-center">
              Create your account and start exploring your dream properties
              today.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form Section) */}
        <div className="flex items-center justify-center px-4 py-10 bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
            {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Create Account
            </h2>
            <p className="mb-6 text-center text-gray-500">
              Sign up to get started
            </p>

            {/* Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mahade Hasan"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Photo URL */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="https://your-photo-url.com"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                {errors.photo && (
                  <p className="text-sm text-red-500">{errors.photo}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="••••••••"
                    className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute text-gray-500 right-3 top-3"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the terms & conditions
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-500">{errors.terms}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
              >
                Create Account
              </button>

              {/* Firebase Error */}
              {errors.firebase && (
                <p className="text-sm text-center text-red-500">
                  {errors.firebase}
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <p className="text-sm text-gray-400">OR</p>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Social Login (optional reuse) */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleRegister}
                className="flex items-center justify-center w-full gap-2 py-2 border rounded-lg hover:bg-gray-100"
              >
                <FaGoogle /> Continue with Google
              </button>
            </div>

            {/* Login Link */}
            <p className="mt-6 text-sm text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-green-600 hover:underline"
              >
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
