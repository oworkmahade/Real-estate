import { NavLink, Link } from "react-router-dom";
// import userLogo from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const authInfo = useContext(AuthContext);
  const { user, logOut } = authInfo;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("log out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/properties">Properties</NavLink>
      </li>

      <li>
        <NavLink to="/buy">Buy</NavLink>
      </li>

      <li>
        <NavLink to="/rent">Rent</NavLink>
      </li>

      <li>
        <NavLink to="/agents">Agents</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  const userMenu = (
    <>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/my-listings">My Listings</NavLink>
      </li>
      <li>
        <NavLink to="/saved">Saved Properties</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="px-4 mx-auto navbar max-w-7xl">
        {/* LEFT: Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="p-3 mt-3 space-y-2 bg-white rounded-lg shadow-lg menu menu-sm dropdown-content w-52"
            >
              {navLink}
            </ul>
          </div>

          {/* Brand */}
          <Link to="/" className="text-2xl font-bold text-green-600">
            🏡 Home<span className="text-gray-800">Finder</span>
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <div className="hidden lg:flex navbar-center">
          <ul className="gap-6 font-medium text-gray-700 menu menu-horizontal">
            {navLink}
          </ul>
        </div>

        {/* RIGHT: User / Auth */}
        <div className="gap-4 navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              {/* Avatar Button */}
              <label tabIndex={0} className="cursor-pointer">
                <img
                  key={user?.photoURL}
                  src={user?.photoURL}
                  className="w-10 h-10 border-2 border-green-500 rounded-full"
                  alt="user"
                />
              </label>

              {/* Dropdown Menu */}
              <ul
                tabIndex={0}
                className="w-56 p-3 mt-3 space-y-1 bg-white rounded-lg shadow-lg menu menu-sm dropdown-content"
              >
                {/* User Info */}
                <li className="pointer-events-none">
                  <span className="font-semibold text-gray-800">
                    {user?.displayName || "User"}
                  </span>
                  <span className="text-xs text-gray-500">{user?.email}</span>
                </li>

                <div className="my-1 divider"></div>

                {/* User Menu */}
                {userMenu}

                <div className="my-1 divider"></div>

                {/* Logout */}
                <li>
                  <button onClick={handleLogOut} className="text-red-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to="/login">
                <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 text-white bg-green-600 rounded-lg">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
