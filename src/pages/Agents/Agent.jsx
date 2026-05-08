import PropTypes from "prop-types";
import { FaPhoneAlt, FaEnvelope, FaStar, FaAward } from "react-icons/fa";

function Agent({ agent }) {
  const { name, role, image, phone, email, experience, rating } = agent;

  return (
    <div
      data-aos="fade-up"
      className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-3xl hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative">
        <img src={image} alt={name} className="object-cover w-full h-80" />

        {/* Rating */}
        <div className="absolute flex items-center gap-1 px-3 py-1 text-sm font-semibold text-yellow-400 rounded-full top-4 right-4 bg-black/70 backdrop-blur">
          <FaStar />
          {rating}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* NAME */}
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

        {/* ROLE */}
        <p className="mt-1 font-medium text-green-600">{role}</p>

        {/* EXPERIENCE */}
        <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
          <FaAward className="text-green-600" />
          {experience}
        </div>

        {/* CONTACT */}
        <div className="pt-4 mt-4 space-y-3 border-t">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <FaPhoneAlt className="text-green-600" />
            {phone}
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-700 break-all">
            <FaEnvelope className="text-green-600" />
            {email}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 py-2.5 text-sm font-semibold text-white transition rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90">
            Contact
          </button>

          <button className="flex-1 py-2.5 text-sm font-semibold text-green-600 transition border border-green-600 rounded-xl hover:bg-green-50">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

Agent.propTypes = {
  agent: PropTypes.object.isRequired,
};

export default Agent;
