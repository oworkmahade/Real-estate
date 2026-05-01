import img1 from "../../assets/slider_images/image_1.jpg";
import img2 from "../../assets/slider_images/image_2.jpg";
import img3 from "../../assets/slider_images/image_3.jpg";
import img4 from "../../assets/slider_images/image_4.jpg";

function Banner() {
  return (
    <div className="relative w-full h-[85vh]">
      {/* Carousel */}
      <div className="w-full h-full carousel">
        {[img1, img2, img3, img4].map((img, index) => (
          <div
            key={index}
            id={`slide${index}`}
            className="relative w-full carousel-item"
          >
            <img src={img} className="object-cover w-full h-full" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
        <h1 className="mb-4 text-3xl font-bold md:text-5xl">
          Find Your Dream Home 🏡
        </h1>

        <p className="max-w-xl mb-6 text-sm text-gray-200 md:text-lg">
          Buy, sell, or rent properties easily. Discover the best homes in your
          desired location.
        </p>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col items-center overflow-hidden bg-white border rounded-full shadow-2xl md:flex-row">
            {/* Location */}
            <div className="flex items-center flex-1 gap-2 px-4 py-3 border-b md:border-b-0 md:border-r">
              <span className="text-lg text-gray-500">📍</span>
              <input
                type="text"
                placeholder="Search location (Dhaka, Sherpur...)"
                className="w-full text-gray-700 placeholder-gray-400 outline-none"
              />
            </div>

            {/* Property Type */}
            <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r">
              <span className="text-lg text-gray-500">🏠</span>
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
            </div>

            {/* Price Range (Optional but modern) */}
            <div className="flex items-center gap-2 px-4 py-3 border-b md:border-b-0 md:border-r">
              <span className="text-lg text-gray-500">💰</span>
              <select className="text-gray-700 bg-transparent outline-none">
                <option>Price Range</option>
                <option>1L - 5L</option>
                <option>5L - 10L</option>
                <option>10L+</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="w-full px-6 py-3 m-2 font-medium text-white transition bg-green-600 rounded-full md:w-auto hover:bg-green-700">
              🔍 Search
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute flex gap-2 transform -translate-x-1/2 bottom-6 left-1/2">
        <a
          href="#slide0"
          className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100"
        ></a>
        <a
          href="#slide1"
          className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100"
        ></a>
        <a
          href="#slide2"
          className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100"
        ></a>
        <a
          href="#slide3"
          className="w-3 h-3 bg-white rounded-full opacity-70 hover:opacity-100"
        ></a>
      </div>
    </div>
  );
}

export default Banner;
