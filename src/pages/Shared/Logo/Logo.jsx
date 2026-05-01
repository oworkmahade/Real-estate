import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text"
    >
      🏡 HomeFinder
    </Link>
  );
}

export default Logo;
