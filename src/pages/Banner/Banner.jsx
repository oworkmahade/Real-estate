import img1 from "../../assets/slider_images/image_1.jpg";
import img2 from "../../assets/slider_images/image_2.jpg";
import img3 from "../../assets/slider_images/image_3.jpg";
import img4 from "../../assets/slider_images/image_4.jpg";

function Banner() {
  return (
    <div className="relative w-full h-[48vh] overflow-hidden">
      {/* Carousel */}
      <div className="w-full h-full carousel">
        {[img1, img2, img3, img4].map((img, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="relative w-full carousel-item"
          >
            <img src={img} className="object-cover w-full h-full scale-105" />

            {/* Gradient Overlay (more modern than dark block) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        {/* Title */}
        <h1 className="text-3xl font-bold leading-tight md:text-5xl drop-shadow-lg">
          Find Your Dream Home
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mt-4 text-sm text-gray-200 md:text-lg">
          Discover, buy, rent, or sell properties with ease. Explore premium
          homes in the best locations of your city.
        </p>

        {/* Search Card */}
        <div className="w-full max-w-5xl mt-8">
          <div className="flex flex-col items-center overflow-hidden border rounded-full shadow-2xl md:flex-row bg-white/90 backdrop-blur-xl border-white/30">
            {/* Location */}
            <div className="flex items-center flex-1 gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              📍
              <input
                type="text"
                placeholder="Search location (Dhaka, Sherpur...)"
                className="w-full text-gray-700 bg-transparent outline-none"
              />
            </div>

            {/* Type */}
            <div className="flex items-center gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              🏠
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 px-5 py-3 border-b md:border-b-0 md:border-r">
              💰
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Price Range</option>
                <option>1L - 5L</option>
                <option>5L - 10L</option>
                <option>10L+</option>
              </select>
            </div>

            {/* Button */}
            <button className="px-8 py-3 m-2 text-sm font-semibold text-white transition rounded-full shadow-lg bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90">
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Modern Dot Navigation */}
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-6 left-1/2">
        {[0, 1, 2, 3].map((i) => (
          <a
            key={i}
            href={`#slide${i}`}
            className="w-2.5 h-2.5 bg-white rounded-full opacity-60 hover:opacity-100 transition"
          ></a>
        ))}
      </div>
    </div>
  );
}

export default Banner;
