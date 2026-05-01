import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

import { FaArrowLeft } from "react-icons/fa";
import PageTitle from "../Shared/PageTitle/PageTitle";

const PropertyDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  const property = estates.find((item) => item.id === Number.parseInt(id, 10));

  if (!property) {
    return <p className="mt-10 text-center">Property not found</p>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <PageTitle title="Details" />
      <div className="max-w-5xl p-6 mx-auto space-y-6">
        {/* Image Card */}
        <div className="overflow-hidden shadow-lg rounded-2xl">
          <img
            src={property.image_url}
            alt={property.estate_title}
            className="object-cover w-full h-[420px] transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content Card */}
        <div className="p-6 bg-white shadow-md rounded-2xl">
          {/* Title + Location */}
          <h1 className="text-3xl font-bold text-gray-800">
            {property.estate_title}
          </h1>

          <p className="mt-1 text-sm text-gray-500">📍 {property.location}</p>

          {/* Description */}
          <p className="mt-5 leading-relaxed text-gray-600">
            {property.description}
          </p>

          {/* Button */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white transition bg-green-600 rounded-lg shadow-md hover:bg-green-700"
            >
              <FaArrowLeft /> Go Back
            </button>

            {/* Optional Badge */}
            <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
              Available Property
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
