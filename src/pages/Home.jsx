import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div id="home" className="md:h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
