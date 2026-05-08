import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../Home/EstateCard";
import {
  FaHome,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

function Buy() {
  const estates = useLoaderData();

  // Only sale properties
  const buyProperties = estates.filter(
    (property) => property.status === "sale",
  );

  return (
    <div className="bg-gray-50">
      <PageTitle title="Buy Property" />

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
            alt="Buy Property"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative px-4 py-24 mx-auto text-center text-white max-w-7xl">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold md:text-6xl"
          >
            Buy Your Dream Home 🏡
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl mx-auto mt-5 text-lg text-gray-200"
          >
            Explore luxury villas, premium apartments, and modern family homes
            in the best locations across Bangladesh.
          </p>

          {/* Search Box */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-4xl p-4 mx-auto mt-10 bg-white shadow-2xl rounded-2xl"
          >
            <div className="grid gap-3 md:grid-cols-4">
              <input
                type="text"
                placeholder="Search location"
                className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />

              <select className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Property Type</option>
                <option>Apartment</option>
                <option>Villa</option>
                <option>Duplex</option>
              </select>

              <select className="w-full px-4 py-3 text-gray-700 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Budget</option>
                <option>50L - 1Cr</option>
                <option>1Cr - 2Cr</option>
                <option>2Cr+</option>
              </select>

              <button className="w-full py-3 font-semibold text-white transition rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 hover:scale-105">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WHY BUY WITH US */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800">
              Why Buy With HomeFinder?
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 text-gray-500"
            >
              We provide trusted property solutions for modern buyers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div
              data-aos="fade-up"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaHome className="mx-auto text-4xl text-green-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Premium Homes
              </h3>
              <p className="mt-2 text-gray-500">
                Explore luxury apartments, villas, and modern houses.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaMapMarkerAlt className="mx-auto text-4xl text-green-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Prime Locations
              </h3>
              <p className="mt-2 text-gray-500">
                Find properties in the best and safest locations.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaShieldAlt className="mx-auto text-4xl text-green-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Trusted Service
              </h3>
              <p className="mt-2 text-gray-500">
                Verified listings with complete legal support.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="p-8 text-center transition shadow-md bg-gray-50 rounded-2xl hover:shadow-xl"
            >
              <FaMoneyBillWave className="mx-auto text-4xl text-green-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-800">
                Easy Financing
              </h3>
              <p className="mt-2 text-gray-500">
                Flexible payment and home loan assistance available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY LIST */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
          <div>
            <h2 data-aos="fade-up" className="text-3xl font-bold text-gray-800">
              Properties for Sale
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-2 text-gray-500"
            >
              Browse {buyProperties.length} premium sale properties.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="px-5 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full"
          >
            Verified Listings ✔
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {buyProperties.map((estate, index) => (
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
          <h2 className="text-4xl font-bold">Ready to Own Your Dream Home?</h2>

          <p className="mt-4 text-lg text-green-50">
            Start your property journey today with trusted real estate experts.
          </p>

          <button className="px-8 py-3 mt-8 font-semibold text-green-700 transition bg-white shadow-lg rounded-xl hover:scale-105">
            Contact an Agent
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Buy;
