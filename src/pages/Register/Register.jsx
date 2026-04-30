import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const authInfo = useContext(AuthContext);
  const { createUser } = authInfo;

  // navigation
  const navigate = useNavigate();

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

        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrors({ auth: getFirebaseError(error.code) });
      });

    // update profile
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/5 p-16 mx-auto mt-6 mb-16 bg-gray-100 mx8-auto register-form">
        <h2 className="text-2xl font-bold text-center">
          Register your account
        </h2>
        <hr className="w-2/5 mx-auto mt-2"></hr>
        <form
          onSubmit={handleRegister}
          className="w-4/6 p-8 mx-auto mt-6 space-y-4 border-2 rounded-lg border-slate-400"
        >
          {/* Name */}
          <div className="text-sm font-medium">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Photo URL */}
          <div className="text-sm font-medium">
            <label htmlFor="photo" className="block mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter your photo URL"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.photo && (
              <p className="text-sm text-red-500">{errors.photo}</p>
            )}
          </div>

          {/* Email */}
          <div className="text-sm font-medium">
            <label htmlFor="email" className="block mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="text-sm font-medium">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute p-2 text-xl text-gray-600 border-none cursor-pointer right-3 top-1 bg-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms">Accept terms & conditions</label>
            </div>

            {errors.terms && (
              <p className="text-sm text-red-500">{errors.terms}</p>
            )}
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
          >
            Register
          </button>

          {errors.firebase && (
            <p className="text-center text-red-600">{errors.firebase}</p>
          )}
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center">
          Already have an account.{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to="/login">
              <button type="button" className="text-red-600">
                {" "}
                Login
              </button>
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
