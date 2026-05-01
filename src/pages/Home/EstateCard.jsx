import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function EstateCard({ estate }) {
  const {
    id,
    estate_title,
    image_url,
    price,
    status,
    area,
    location,
    facilities,
  } = estate;
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-2xl hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={image_url}
          alt={estate_title}
          className="object-cover w-full h-56 transition-transform duration-500 hover:scale-110"
        />

        {/* Status Badge */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md
      ${status === "sale" ? "bg-green-600" : "bg-blue-600"}`}
        >
          {status.toUpperCase()}
        </span>

        {/* Price Floating Tag */}
        <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-lg bottom-3 right-3 bg-black/60 backdrop-blur">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {estate_title}
        </h2>

        {/* Location */}
        <p className="text-sm text-gray-500">📍 {location}</p>

        {/* Area */}
        <div className="text-sm font-medium text-gray-600">🏠 {area}</div>

        {/* Facilities */}
        <div className="flex flex-wrap gap-2">
          {facilities.slice(0, 3).map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs text-gray-700 bg-gray-100 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link to={`/property/${id}`}>
          <button className="w-full py-2.5 mt-2 text-sm font-semibold text-white transition bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl hover:from-green-700 hover:to-emerald-600 shadow-md">
            View Property
          </button>
        </Link>
      </div>
    </div>
  );
}

EstateCard.propTypes = {
  estate: PropTypes.object.isRequired,
};

export default EstateCard;
