import { useContext } from "react";
import {
  FaHome,
  FaHeart,
  FaBuilding,
  FaMoneyBillWave,
  FaUserCircle,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import { AuthContext } from "../../providers/AuthProvider";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle title="Dashboard" />
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-emerald-600 to-green-500">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            {/* USER IMAGE */}
            <div
              data-aos="zoom-in"
              className="overflow-hidden border-4 border-white shadow-2xl rounded-3xl"
            >
              <img
                src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt="User"
                className="object-cover w-32 h-32"
              />
            </div>

            {/* USER INFO */}
            <div data-aos="fade-right" className="text-white">
              <h1 className="text-4xl font-extrabold">Welcome Back 👋</h1>

              <h2 className="mt-2 text-2xl font-semibold">
                {user?.displayName || "User"}
              </h2>

              <p className="mt-1 text-gray-100">{user?.email}</p>

              <div className="flex items-center gap-2 mt-4 text-sm text-gray-100">
                <FaMapMarkerAlt />
                Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* CARD */}
          <div
            data-aos="fade-up"
            className="p-6 bg-white shadow-lg rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Properties</p>

                <h2 className="mt-2 text-4xl font-bold text-gray-800">120</h2>
              </div>

              <div className="flex items-center justify-center w-16 h-16 text-3xl text-white rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500">
                <FaHome />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-6 bg-white shadow-lg rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Saved Properties</p>

                <h2 className="mt-2 text-4xl font-bold text-gray-800">35</h2>
              </div>

              <div className="flex items-center justify-center w-16 h-16 text-3xl text-white rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500">
                <FaHeart />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-6 bg-white shadow-lg rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Listed Properties</p>

                <h2 className="mt-2 text-4xl font-bold text-gray-800">18</h2>
              </div>

              <div className="flex items-center justify-center w-16 h-16 text-3xl text-white rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500">
                <FaBuilding />
              </div>
            </div>
          </div>

          {/* CARD */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-6 bg-white shadow-lg rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Monthly Revenue</p>

                <h2 className="mt-2 text-4xl font-bold text-gray-800">
                  ৳ 2.5M
                </h2>
              </div>

              <div className="flex items-center justify-center w-16 h-16 text-3xl text-white rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500">
                <FaMoneyBillWave />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-4 pb-20 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* PROFILE CARD */}
          <div
            data-aos="fade-right"
            className="p-8 bg-white shadow-lg rounded-3xl"
          >
            <div className="flex items-center gap-4">
              <div className="text-5xl text-green-600">
                <FaUserCircle />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Profile Information
                </h2>

                <p className="text-gray-500">Your account details</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>

                <h3 className="mt-1 text-lg font-semibold text-gray-800">
                  {user?.displayName || "No Name"}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email Address</p>

                <h3 className="mt-1 text-lg font-semibold text-gray-800 break-all">
                  {user?.email}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Account Status</p>

                <span className="inline-block px-4 py-1 mt-2 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                  Active
                </span>
              </div>

              <button className="w-full py-3 mt-4 font-semibold text-white transition rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90">
                Edit Profile
              </button>
            </div>
          </div>

          {/* ACTIVITY */}
          <div
            data-aos="fade-up"
            className="p-8 bg-white shadow-lg lg:col-span-2 rounded-3xl"
          >
            <div className="flex items-center gap-3">
              <div className="p-4 text-2xl text-white rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500">
                <FaChartLine />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Recent Activity
                </h2>

                <p className="text-gray-500">
                  Latest actions and property updates
                </p>
              </div>
            </div>

            {/* ACTIVITIES */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:bg-gray-50">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
                  🏡
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Added New Property
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    You listed a new luxury apartment in Gulshan, Dhaka.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:bg-gray-50">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-gradient-to-r from-pink-500 to-rose-500">
                  ❤️
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Saved Property
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    You saved a modern duplex villa to your wishlist.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 border border-gray-100 rounded-2xl hover:bg-gray-50">
                <div className="flex items-center justify-center w-12 h-12 text-xl text-white rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  📈
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800">
                    Profile Updated
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    Your account profile information was updated successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Dashboard;
