import React from "react";
import profilePic from "../assets/vinay_image.jpg";

const Hero = () => {
  return (
    <div className="h-full m-3">
      <div className="h-[85%]  flex justify-around items-center md:flex-row">
        <span className="gap-10 justify-start">
          {/* <h1 className=" text-4xl my-4">Welcome to Portfolio </h1> */}
          <h1 className="text-4xl md:text-5xl my-4 text-[#ffbd59]">
            I'm a MERN Stack Developer,
          </h1>
          {/* <h1 className=" text-5xl my-4 text-[#ffbd59]">
            MERN Stack developer
          </h1> */}
          {/* <h1 className=" text-4xl my-4">Freelancer</h1> */}
          <h2 className=" text-xl my-4 text-gray-400 max-w-screen-md">
            {/* I Love to create web animations and interactive website  */}
            Hi, I'm Vinay Kotiya, a dedicated MERN Stack Developer passionate
            about building full-stack web applications that are not only
            functional but also visually engaging. With expertise in MongoDB,
            Express.js, React.js, and Node.js, I specialize in creating seamless
            user experiences and scalable backend systems. I also have a passion
            for creating attractive animations with GSAP, bringing websites to
            life with dynamic and interactive elements. My goal is to turn
            innovative ideas into dynamic digital solutions, blending creativity
            with technical precision to craft memorable user experiences.
          </h2>
          <a href="https://drive.google.com/file/d/1n1zFjMJh93_ZXaIrUNRHGLCiGvy9cwQK/view?usp=drive_link">
            <button className="text-black mt-3  flex justify-center hover:shadow-md hover:shadow-[#ffbd59] border-black border-y-2 items-center bg-[#ffbd59] hover:bg-[#ae7b2d] focus:ring-4 focus:outline-none focus:ring-[#ffbd59] font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              <h1 className="text-xl"> Resume</h1>
              <img
                className="h-5 ml-2"
                src="https://www.svgrepo.com/show/521613/download.svg"
              />
            </button>
          </a>

          {/* <img
            className="h-10"
            src="https://www.svgrepo.com/show/354000/linkedin-icon.svg"
          ></img> */}
        </span>
        <img
          className="right-0 h-[50%] md:h-[80%] hidden md:flex text-center rounded-lg"
          src={profilePic}
        />
      </div>
    </div>
  );
};

export default Hero;
