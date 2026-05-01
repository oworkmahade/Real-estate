import img1 from "../../assets/slider_images/image_1.jpg";
import img2 from "../../assets/slider_images/image_2.jpg";
import img3 from "../../assets/slider_images/image_3.jpg";
import img4 from "../../assets/slider_images/image_4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function Banner() {
  return (
    <div className="relative w-full h-[48vh] overflow-hidden">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        className="w-full h-full"
      >
        {[img1, img2, img3, img4].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[48vh]">
              <img src={img} className="object-cover w-full h-full scale-105" />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Content Overlay (unchanged) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="text-3xl font-bold md:text-5xl drop-shadow-lg">
          Find Your Dream Home
        </h1>

        <p className="max-w-2xl mt-4 text-sm text-gray-200 md:text-lg">
          Discover, buy, rent, or sell properties with ease. Explore premium
          homes.
        </p>

        {/* Search box */}
        <div className="w-full max-w-5xl mt-8">
          <div className="flex flex-col items-center overflow-hidden border rounded-full shadow-2xl md:flex-row bg-white/90 backdrop-blur-xl border-white/30">
            <div className="flex items-center flex-1 gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              📍
              <input
                type="text"
                placeholder="Search location"
                className="w-full text-gray-700 bg-transparent outline-none"
              />
            </div>

            <div className="flex items-center gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              🏠
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
            </div>

            <div className="flex items-center gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              💰
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Price Range</option>
                <option>1L - 5L</option>
                <option>5L - 10L</option>
              </select>
            </div>

            <button className="px-8 py-3 m-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-green-600 to-emerald-500">
              🔍 Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
