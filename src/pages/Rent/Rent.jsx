import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../Home/EstateCard";
import { FaKey, FaWifi, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";

function Rent() {
  const estates = useLoaderData();

  // Only rental properties
  const rentProperties = estates.filter(
    (property) => property.status === "rent",
  );

  return (
    <div className="bg-gray-50">
      <PageTitle title="Rent Property" />

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1494526585095-c41746248156"
            alt="Rent Property"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/65"></div>
        </div>

        {/* Content */}
        <div className="relative px-4 py-24 mx-auto text-center text-white max-w-7xl">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold md:text-6xl"
          >
            Find the Perfect Rental Home 🏠
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl mx-auto mt-5 text-lg text-gray-200"
          >
            Discover affordable apartments, luxury condos, and comfortable
            family rentals in the best locations.
          </p>

          {/* Search Box */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-5xl p-4 mx-auto mt-10 bg-white shadow-2xl rounded-2xl"
          >
            <div className="grid gap-3 md:grid-cols-4">
              {/* Location */}
              <input
                type="text"
                placeholder="Search by location"
                className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              {/* Property Type */}
              <select className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Studio</option>
                <option>Family House</option>
              </select>

              {/* Budget */}
              <select className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Monthly Budget</option>
                <option>৳10k - ৳20k</option>
                <option>৳20k - ৳50k</option>
                <option>৳50k+</option>
              </select>

              {/* Search Button */}
              <button className="w-full py-3 font-semibold text-white transition rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105">
                Search Rentals
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY RENT WITH US */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800">
              Why Rent With HomeFinder?
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-gray-500"
            >
              Trusted rental solutions with comfort, security, and convenience.
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div
              data-aos="fade-up"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaKey className="mx-auto text-4xl text-green-600" />

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Easy Renting
              </h3>

              <p className="mt-2 text-gray-500">
                Quick and simple rental process with verified owners.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaWifi className="mx-auto text-4xl text-green-600" />

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Modern Facilities
              </h3>

              <p className="mt-2 text-gray-500">
                Enjoy WiFi, parking, lift, security, and premium amenities.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaShieldAlt className="mx-auto text-4xl text-green-600" />

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Safe & Secure
              </h3>

              <p className="mt-2 text-gray-500">
                Verified rental listings with trusted neighborhoods.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaMapMarkedAlt className="mx-auto text-4xl text-green-600" />

              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Prime Locations
              </h3>

              <p className="mt-2 text-gray-500">
                Rental homes available in top city locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RENTAL PROPERTY SECTION */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
          <div>
            <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800">
              Available Rental Properties
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-2 text-gray-500"
            >
              Browse {rentProperties.length} comfortable rental homes.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="px-5 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full"
          >
            Affordable & Verified Rentals ✔
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rentProperties.map((estate, index) => (
            <div
              key={estate.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <EstateCard estate={estate} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 py-20 text-white bg-gradient-to-r from-green-700 to-emerald-500">
        <div data-aos="zoom-in" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to Move Into Your New Home?
          </h2>

          <p className="mt-4 text-lg text-green-50">
            Explore affordable and luxury rentals with HomeFinder today.
          </p>

          <button className="px-8 py-3 mt-8 font-semibold text-green-700 transition bg-white shadow-lg rounded-xl hover:scale-105">
            Browse Rentals
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Rent;
