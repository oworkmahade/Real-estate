import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import PageTitle from "../Shared/PageTitle/PageTitle";

function Login() {
  const [loading, setLoading] = useState(false);
  // state for holding email from input field using useRef
  const emailRef = useRef(null);
  // error state
  const [errors, setErrors] = useState({});
  const [resetMsg, setResetMsg] = useState("");

  // location
  const location = useLocation();
  // receiving signInUser
  const authInfo = useContext(AuthContext);
  const {
    signInUser,
    resetPassword,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
  } = authInfo;

  const navigate = useNavigate();

  // form handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // different method rather then e.target.email.value etc
    const form = new FormData(e.currentTarget);
    const email = form.get("email")?.trim();
    const password = form.get("password");

    const tempErrors = {};
    // EMAIL VALIDATION
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tempErrors.email = "Enter a valid email address";
    }

    // PASSWORD VALIDATION
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    // STOP IF ERRORS EXIST

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({}); // clear errors if validation passed

    const getErrorMessage = (errorCode) => {
      switch (errorCode) {
        case "auth/user-not-found":
          return "No account found with this email";
        case "auth/wrong-password":
          return "Incorrect password";
        case "auth/invalid-credential":
          return "Invalid login credentials";
        default:
          return "Login failed. Try again.";
      }
    };

    setLoading(true);
    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        const loggedUser = result.user;
        toast.success(`Welcome back, ${loggedUser?.displayName || "User"} 🏡`);
        // location
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrors({ auth: getErrorMessage(error.code) });
      })
      .finally(() => setLoading(false));
  };

  // google sign in handler
  const handleGoogleSignIn = () => {
    setLoading(true);

    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success(`Welcome back, ${loggedUser?.displayName || "User"} 🏡`);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  // github sign in handler
  const handleGitHubSignIn = () => {
    setLoading(true);
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        toast.success(`Welcome back, ${loggedUser?.displayName || "User"} 🏡`);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  // facebook sign in handler

  const handleFacebookSignIn = () => {
    setLoading(true);

    facebookSignIn()
      .then(async (result) => {
        const user = result.user;

        // Facebook access token (IMPORTANT)
        const accessToken =
          result._tokenResponse?.oauthAccessToken ||
          result._tokenResponse?.accessToken;

        if (accessToken) {
          const photoURL = `https://graph.facebook.com/me/picture?type=large&access_token=${accessToken}`;
          await updateProfile(user, {
            photoURL,
          });
        }

        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  };

  // handle password reset9430683452144
  const handlePasswordReset = () => {
    const email = emailRef.current?.value?.trim();

    const tempErrors = {};
    if (!email) {
      tempErrors.email = "Email is required for password reset";
      setErrors(tempErrors);
      return;
    }
    setErrors({}); // clear errors if email is provided

    resetPassword(email)
      .then(() => {
        setResetMsg("Password reset email sent. Please check your inbox.");
        setTimeout(() => setResetMsg(""), 5000);
      })
      .catch((error) => {
        setErrors({ auth: error.message });
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <PageTitle title="Login" />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE (Image Section) */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            alt="Real Estate"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-white bg-black/50">
            <h1 className="mb-4 text-4xl font-bold">Find Your Dream Home</h1>
            <p className="max-w-md text-lg text-center">
              Explore the best properties with us. Buy, sell, and rent with
              confidence.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form Section) */}
        <div className="flex items-center justify-center px-4 py-10 bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
            {/* Logo / Title */}
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back
            </h2>
            <p className="mb-6 text-center text-gray-500">
              Login to your real estate account
            </p>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  placeholder="Enter your email"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Forgot Password */}
              <div className="flex items-center justify-between text-sm">
                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="text-green-600 hover:underline"
                >
                  Forgot password?
                </button>

                {resetMsg && <span className="text-green-600">{resetMsg}</span>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 font-semibold text-white transition bg-green-600 rounded-lg hover:bg-green-700"
              >
                {loading ? "Logging in..." : "Login"}
              </button>

              {/* Error */}
              {errors.auth && (
                <p className="text-sm text-center text-red-500">
                  {errors.auth}
                </p>
              )}
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-[1px] bg-gray-300"></div>
              <p className="text-sm text-gray-400">OR</p>
              <div className="flex-1 h-[1px] bg-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full gap-2 py-2 border rounded-lg hover:bg-gray-100"
              >
                <FaGoogle /> Continue with Google
              </button>

              <button
                onClick={handleGitHubSignIn}
                className="flex items-center justify-center w-full gap-2 py-2 border rounded-lg hover:bg-gray-100"
              >
                <FaGithub /> Continue with GitHub
              </button>

              <button
                onClick={handleFacebookSignIn}
                className="flex items-center justify-center w-full gap-2 py-2 border rounded-lg hover:bg-gray-100"
              >
                <FaFacebook /> Continue with Facebook
              </button>
            </div>

            {/* Register */}
            <p className="mt-6 text-sm text-center">
              Don’t have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-green-600 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
