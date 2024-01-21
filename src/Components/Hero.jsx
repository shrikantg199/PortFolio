import photo from "../assets/photo.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";
import React from "react";
const TEXTS = ["Full Stack Web Developer.", "Mern Stack Developer."];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="ml-1   py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-4 justify-center md:flex-row md:w-auto">
      <div className="flex flex-col gap-4 font-serif text-left md:gap-6 2xl:w-1/3 xl:mx-0 ">
        <p className="text-3xl font-bold text-transparent bg-gradient-to-r from-light-blue-600 via-blue-500 to-indigo-500 bg-clip-text">
          Hey,
        </p>

        <p className="relative font-bold md:text-5xl">
          I'm
          <span className="m-2 text-3xl text-transparent uppercase bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500 bg-clip-text">
            Shrikant
          </span>
          <span className="m-2 text-3xl text-transparent uppercase bg-gradient-to-r from-light-blue-400 via-blue-700 to-indigo-600 bg-clip-text">
            Gaikwad
          </span>
        </p>
        <p className="relative text-2xl font-black uppercase text-light-blue-500 ">
          <h1>
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </p>
        <p className="relative mt-3 text-base font-medium md:text-xl">
          <br />
          <br />
          Hands-on Experienced <b>Full-stack web developer</b> proficient in
          <b>JavaScript, React, Node.js, and MongoDB</b> . Demonstrates strong
          technical skills in crafting intuitive UIs and optimizing performance.
          Led innovative projects including a real-time chat app, quiz website,
          and job search platform.🧑🏻‍💻🌐💡
        </p>

        <div className="flex flex-row justify-center gap-4 mt-5 md:justify-normal md:gap-6">
          <Link to={"/about"}>
            <button className="flex justify-center items-center gap-2  w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6] text-lg">
              About Me
            </button>
          </Link>
          <Link to="#addresumelink" target="_blank">
            <button className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-xl hover:shadow-green-500 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6] text-xl">
              Resume
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={photo}
          alt="Shrikant Gaikwad"
          className="object-cover object-center p-[7px] ml-20 rounded-full cursor-pointer bg-gradient-to-r from-red-900 via-deep-purple-700 to-blue-900 w-52 h-52 md:w-72 md:h-72 hover:shadow-lg hover:scale-105 transition-all duration-300 md:flex md:items-center"
        />
      </div>
    </div>
  );
};

export default Hero;
