import React, { useEffect, useRef } from "react";
// import profilePic from "../assets/vinay_image.jpg";
import profilePic from "../assets/profile_front.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import resume from "../assets/Vinay Kotiya (MERN Stack) resume.pdf";
import resume from "../assets/Vinay Kotiya (Software Developer) resume.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  // var { text } = useTypewriter({
  //   words: [
  //     "Front-end Developer",
  //     "MERN Stack Developer",
  //     "Freelancer",
  //     "React Developer",
  //     "Web Developer",
  //   ],
  //   loop: true,
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "Freelancer", "React.JS Developer"],
    loop: true, // Animation loops infinitely
    typeSpeed: 120, // Typing speed (in ms)
    deleteSpeed: 50, // Deleting speed (in ms)
    delaySpeed: 1500, // Delay between words (in ms)
  });
  // alert(text);
  const heroCon = useRef(null);
  const heroImg = useRef(null);
  useEffect(() => {
    // gsap.from(heroCon.current, {
    //   y: 100,
    //   // opacity: 0,
    //   duration: 1,
    //   // ease: "power2.out",
    gsap.fromTo(
      heroCon.current,
      { opacity: 0, y: 100 }, // Starting values
      {
        opacity: 1,
        y: 0,
        duration: 1,
        // scrollTrigger: {
        //   trigger: heroCon.current, // Element to trigger animation
        //   start: "top 80%", // Trigger when top of element hits 80% of viewport
        //   end: "top 50%", // End when top hits 50% of viewport
        //   scrub: true, // Smooth scrubbing effect
        // },
      }
    );
    gsap.fromTo(
      heroImg.current,
      { opacity: 0, x: 100 }, // Starting values
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <div className="h-full m-5">
      <div className="h-[85%]  flex justify-around items-center md:flex-row">
        <span ref={heroCon} className=" gap-10 justify-start">
          {/* <img
            ref={heroImg}
            className="right-0 h-[50%] md:hidden rounded-full bg-black  text-center "
            src={profilePic}
          /> */}
          <span className="flex justify-center items-center">
            <img
              ref={heroImg}
              className="w-60 h-60 rounded-full md:hidden bg-black object-cover border-2 border-black shadow-md shadow-[#ffbd59] hover:shadow-lg hover:shadow-[#ffbd59]"
              src={profilePic}
            />
          </span>

          {/* <h1 className=" text-4xl my-4">Welcome to Portfolio </h1> */}
          <h1 className="text-3xl md:text-5xl my-4 text-[#ffbd59]  drop-shadow-[0.5px_2px_2px_rgba(1,1,1,1)]">
            {/* I'm a Full Stack Developer */}I am{" "}
            <span className="text-4xl md:text-5xl my-4 text-[#ffbd59] font-semibold">
              {/* {text} */}
              Vinay Kotiya
            </span>
            {/* <Cursor /> */}
          </h1>

          <h2 className=" text-xl my-4 max-w-screen-md">
            {/* I Love to create web animations and interactive website  */}
            {/* Hi, I'm Vinay Kotiya, a dedicated MERN Stack Developer passionate
            about building full-stack web applications that are not only
            functional but also visually engaging. With expertise in MongoDB,
            Express.js, React.js, and Node.js, I specialize in creating seamless
            user experiences and scalable backend systems. I also have a passion
            for creating attractive animations with GSAP, bringing websites to
            life with dynamic and interactive elements. My goal is to turn
            innovative ideas into dynamic digital solutions, blending creativity
            with technical precision to craft memorable user experiences. */}
            A Passionate Front-End Developer with hands-on experience in
            Next.js, NextAuth, React.js, ShadCN UI, and the MERN stack,
            specializing in building scalable, high-performance, and
            user-friendly web applications. Skilled at transforming Figma
            designs into responsive, pixel-perfect interfaces and enhancing user
            engagement with GSAP animations. Experienced in collaborating with
            Java Spring Boot backend teams, integrating RESTful APIs, and
            applying industry best practices in modern web development.
            Dedicated to delivering clean, maintainable code and turning
            creative ideas into impactful digital solutions.
          </h2>

          <button className="text-black mt-3   hover:shadow-md hover:shadow-[#ffbd59] border-black border-y-2  bg-[#ffbd59] hover:bg-[#ae7b2d] focus:ring-4 focus:outline-none focus:ring-[#ffbd59] font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center">
            <a
              href={resume}
              download="Vinay Kotiya (Software Developer) resume"
              className="flex justify-center items-center"
            >
              <h1 className="text-xl"> Resume</h1>
              <img
                className="h-5 ml-2"
                src="https://www.svgrepo.com/show/521613/download.svg"
              />{" "}
            </a>
          </button>

          {/* <img
            className="h-10"
            src="https://www.svgrepo.com/show/354000/linkedin-icon.svg"
          ></img> */}
        </span>
        <img
          ref={heroImg}
          className="right-0 h-[50%] md:h-[80%] hidden bg-black lg:flex sm:hidden text-center rounded-lg shadow-md shadow-[#ffbd59] hover:shadow-lg hover:shadow-[#ffbd59]  "
          src={profilePic}
        />
      </div>
    </div>
  );
};

export default Hero;
