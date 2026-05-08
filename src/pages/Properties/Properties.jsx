import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { useLoaderData } from "react-router-dom";
import EstateCard from "../Home/EstateCard";
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

function Properties() {
  const estates = useLoaderData();
  console.log(estates);

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Filter properties
  const filteredProperties = estates.filter((property) => {
    const matchesSearch =
      property.estate_title.toLowerCase().includes(searchText.toLowerCase()) ||
      property.location.toLowerCase().includes(searchText.toLowerCase());

    const matchesStatus =
      filterStatus === "all" ? true : property.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-gray-50">
      <PageTitle title="Properties" />

      {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-emerald-500"></div>

        <div className="relative px-4 py-20 mx-auto text-center text-white max-w-7xl">
          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold md:text-6xl"
          >
            Explore Premium Properties
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="max-w-2xl mx-auto mt-4 text-lg text-green-50"
          >
            Find your perfect dream home from our modern apartments, luxury
            villas, family houses, and rental properties.
          </p>

          {/* SEARCH BAR */}
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="max-w-4xl p-3 mx-auto mt-10 bg-white shadow-2xl rounded-2xl"
          >
            <div className="flex flex-col gap-3 md:flex-row">
              {/* Search Input */}
              <div className="relative flex-1">
                <FaSearch className="absolute text-gray-400 left-4 top-4" />

                <input
                  type="text"
                  placeholder="Search by location or property name..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-3 pr-4 text-gray-700 border pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Filter */}
              <div className="relative">
                <FaFilter className="absolute text-gray-400 left-4 top-4" />

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="py-3 pr-10 text-gray-700 border pl-11 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="all">All Properties</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY SECTION */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        {/* Heading */}
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Available Properties
            </h2>

            <p className="mt-2 text-gray-500">
              Showing {filteredProperties.length} premium properties
            </p>
          </div>

          <div className="px-5 py-2 text-sm font-medium text-green-700 bg-green-100 rounded-full">
            Trusted Real Estate Platform 🏡
          </div>
        </div>

        {/* Cards */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((estate, index) => (
              <div
                key={estate.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <EstateCard estate={estate} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-bold text-gray-700">
              No Properties Found
            </h3>

            <p className="mt-3 text-gray-500">
              Try searching with another keyword or filter.
            </p>
          </div>
        )}
      </section>

      {/* STATS SECTION */}
      <section className="px-4 py-16 bg-white">
        <div className="grid gap-6 mx-auto text-center max-w-7xl md:grid-cols-4">
          <div
            data-aos="zoom-in"
            className="p-8 transition shadow-md rounded-2xl hover:shadow-xl"
          >
            <h3 className="text-4xl font-bold text-green-600">500+</h3>
            <p className="mt-2 text-gray-600">Properties Listed</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            className="p-8 transition shadow-md rounded-2xl hover:shadow-xl"
          >
            <h3 className="text-4xl font-bold text-green-600">120+</h3>
            <p className="mt-2 text-gray-600">Happy Clients</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="p-8 transition shadow-md rounded-2xl hover:shadow-xl"
          >
            <h3 className="text-4xl font-bold text-green-600">50+</h3>
            <p className="mt-2 text-gray-600">Expert Agents</p>
          </div>

          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="p-8 transition shadow-md rounded-2xl hover:shadow-xl"
          >
            <h3 className="text-4xl font-bold text-green-600">24/7</h3>
            <p className="mt-2 text-gray-600">Customer Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 text-white bg-gradient-to-r from-green-700 to-emerald-500">
        <div data-aos="fade-up" className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Dream Property?
          </h2>

          <p className="mt-4 text-lg text-green-50">
            Start exploring modern apartments, luxury villas, and rental
            properties with HomeFinder today.
          </p>

          <button className="px-8 py-3 mt-8 font-semibold text-green-700 transition bg-white shadow-lg rounded-xl hover:scale-105">
            Explore Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Properties;
