import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Navbar from "../Shared/Navbar/Navbar";
import EstateCard from "./EstateCard";
import { useState } from "react";
import PageTitle from "../Shared/PageTitle/PageTitle";

function Home() {
  const estate = useLoaderData();
  const [showAll, setShowAll] = useState(false);

  const displayedEstate = showAll ? estate : estate.slice(0, 6);

  return (
    <div>
      <PageTitle title="Home" />
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="px-4 py-10 mx-auto max-w-7xl featured_properties">
        <h2 className="mb-6 text-2xl font-bold">Featured Properties</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedEstate.map((estate, index) => (
            <EstateCard
              key={estate.id}
              estate={estate}
              index={index}
            ></EstateCard>
          ))}
        </div>

        {!showAll && estate.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"
            >
              Show More
            </button>
          </div>
        )}

        {showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-6 py-2 text-white transition bg-gray-600 rounded-lg hover:bg-gray-700"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
