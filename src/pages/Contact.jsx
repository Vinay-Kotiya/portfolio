import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import myImage from "../assets/vinaykotiya_logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const form = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
    emailjs
      .sendForm("service_rsleq5c", "template_51d8dux", form.current, {
        publicKey: "0yYQBhAQFfy7lqURr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  useGSAP(() => {
    const headingAnimation = document.querySelectorAll(".headingAnimation");
    gsap.fromTo(
      headingAnimation,
      { opacity: 0, y: 100, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingAnimation,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          // once: true,
          // markers: true,
        },
      }
    );
    const contactForm = document.querySelector(".contactForm");
    gsap.fromTo(
      contactForm,
      { y: 100, scale: 0.8, opacity: 0 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactForm,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
          once: true,
        },
      }
    );
  }, []);
  return (
    <>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div
        id="contact"
        className="h-screen flex justify-center flex-col items-center m-5 "
      >
        <h1 className=" headingAnimation text-4xl md:text-5xl my-4 text-[#ffbd59] drop-shadow-[0_1px_1px_rgba(1,1,1,1)]">
          Contact Me
        </h1>
        <h2 className="headingAnimation text-xl my-4 text-gray-400 text-center max-w-screen-md">
          Let's build something amazing together!
        </h2>

        <div className="contactForm bg-[#090C08] m-10 text-center w-[70%]  rounded shadow-sm shadow-[#ffbd59]">
          <form ref={form} onSubmit={sendEmail} className="m-3">
            <div className=" gap-6 mb-6">
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Full Name"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="email@gmail.com"
                name="from_email"
                required
              />
            </div>

            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your Message here..."
            ></textarea>

            <button
              type="submit"
              className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <footer className="bg-[#090C08] ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="https://vinaykotiyaportfolio.vercel.app"
                className="flex items-center"
              >
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                  <img id="vkLogo" src={myImage} className="h-16" />
                </span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Contact me
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">+992-404-1585</li>
                  {/* <li>vinaykotiya77@gmail.com</li> */}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://flowbite.com/" className="hover:underline">
                      Flowbite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/Vinay-Kotiya"
                      className="hover:underline "
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vinay-kotiya-a405b6316/"
                      className="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025 Vinay Kotiya . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/in/vinay-kotiya-a405b6316/"
                className="text-gray-500 hover:text-gray-900 mx-3 dark:hover:text-white"
              >
                <img
                  className="h-4"
                  src="https://www.svgrepo.com/show/450202/linkedin.svg"
                ></img>
              </a>
              <a
                href="https://github.com/Vinay-Kotiya"
                className="text-gray-500 hover:text-gray-900 mx-3 dark:hover:text-white"
              >
                <img
                  className="h-5"
                  src="https://www.svgrepo.com/show/450156/github.svg"
                ></img>
              </a>
              <a
                href="https://www.instagram.com/vinay_kotiya7714_/"
                className="text-gray-500 hover:text-gray-900 mx-3 dark:hover:text-white"
              >
                <img
                  className="h-5"
                  src="https://www.svgrepo.com/show/450186/instagram.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
