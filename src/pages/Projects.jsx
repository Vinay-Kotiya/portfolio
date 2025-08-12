// import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import mysteryMessagesImage from "../assets/mystery_messages.png";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  // useGSAP(() => {
  //   const textEffectOnHover = () => {
  //     openText.style.display = "flex";
  //   };
  //   const removeTextEffect = () => {
  //     openText.style.display = "none";
  //   };
  //   const specialTextEffect = () => {
  //     openText.style.display = "flex";
  //   };
  //   const openText = document.querySelector(".openText");
  //   const textCon = document.querySelector(".textContainer");
  //   textCon.addEventListener("mouseover", textEffectOnHover);
  //   textCon.addEventListener("mouseout", removeTextEffect);
  //   openText.addEventListener("mouseover", textEffectOnHover);

  //   return () => {
  //     textCon.removeEventListener("mouseover", textEffectOnHover);
  //     textCon.removeEventListener("mouseout", removeTextEffect);
  //     openText.removeEventListener("mouseover", textEffectOnHover);
  //   };
  // }, []);
  useGSAP(() => {
    const HeadingPart = document.querySelectorAll(".HeadingPart");
    gsap.fromTo(
      HeadingPart,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: HeadingPart,
          start: "top 70%",
          end: "top 50%",
          scrub: true,
          once: true,
          // markers: true,
        },
      }
    );
    const Projects = document.querySelectorAll(".Projects");
    gsap.fromTo(
      Projects,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: HeadingPart,
          start: "top 70%",
          end: "top 50%",
          scrub: true,

          // markers: true,
        },
      }
    );
  }, []);

  const projectsDetails = [
    {
      projectName: "Mystery Messages",
      projectDescription: "Full Stack app with Next.Js & NextAuth ",
      screenSortUrl:
        "https://i.ibb.co/ns2MwQ1H/Screenshot-2025-08-13-004149.png",
      deployedUrl: "https://mysterymessagesbyvk.vercel.app/",
    },
    {
      projectName: "Quiz Game",
      projectDescription:
        "React.Js, Tailwind css, Spline (Project of Skillsvarz 0.1 Hackathon)",
      screenSortUrl:
        "https://i.ibb.co/HpLzJJzd/Screenshot-2025-08-13-004629.png",
      deployedUrl: "https://quizgamebyvk.vercel.app/",
    },
    {
      projectName: "Annapurna Restaurant",
      projectDescription:
        "React.Js, Tailwind css, ReactBits (Project of Skillsvarz 0.1 Hackathon)",
      screenSortUrl:
        "https://i.ibb.co/Y4tmBxVP/Screenshot-2025-08-13-004747.png",
      deployedUrl: "https://annapurnarestaurant.vercel.app/",
    },
    {
      projectName: "Drive Clone",
      projectDescription:
        " MongoDB,Express.js,React.js,Node.js and Cloudinary to store files ",
      screenSortUrl:
        "https://res.cloudinary.com/dlf4xspeq/image/upload/v1737270580/uploads/bgq58tbcb6yo1nm9ivld.png",
      deployedUrl: "https://driveclonemern.vercel.app",
    },
    {
      projectName: "AI Chat Bot (vnyAI)",
      projectDescription: "Develoed using MERN Stack with DeepSeek API",
      screenSortUrl:
        "https://res.cloudinary.com/dlf4xspeq/image/upload/v1743141304/uploads/dpyotcoldrgt3fm9tnpe.png",
      deployedUrl: "https://vnyai.vercel.app/",
    },
    {
      projectName: "Thirtysixstudio clone Creative website",
      projectDescription: "React.js,Tailwind Css,Canvas",
      screenSortUrl:
        "https://res.cloudinary.com/dlf4xspeq/image/upload/v1737289345/uploads/zfmjrj5epyjosdmcicfr.png",
      deployedUrl: "https://thirtysixstudioclone.vercel.app/",
    },
    {
      projectName: "Employee Management System",
      projectDescription: "React.js,Tailwind Css,Local Storage",
      screenSortUrl:
        "https://res.cloudinary.com/dlf4xspeq/image/upload/v1737289525/uploads/jvumn4uwkf9kuep9p4yu.png",
      deployedUrl: "https://emsbyvk.vercel.app/",
    },
    {
      projectName: "Chess Clock",
      projectDescription: "Developed Using DeepSeek AI ",
      screenSortUrl:
        " https://res.cloudinary.com/dlf4xspeq/image/upload/v1739619495/uploads/e8jdzxaxrq9byv1f2jg7.png",
      deployedUrl: "https://chessclockbyvk.vercel.app/",
    },
    {
      projectName: "CRUD Operations",
      projectDescription: "MERN Stack",
      screenSortUrl:
        "https://res.cloudinary.com/dlf4xspeq/image/upload/v1737301277/uploads/ufifry9fiawhiwpcgefb.png",
      deployedUrl: "https://crudinmern.vercel.app/",
    },
  ];
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div
        id="projects"
        className="  flex justify-center items-center flex-col m-4"
      >
        <h1 className="HeadingPart text-4xl md:text-5xl my-4 text-[#ffbd59] drop-shadow-[0_1px_1px_rgba(1,1,1,1)] ">
          My Projects
        </h1>
        <div className="HeadingPart bg-[#090a08] rounded h-full w-[80%] flex gap-10 flex-wrap justify-center">
          {projectsDetails.map((item, idx) => {
            return (
              <div
                key={idx}
                className="Projects bg-[#1B1B1E] rounded  md:w-1/4 m-2 shadow-sm shadow-[#ffbd59]"
              >
                <a href={item.deployedUrl} className="">
                  <span className="textContainer text-xl flex justify-center   items-center hover:opacity-50  ">
                    <span className="openText absolute hidden text-black  ">
                      Click To Open
                    </span>
                    <img className="w-full p-2  " src={item.screenSortUrl} />
                  </span>
                </a>
                <h2 className="text-center text-lg md:text-xl text-[#ffbd59] drop-shadow-[0_1px_1px_rgba(1,1,1,1)]">
                  {item.projectName}
                </h2>
                <p className=" text-sm md:text-sm text-center text-gray-400 ">
                  {item.projectDescription}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
