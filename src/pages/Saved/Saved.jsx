import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { Link } from "react-router-dom";
import { FaHeart, FaTrashAlt } from "react-icons/fa";
import { getSavedProperties } from "../../utils/localStorage/savedProperties";

function Saved() {
  const [saved, setSaved] = useState([]);

  // Load saved properties (from localStorage)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSaved(getSavedProperties());
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle title="Saved Properties" />
      <Navbar />

      {/* HERO */}
      <section className="py-16 text-center text-white bg-gradient-to-r from-green-700 to-emerald-500">
        <h1 className="text-4xl font-bold">Your Saved Properties</h1>
        <p className="mt-3 text-gray-100">
          Keep track of your favorite homes in one place ❤️
        </p>
      </section>

      {/* CONTENT */}
      <section className="px-4 mx-auto max-w-7xl py-14">
        {saved.length === 0 ? (
          <div className="p-10 text-center bg-white shadow-lg rounded-3xl">
            <FaHeart className="mx-auto text-5xl text-gray-300" />
            <h2 className="mt-4 text-2xl font-bold text-gray-700">
              No Saved Properties Yet
            </h2>
            <p className="mt-2 text-gray-500">
              Start exploring and save your favorite properties.
            </p>

            <Link to="/properties">
              <button className="px-6 py-3 mt-6 text-white transition bg-green-600 rounded-xl hover:bg-green-700">
                Browse Properties
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {saved.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden transition bg-white shadow-lg rounded-3xl hover:shadow-2xl"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={item.image_url}
                    alt={item.estate_title}
                    className="object-cover w-full h-56"
                  />

                  <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full top-3 left-3">
                    SAVED
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-2">
                  <h2 className="text-lg font-bold text-gray-800">
                    {item.estate_title}
                  </h2>

                  <p className="text-sm text-gray-500">{item.location}</p>

                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-600">
                      {item.price}
                    </span>
                    <span className="text-sm text-gray-400">{item.area}</span>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex gap-3 mt-4">
                    <Link to={`/property/${item.id}`} className="flex-1">
                      <button className="w-full py-2 text-white bg-green-600 rounded-xl hover:bg-green-700">
                        View
                      </button>
                    </Link>

                    <button
                      onClick={() => handleRemove(item.id)}
                      className="px-4 text-red-600 border border-red-500 rounded-xl hover:bg-red-50"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Saved;
