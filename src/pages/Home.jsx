// import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LightRays from "../ReactBits/LightRays/LightRays";

const Home = () => {
  return (
    <div id="home" className="md:h-screen relative">
      <div className="h-full w-full absolute -z-50">
        <LightRays
          raysOrigin="top-center"
          raysColor="#fffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
