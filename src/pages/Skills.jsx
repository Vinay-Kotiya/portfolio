import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const containerRef = useRef(null);
  const frontendRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = container.innerHTML;
    container.innerHTML += content;
    gsap.to(container, {
      x: () => -container.scrollWidth / 2, // Scroll to the middle of the duplicated content
      duration: 10, // Adjust speed here
      ease: "none", // Ensures smooth, constant speed
      repeat: -1, // Infinite scrolling
    });
    const frontendCon = frontendRef.current;
    const frontendContent = frontendCon.innerHTML;
    frontendCon.innerHTML += frontendContent;
    gsap.to(frontendCon, {
      x: () => -frontendCon.scrollWidth / 2, // Scroll to the middle of the duplicated content
      duration: 10, // Adjust speed here
      ease: "none", // Ensures smooth, constant speed
      repeat: -1, // Infinite scrolling
    });
  }, []);

  const backendSkills = [
    {
      name: "Node.js",
      iconUrl: "https://www.svgrepo.com/show/376337/node-js.svg",
    },
    {
      name: "Express.js",
      iconUrl: "https://img.icons8.com/color/512/express-js.png",
    },
    {
      name: "MongoDB",
      iconUrl: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    {
      name: "Coudinary",
      iconUrl:
        "https://ps.w.org/cloudinary-image-management-and-manipulation-in-the-cloud-cdn/assets/icon-256x256.png?rev=2377259",
    },
    {
      name: "PHP",
      iconUrl: "https://www.svgrepo.com/show/373966/php.svg",
    },
    {
      name: "MySQL",
      iconUrl: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    },
    {
      name: "Git",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    },
    {
      name: "Github",
      iconUrl: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
    },
    {
      name: "SQL",
      iconUrl: "https://www.svgrepo.com/show/331761/sql-database-sql-azure.svg",
    },
  ];
  const frontend = [
    {
      name: "HTML",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",
    },
    {
      name: "CSS",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    },
    {
      name: "JavaScript",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      name: "ReactJS",
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    },
    {
      name: "Tailwind",
      iconUrl: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    {
      name: "Bootstrap",
      iconUrl: "https://img.icons8.com/?size=48&id=PndQWK6M1Hjo&format=png",
    },
    {
      name: "GSAP",
      iconUrl: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
    },
    {
      name: "Wordpress",
      iconUrl: "https://www.svgrepo.com/show/349568/wordpress.svg",
    },
  ];
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div
        id="skills"
        className="h-screen flex justify-center items-center flex-col mx-5 p
      -4"
      >
        <h1 className="text-4xl md:text-5xl my-4 text-[#ffbd59]  ">
          My Skills
        </h1>
        <hr className="w-[30%] my-8 bg-gray-200 border-1 dark:bg-gray-700"></hr>
        <h1 className="text-xl  md:text-2xl  text-[#ffbd59]">Front-end</h1>

        <div className="bg-[#1B1B1E] md:w-[60%] w-full  overflow-hidden m-4 rounded shadow-inner shadow-[#ffbd59]">
          <div ref={frontendRef} className="flex mx-4 gap-3 p-3  ">
            {frontend.map((item, idx) => {
              return (
                <span
                  key={idx}
                  className="border-2 border-[#ffbd59] rounded bg-[#090C08] p-2"
                >
                  <img className="h-30 min-w-20" src={item.iconUrl} />
                  <p className="text-center">{item.name}</p>
                </span>
              );
            })}
          </div>
        </div>
        <h1 className="text-xl  md:text-2xl  text-[#ffbd59]">Back-end</h1>
        <div className="bg-[#1B1B1E] md:w-[60%] w-full  overflow-hidden m-4 rounded shadow-inner shadow-[#ffbd59]">
          <div ref={containerRef} className="flex mx-4 gap-3 p-3  ">
            {backendSkills.map((item, idx) => {
              return (
                <span
                  key={idx}
                  className="border-2 border-[#ffbd59] rounded bg-[#090C08] p-2"
                >
                  <img className="h-30 min-w-20" src={item.iconUrl} />
                  <p className="text-center">{item.name}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
