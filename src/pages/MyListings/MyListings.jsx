import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { FaMapMarkerAlt, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function MyListings() {
  const listings = useLoaderData();

  return (
    <div className="bg-gray-50">
      <PageTitle title="My Listings" />
      <Navbar />

      {/* HERO */}
      <section className="py-20 text-white bg-gradient-to-r from-green-700 to-emerald-500">
        <div className="text-center">
          <h1 className="text-5xl font-bold">My Listings</h1>
          <p className="mt-4 text-gray-100">
            Manage your property listings easily
          </p>
        </div>
      </section>

      {/* HEADER */}
      <div className="flex items-center justify-between max-w-6xl p-6 mx-auto mt-10 bg-white shadow rounded-2xl">
        <div>
          <h2 className="text-xl font-bold">Your Properties</h2>
          <p className="text-gray-500">Total: {listings?.length}</p>
        </div>

        <button className="flex items-center gap-2 px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700">
          <FaPlus /> Add New
        </button>
      </div>

      {/* CARDS */}
      <div className="grid gap-6 p-6 mx-auto max-w-7xl md:grid-cols-2">
        {listings.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden bg-white shadow-lg rounded-2xl"
          >
            <img
              src={item.image}
              className="object-cover w-full h-56"
              alt={item.title}
            />

            <div className="p-5 space-y-2">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <p className="flex items-center gap-2 text-gray-500">
                <FaMapMarkerAlt /> {item.location}
              </p>

              <p className="font-semibold text-green-600">{item.price}</p>

              <div className="flex justify-between text-sm text-gray-600">
                <span>🛏 {item.bedrooms}</span>
                <span>🛁 {item.bathrooms}</span>
                <span>🏠 {item.area}</span>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex items-center gap-1 text-green-600">
                  <FaEdit /> Edit
                </button>

                <button className="flex items-center gap-1 text-red-500">
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default MyListings;
