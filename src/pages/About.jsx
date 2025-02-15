import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const about = useRef(null);

  useGSAP(() => {
    const firstPart = document.querySelectorAll(".firstPart");
    gsap.fromTo(
      firstPart,
      { opacity: 0, y: 100, scale: 0.8 }, // Starting values
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: about.current, // Element to trigger animation
          start: "top 70%", // Trigger when top of element hits 80% of viewport
          end: "top 40%", // End when top hits 50% of viewport
          scrub: true, // Smooth scrubbing effect
          // once: true, // Only once
          // markers: true,
        },
      }
    );
    const GAni = document.querySelectorAll(".GAni");
    gsap.fromTo(
      GAni,
      { opacity: 0, y: 100, scale: 0.8 }, // Starting values
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: about.current, // Element to trigger animation
          start: "top 30%", // Trigger when top of element hits 80% of viewport
          end: "top 0%", // End when top hits 50% of viewport
          scrub: true, // Smooth scrubbing effect
          // once: true, // Only once
          // markers: true,
        },
      }
    );
  }, []);
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div
        ref={about}
        id="about"
        className=" m-3   flex  items-center flex-col"
      >
        <h1 className="firstPart text-4xl md:text-5xl my-4 text-[#ffbd59] drop-shadow-[0_1px_1px_rgba(1,1,1,1)]">
          About
        </h1>
        <p className="firstPart text-sm md:text-xl md:mx-10 my-4  ">
          Hi there! I'm Vinay, a passionate and creative web developer with a
          strong foundation in front-end development and full-stack expertise
          using the MERN stack. With skills in HTML, CSS, JavaScript, ReactJS,
          and GSAP, I thrive on creating visually stunning and interactive
          websites that deliver exceptional user experiences. As a MERN Stack
          Developer, I bring together MongoDB, Express.js, ReactJS, and Node.js
          to build robust and scalable web applications. My love for animations
          drives me to craft dynamic and engaging interfaces, using tools like
          GSAP to bring ideas to life. I am eager to enhance my skills and stay
          updated with the latest technologies. I'm actively seeking an
          internship to gain hands-on industry experience and collaborate on
          innovative projects. When I’m not coding, you’ll find me exploring new
          animation techniques, learning cutting-edge web technologies, or
          brainstorming creative solutions to complex problems.
          <br /> Let's build something amazing together!
        </p>
        <h1 className="GAni text-4xl md:text-5xl my-4 text-[#ffbd59] drop-shadow-[0_1px_1px_rgba(1,1,1,1)]">
          Education
        </h1>
        <span className="GAni flex justify-center items-start flex-col">
          <h2 className=" text-lg md:text-2xl md:mx-10 my-4  underline ">
            Bachelor of Computer Applications (BCA)
          </h2>
          <h3 className=" text-lg md:text-xl md:mx-10 my-4  underline ">
            Dr. V. R. Godhaniya IT College, Porbandar
          </h3>
          <h3 className=" text-lg md:text-xl md:mx-10 my-4  underline ">
            2023 - Present
          </h3>
          <li className=" text-sm md:text-xl md:mx-10 my-4  ">
            Pursuing a degree in computer applications with a focus on web
            development, programming, and database management.
          </li>
          <li className=" text-sm md:text-xl md:mx-10 my-4  ">
            Actively involved in projects and learning advanced technologies
            like the MERN stack.
          </li>
        </span>
      </div>
    </>
  );
};

export default About;
