import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../Logo/Logo";

function Footer() {
  return (
    <footer className="mt-20 text-gray-300 bg-gray-950">
      {/* TOP SECTION */}
      <div className="grid gap-10 px-6 mx-auto py-14 max-w-7xl md:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div>
          <div className="mb-4">
            <Logo />
          </div>

          <p className="leading-7 text-gray-400">
            HomeFinder helps you discover premium properties for buying,
            selling, and renting. Find your dream home with modern experience
            and trusted agents.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-green-600"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-green-600"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-green-600"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              className="p-3 transition bg-gray-800 rounded-full hover:bg-green-600"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Quick Links</h3>

          <ul className="space-y-3">
            <li>
              <Link to="/" className="transition hover:text-green-500">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/properties"
                className="transition hover:text-green-500"
              >
                Properties
              </Link>
            </li>

            <li>
              <Link to="/buy" className="transition hover:text-green-500">
                Buy Property
              </Link>
            </li>

            <li>
              <Link to="/rent" className="transition hover:text-green-500">
                Rent Property
              </Link>
            </li>

            <li>
              <Link to="/agents" className="transition hover:text-green-500">
                Agents
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">Services</h3>

          <ul className="space-y-3 text-gray-400">
            <li className="transition hover:text-green-500">Property Buying</li>

            <li className="transition hover:text-green-500">
              Property Selling
            </li>

            <li className="transition hover:text-green-500">Apartment Rent</li>

            <li className="transition hover:text-green-500">
              Home Consultation
            </li>

            <li className="transition hover:text-green-500">
              Real Estate Support
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 text-xl font-semibold text-white">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-400">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-green-500" />
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-500" />
              <p>+880 1771752777</p>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-500" />
              <p>support@homefinder.com</p>
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-6">
            <p className="mb-2 text-sm text-gray-400">
              Subscribe to newsletter
            </p>

            <div className="flex overflow-hidden rounded-lg">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-white bg-gray-800 outline-none"
              />

              <button className="px-4 text-white transition bg-green-600 hover:bg-green-700">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="py-5 text-center border-t border-gray-800">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} HomeFinder. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
