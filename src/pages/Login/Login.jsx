import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useForm } from "react-hook-form";

function Login() {
  const [loading, setLoading] = useState(false);
  const [resetMsg, setResetMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  const {
    signInUser,
    resetPassword,
    googleSignIn,
    githubSignIn,
    facebookSignIn,
  } = useContext(AuthContext);

  // 🔹 LOGIN
  const onSubmit = (data) => {
    const { email, password } = data;

    setLoading(true);

    signInUser(email, password)
      .then((result) => {
        toast.success(`Welcome back, ${result.user?.displayName || "User"} 🏡`);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setLoading(false));
  };

  // 🔹 SOCIAL LOGIN (same as yours)
  const handleGoogleSignIn = () => {
    setLoading(true);
    googleSignIn()
      .then((result) => {
        toast.success(`Welcome back, ${result.user?.displayName || "User"} 🏡`);
        navigate(location?.state?.from || "/");
      })
      .finally(() => setLoading(false));
  };

  const handleGitHubSignIn = () => {
    setLoading(true);
    githubSignIn()
      .then((result) => {
        toast.success(`Welcome back, ${result.user?.displayName || "User"} 🏡`);
        navigate(location?.state?.from || "/");
      })
      .finally(() => setLoading(false));
  };

  const handleFacebookSignIn = () => {
    setLoading(true);
    facebookSignIn()
      .then(async (result) => {
        const user = result.user;

        const token =
          result._tokenResponse?.oauthAccessToken ||
          result._tokenResponse?.accessToken;

        if (token) {
          await updateProfile(user, {
            photoURL: `https://graph.facebook.com/me/picture?type=large&access_token=${token}`,
          });
        }

        navigate(location?.state?.from || "/");
      })
      .finally(() => setLoading(false));
  };

  // 🔹 PASSWORD RESET
  const handlePasswordReset = () => {
    const email = document.querySelector("input[name='email']").value;

    if (!email) {
      toast.error("Enter email first");
      return;
    }

    resetPassword(email)
      .then(() => {
        setResetMsg("Reset email sent ✔");
        setTimeout(() => setResetMsg(""), 4000);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <Navbar />
      <PageTitle title="Login" />

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* LEFT */}
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
            className="object-cover w-full h-full"
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center px-4 py-10 bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-xl">
            <h2 className="text-2xl font-bold text-center">Welcome Back</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                <p className="text-sm text-red-500">{errors.email?.message}</p>
              </div>

              {/* PASSWORD */}
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                  className="w-full p-3 border rounded-lg"
                />
                <p className="text-sm text-red-500">
                  {errors.password?.message}
                </p>
              </div>

              {/* RESET */}
              <div className="flex justify-between text-sm">
                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="text-green-600"
                >
                  Forgot password?
                </button>

                {resetMsg && <span className="text-green-600">{resetMsg}</span>}
              </div>

              {/* SUBMIT */}
              <button
                disabled={loading}
                className="w-full py-3 text-white bg-green-600 rounded-lg"
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>

            {/* SOCIAL LOGIN */}
            <div className="mt-6 space-y-3">
              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center w-full gap-3 px-4 py-2 font-medium text-gray-700 transition-all duration-300 bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md hover:-translate-y-0.5 hover:border-green-400"
              >
                <FaGoogle className="text-lg text-red-500" />
                Continue with Google
              </button>

              {/* GitHub */}
              <button
                onClick={handleGitHubSignIn}
                className="flex items-center justify-center w-full gap-3 px-4 py-2 font-medium text-white transition-all duration-300 bg-gray-900 border border-gray-800 shadow-sm rounded-xl hover:bg-black hover:shadow-md hover:-translate-y-0.5"
              >
                <FaGithub className="text-lg" />
                Continue with GitHub
              </button>

              {/* Facebook */}
              <button
                onClick={handleFacebookSignIn}
                className="flex items-center justify-center w-full gap-3 px-4 py-2 font-medium text-white transition-all duration-300 bg-blue-600 border border-blue-700 shadow-sm rounded-xl hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5"
              >
                <FaFacebook className="text-lg" />
                Continue with Facebook
              </button>
            </div>

            {/* REGISTER */}
            <p className="mt-4 text-sm text-center">
              No account?{" "}
              <Link to="/register" className="text-green-600">
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
