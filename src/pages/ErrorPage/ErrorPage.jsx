import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-20">
        <div className="text-center">
          {/* Big Error Code */}
          <h1 className="text-[120px] font-extrabold text-green-600 leading-none">
            404
          </h1>

          {/* Message */}
          <h2 className="mt-4 text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>

          <p className="mt-3 text-gray-500">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Illustration / Icon */}
          <div className="flex justify-center mt-6">
            <div className="text-6xl animate-bounce">🏡</div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <Link to="/">
              <button className="px-6 py-3 font-medium text-white transition bg-green-600 rounded-full shadow-md hover:bg-green-700">
                ⬅ Back to Home
              </button>
            </Link>
          </div>

          {/* Extra hint */}
          <p className="mt-6 text-sm text-gray-400">
            Make sure the URL is correct or go back to homepage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
