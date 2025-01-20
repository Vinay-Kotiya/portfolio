import React, { useRef } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import myImage from "../assets/vinaykotiya_logo.png";

const Navbar = () => {
  const menuCon = useRef(null);
  const menuIconIn = useRef(null);
  const menuIconOut = useRef(null);
  useGSAP(() => {
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
  return (
    <>
      <div
        ref={menuCon}
        className="absolute bg-black md:hidden hidden  h-screen w-full flex flex-col"
      >
        <span className="m-10 flex  justify-end">
          <img
            ref={menuIconOut}
            className="h-10 md:hidden "
            src="https://www.svgrepo.com/show/371143/close.svg"
          />
        </span>
        <div className="flex w-full">
          <ul className="menuListAnimation flex gap-1 flex md:hidden flex-col justify-center items-center w-full">
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
        {/* <h1 className="text-2xl font-bold"> */}
        <img src={myImage} className="h-16" />
        {/* </h1> */}
        <img
          ref={menuIconIn}
          className="h-10 md:hidden"
          src="https://www.svgrepo.com/show/474904/menu.svg"
        />
        <ul className="flex gap-5 hidden md:flex text-[#ffbd59]">
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
          {["Home", "About", "Skills", "Projects", "Contact"].map(
            (link, index) => (
              <li key={index}>
                <Link
                  to={`${link.toLowerCase()}`}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  className="text-4xl  font-thin md:text-base relative after:content-[''] after:absolute after:w-full after:h-[1.5px] after:bg-[#ffbd59] after:left-0 after:bottom-0 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                >
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
