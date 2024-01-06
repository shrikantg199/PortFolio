import photo from "../assets/photo.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { MdOutlineDocumentScanner } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";
import React from "react";
const TEXTS = [
  "Full Stack Web Developer.",
  "Mern Stack Developer.",
  "Thank You For Visiting.",
];
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      1500 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="py-16 min-h-[80vh] md:min-h-[85vh] flex items-center flex-col-reverse lg:flex-row gap-4 justify-center">
      <div className="flex flex-col gap-4 mx-6 text-left md:gap-6 2xl:w-1/3 xl:mx-0 ">
        <p className="text-3xl font-bold text-light-blue-500">Hey,</p>
        <p className="relative text-3xl font-bold md:text-5xl">
          I'm
          <span className="m-2 uppercase text-light-blue-500">Shrikant</span>
          <span className="m-2 uppercase text-light-blue-500">Gaikwad</span>
        </p>
        <p className="relative text-2xl font-black uppercase text-[#6b21a8] ">
          <h1>
            <TextTransition springConfig={presets.wobbly}>
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
          </h1>
        </p>
        <p className="relative text-base font-medium md:text-xl">
          Enthusiastic fresher MERN stack developer equipped with skills in
          MongoDB, Express.js, React.js, and Node.js. Strong ability to
          collaborate, solve problems.
          <br />
          Eager to learn and grow while making meaningful impacts.
        </p>

        <div className="flex flex-row justify-center gap-4 mt-5 md:justify-normal md:gap-6">
          <Link to={"/about"}>
            <Button
              variant="gradient"
              color="light-blue"
              className="flex items-center gap-2"
            >
              <FaUserTie className="text-lg" />
              About Me
            </Button>
          </Link>
          <Link to="#addresumelink" target="_blank">
            <Button
              variant="gradient"
              color="light-blue"
              className="flex items-center gap-2"
            >
              <MdOutlineDocumentScanner className="text-lg text-white" />
              Resume
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <img
          src={photo}
          alt="Shrikant Gaikwad"
          className="object-cover object-center ml-20 rounded-full cursor-pointer w-52 h-52 md:w-72 md:h-72 hover:shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
