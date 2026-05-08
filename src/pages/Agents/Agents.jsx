import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import PageTitle from "../Shared/PageTitle/PageTitle";
import Agent from "./Agent";

function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("/agents.json")
      .then((res) => res.json())
      .then((data) => setAgents(data));
  }, []);

  return (
    <div className="bg-gray-50">
      <PageTitle title="Agents" />
      <Navbar />

      {/* HERO */}
      <section className="py-24 text-center text-white bg-gradient-to-r from-green-700 via-emerald-600 to-green-500">
        <div className="max-w-5xl px-4 mx-auto">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Meet Our Expert Agents
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-100">
            Professional real estate agents dedicated to helping you buy, sell,
            and rent properties with confidence.
          </p>
        </div>
      </section>

      {/* AGENTS */}
      <section className="px-4 py-16 mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <Agent key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Agents;
