import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  //   location tracing
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 rounded-full border-primary border-t-transparent animate-spin"></div>

        {/* Text */}
        <p className="mt-4 text-sm tracking-wide text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
