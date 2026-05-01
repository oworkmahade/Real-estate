import { NavLink, Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../Logo/Logo";

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
    <div className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-xl bg-white/70">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between py-3">
          {/* LEFT: Logo + Mobile */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />{" "}
                </svg>
              </label>

              <ul className="w-56 p-3 mt-3 space-y-2 bg-white shadow-xl rounded-xl menu menu-sm dropdown-content">
                {navLink}
              </ul>
            </div>

            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text"
            >
              <Logo />
            </Link>
          </div>

          {/* CENTER: Navigation */}
          <div className="hidden lg:flex">
            <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
              {navLink}
            </ul>
          </div>

          {/* RIGHT: Auth */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="dropdown dropdown-end">
                {/* Avatar */}
                <label tabIndex={0} className="cursor-pointer">
                  <img
                    src={user?.photoURL}
                    alt="user"
                    className="w-10 h-10 transition rounded-full shadow-md ring-2 ring-green-500 hover:scale-105"
                  />
                </label>

                {/* Dropdown */}
                <ul className="p-4 mt-3 space-y-2 bg-white shadow-2xl w-60 rounded-2xl menu menu-sm dropdown-content">
                  <li className="pointer-events-none">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {user?.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                  </li>

                  <div className="divider"></div>

                  {userMenu}

                  <div className="divider"></div>

                  <li>
                    <button
                      onClick={handleLogOut}
                      className="text-red-500 transition hover:text-red-600"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login">
                  <button className="px-4 py-2 text-sm font-medium text-green-600 transition border border-green-500 rounded-full hover:bg-green-50">
                    Login
                  </button>
                </Link>

                <Link to="/register">
                  <button className="px-4 py-2 text-sm font-medium text-white transition rounded-full shadow-md bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
