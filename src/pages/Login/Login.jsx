import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

function Login() {
  // state for holding email from input field using useRef
  const emailRef = useRef(null);
  // error state
  const [errors, setErrors] = useState({});
  const [resetMsg, setResetMsg] = useState("");

  // location
  const location = useLocation();
  // receiving signInUser
  const authInfo = useContext(AuthContext);
  const { signInUser, resetPassword, googleSignIn, githubSignIn } = authInfo;

  const navigate = useNavigate();

  // form handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // different method rather then e.target.email.value etc
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
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
    } else if (!/(?=.*[a-z])/.test(password)) {
      tempErrors.password = "Must include a lowercase letter";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      tempErrors.password = "Must include an uppercase letter";
    } else if (!/(?=.*\d)/.test(password)) {
      tempErrors.password = "Must include a number";
    } else if (!/(?=.*[@$!%*?&])/.test(password)) {
      tempErrors.password = "Must include a special character (@$!%*?&)";
    }
    // STOP IF ERRORS EXIST

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      return;
    }

    setErrors({}); // clear errors if validation passed

    signInUser(email, password)
      .then((result) => {
        e.target.reset(" ");
        const loggedUser = result.user;
        console.log(loggedUser.email, "login successful");
        // location
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrors({ auth: error.message });
      });
  };

  // google sign in handler
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser.email, "google sign in successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // github sign in handler
  const handleGitHubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser.email, "github sign in successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // handle password reset
  const handlePasswordReset = () => {
    const email = emailRef.current?.value;

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
      })
      .catch((error) => {
        setErrors({ auth: error.message });
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-3/5 p-16 m-auto mb-16 bg-gray-100 mx-automt-6 mx8-auto login-form">
        <h2 className="text-2xl font-bold text-center">Login your account</h2>
        <hr className="w-2/5 mx-auto mt-2"></hr>
        <form
          onSubmit={handleLogin}
          className="w-4/6 p-8 mx-auto mt-6 space-y-4 border-2 rounded-lg border-slate-400"
        >
          {/* Email */}
          <div className="text-sm font-medium">
            <label htmlFor="email" className="block mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              id="email"
              placeholder="Enter your email address"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </span>
          </div>

          {/* Password */}
          <div className="text-sm font-medium">
            <label htmlFor="password" className="block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <span>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </span>
          </div>

          {/* password reset */}
          <div className="my-4 text-sm font-medium">
            <button
              type="button"
              onClick={handlePasswordReset}
              className="p-0 m-0 bg-transparent border-none cursor-pointer link link-hover"
              style={{ background: "none", border: "none" }}
            >
              Forgot password?
            </button>

            <span>
              {resetMsg && (
                <p className="text-sm text-center text-green-600">{resetMsg}</p>
              )}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition bg-black rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-sm text-center">
          Register if you don't have an account.{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            <Link to="/register">
              <button type="button" className="text-red-600">
                {" "}
                Register
              </button>
            </Link>
          </span>
        </p>
        <span>
          {errors.auth && (
            <p className="text-sm text-center text-red-600">{errors.auth}</p>
          )}
        </span>

        {/* login with  */}
        <div className=" login-with mt-4 w-2/4 mx-auto">
          <div className="flex flex-col items-start justify-center gap-4">
            <button
              onClick={handleGoogleSignIn}
              className="w-full text-blue-600 border-2 border-blue-600 btn"
            >
              <FaGoogle />
              Login with Google
            </button>
            <button
              onClick={handleGitHubSignIn}
              className="w-full border-2 border-black btn"
            >
              <FaGithub />
              Login with Github
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
