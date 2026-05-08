import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import {
  FaHome,
  FaUsers,
  FaAward,
  FaHandshake,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  return (
    <div className="bg-gray-50">
      <PageTitle title="About" />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-500">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-6xl px-4 mx-auto text-center text-white">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            About HomeFinder
          </h1>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-100">
            HomeFinder is a modern real estate platform designed to help people
            buy, sell, and rent properties easily with trust, transparency, and
            professional support.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-4 py-20 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* IMAGE */}
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="About HomeFinder"
              className="object-cover w-full shadow-2xl rounded-3xl"
            />
          </div>

          {/* CONTENT */}
          <div data-aos="fade-left">
            <span className="px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              Trusted Real Estate Platform
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-800">
              Helping You Find Your Perfect Property
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              HomeFinder was created with the vision of making property buying,
              selling, and renting simple, secure, and accessible for everyone.
              Our platform connects buyers, renters, sellers, and trusted real
              estate agents in one place. We believe that finding the right home
              should be exciting and stress-free.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you are searching for a luxury villa, modern apartment,
              rental flat, or investment property, HomeFinder provides reliable
              listings, professional guidance, and a seamless user experience.
            </p>

            {/* FEATURES */}
            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-green-600" />
                <span className="font-medium text-gray-700">
                  Verified Properties
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-green-600" />
                <span className="font-medium text-gray-700">
                  Trusted Agents
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-green-600" />
                <span className="font-medium text-gray-700">
                  Secure Transactions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-xl text-green-600" />
                <span className="font-medium text-gray-700">
                  Modern Search Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div
              data-aos="zoom-in"
              className="p-8 text-center shadow-lg bg-gray-50 rounded-3xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
                <FaHome />
              </div>

              <h3 className="mt-5 text-4xl font-bold text-gray-800">500+</h3>

              <p className="mt-2 text-gray-600">Properties Listed</p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="p-8 text-center shadow-lg bg-gray-50 rounded-3xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
                <FaUsers />
              </div>

              <h3 className="mt-5 text-4xl font-bold text-gray-800">200+</h3>

              <p className="mt-2 text-gray-600">Happy Clients</p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="p-8 text-center shadow-lg bg-gray-50 rounded-3xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
                <FaAward />
              </div>

              <h3 className="mt-5 text-4xl font-bold text-gray-800">10+</h3>

              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="p-8 text-center shadow-lg bg-gray-50 rounded-3xl"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-3xl text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
                <FaHandshake />
              </div>

              <h3 className="mt-5 text-4xl font-bold text-gray-800">99%</h3>

              <p className="mt-2 text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section className="py-20">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <span className="px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            Our Mission
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800">
            Making Real Estate Easier for Everyone
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            Our mission is to create a transparent, reliable, and user-friendly
            real estate experience where clients can confidently discover
            properties and connect with trusted professionals. We aim to combine
            technology, design, and expert support to make every property
            journey smooth and successful.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
