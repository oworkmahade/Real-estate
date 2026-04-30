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
        {" "}
        <NavLink to="/">Home</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/updateProfile">Update Profile</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/userProfile">User Profile</NavLink>{" "}
      </li>
    </>
  );

  return (
    <div className="my-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* dropdown  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              |{navLink}
            </ul>
          </div>
          <a className="text-xl font-bold btn btn-ghost">REAL ESTATE</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navLink}</ul>
        </div>
        <div className="flex flex-row gap-4 navbar-end">
          {/* conditional rendering of login/logout button  */}
          <div>
            {user ? (
              <>
                <div className="flex flex-row items-center justify-center gap-4">
                  <div>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} alt="User Avatar" />
                      </div>
                    </label>
                  </div>
                  <div>
                    <button
                      className="text-white bg-black btn"
                      onClick={handleLogOut}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-white bg-black btn">Login</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
