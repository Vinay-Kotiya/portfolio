import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import myImage from "../assets/vinaykotiya_logo.png";
import dayImg from "../assets/day-of-sun.svg";
import nightImg from "../assets/moon-stars.svg";
import { motion, useScroll } from "motion/react";

const Navbar = () => {
  const menuCon = useRef(null);
  const menuIconIn = useRef(null);
  const menuIconOut = useRef(null);
  const menuList = useRef(null);
  // State to hold the current icon
  const [icon, setIcon] = useState(dayImg); // Default to day icon

  const logo = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      logo.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      menuList.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      menuIconIn.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
      }
    );

    const menuComeAnimation = () => {
      // alert("animation call");
      const page = menuCon.current;
      gsap.set(page, {
        display: "flex",
        x: 500,
        opacity: 1,
      });

      gsap.to(page, {
        x: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    const menuOutAnimation = () => {
      // alert("animation call");
      const page = menuCon.current;

      // Animate menu out
      gsap.to(page, {
        x: 500,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          // Hide menu after animation
          gsap.set(page, {
            display: "none",
          });

          // gsap.set(".menuListAnimation", {
          //   display: "none",
          // });
        },
      });
    };

    const menuIn = menuIconIn.current;
    menuIn.addEventListener("click", menuComeAnimation);
    const menuOut = menuIconOut.current;
    menuOut.addEventListener("click", menuOutAnimation);
    const allMenuLinks = document.querySelector(".menuListAnimation");
    allMenuLinks.addEventListener("click", menuOutAnimation);

    return () => {
      menuIn.removeEventListener("click", menuComeAnimation);
      menuOut.removeEventListener("click", menuOutAnimation);
      allMenuLinks.removeEventListener("click", menuOutAnimation);
    };
  }, []);

  // const button = document.querySelector(".btn");
  // const Icon = document.querySelector(".Icon");
  // const day = dayImg;
  // const night = nightImg;
  // button.addEventListener("click", function () {
  //   if (Icon.src.includes(night)) {
  //     Icon.src = day;
  //   } else {
  //     Icon.src = night;
  //   }
  // });
  // Toggle function to switch icons
  const toggleIcon = () => {
    setIcon((prevIcon) => (prevIcon === dayImg ? nightImg : dayImg));
    if (icon == dayImg) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      // alert("day mode");
    } else {
      // alert("night mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };
  const scrollProgress = useScroll().scrollYProgress;

  return (
    <>
      <motion.div
        style={{ scaleX: scrollProgress }}
        className="md:h-2 h-1 rounded z-50 bg-[#ffbd59] w-full fixed top-0 origin-left left-0"
      ></motion.div>
      <div
        ref={menuCon}
        className="absolute bg-black z-50 hidden  h-screen w-full flex flex-col"
      >
        <span className="m-10 flex  justify-end">
          <img
            ref={menuIconOut}
            className="h-10 md:hidden "
            src="https://www.svgrepo.com/show/371143/close.svg"
          />
        </span>
        <div className="flex w-full">
          <ul className="menuListAnimation flex gap-1 flex md:hidden flex-col justify-center items-center w-full drop-shadow-[0.5px_2px_2px_rgba(1,1,1,1)]">
            {["Home", "About", "Skills", "Projects", "Contact"].map(
              (link, index) => (
                <>
                  <li
                    key={index}
                    className="border-2 border-[#ffbd59] hover:border-black hover:text-black hover:bg-[#ffbd59] hover:shadow-md hover:shadow-slate-700 rounded-full  w-full text-center p-3 text-[#ffbd59]"
                  >
                    <Link
                      to={`${link.toLowerCase()}`}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={700}
                      className=" text-5xl font-bold md:text-base relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-[#ffbd59] after:left-0 after:bottom-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                    >
                      {link}
                    </Link>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="py-5 flex md:justify-around justify-between items-center px-5">
        <img
          src={myImage}
          ref={logo}
          className="h-16   drop-shadow-[0_5px_7px_rgba(0,0,0)] "
        />

        <span className="flex gap-5  md:hidden">
          <button onClick={toggleIcon} className="btn">
            <img className=" h-8  " src={icon} />
          </button>
          <img
            ref={menuIconIn}
            className="h-10"
            src="https://www.svgrepo.com/show/474904/menu.svg"
          />
        </span>
        <ul ref={menuList} className="flex gap-5 hidden md:flex ">
          {/* <a href="about">
          <li className="list-none">About</li>
        </a>
        <a href="">
          <li className="list-none">Skills</li>
        </a>
        <a href="">
          <li className="list-none">Projects</li>
        </a>
        <a href="">
          <li className="list-none">Contact</li>
        </a> */}
          {["Home", "Experience", "Skills", "Projects", "Contact"].map(
            (link, index) => (
              <li key={index}>
                <Link
                  to={`${link.toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  className="text-2xl text-[#fec166] drop-shadow-[0_1px_1px_rgba(1,1,1,1)] hover:text-[#d5993e] font-bold gap-7  relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-[#ffbd59] after:left-0 after:bottom-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  {link}
                </Link>
              </li>
            )
          )}
          <button onClick={toggleIcon} className="btn">
            <img className=" h-8 " src={icon} />
          </button>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
