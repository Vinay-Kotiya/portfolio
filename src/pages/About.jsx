import React from "react";

const About = () => {
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div id="about" className=" m-3 md:h-screen  flex  items-center flex-col">
        <h1 className="text-4xl md:text-5xl my-4 text-[#ffbd59]">About</h1>
        <p className=" text-sm md:text-xl md:mx-10 my-4 text-gray-400 ">
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
        <h1 className="text-4xl md:text-5xl my-4 text-[#ffbd59]"> Education</h1>
        <span className="flex justify-center items-start flex-col">
          <h2 className=" text-lg md:text-2xl md:mx-10 my-4 text-gray-100 ">
            Bachelor of Computer Applications (BCA)
          </h2>
          <h3 className=" text-lg md:text-xl md:mx-10 my-4 text-gray-100 ">
            Dr. V. R. Godhaniya IT College, Porbandar
          </h3>
          <h3 className=" text-lg md:text-xl md:mx-10 my-4 text-gray-100 ">
            2023 - Present
          </h3>
          <li className=" text-sm md:text-xl md:mx-10 my-4 text-gray-400 ">
            Pursuing a degree in computer applications with a focus on web
            development, programming, and database management.
          </li>
          <li className=" text-sm md:text-xl md:mx-10 my-4 text-gray-400 ">
            Actively involved in projects and learning advanced technologies
            like the MERN stack.
          </li>
        </span>
      </div>
    </>
  );
};

export default About;
