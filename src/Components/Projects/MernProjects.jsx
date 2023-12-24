import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { Link } from "react-router-dom";
import { MernProjectData } from "./ProjectData";

const MernProjects = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {MernProjectData.map(({ title, img, live, github, techstack }, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 p-4 rounded-lg w-96 bg-gray-50 drop-shadow-xl dark:bg-grey-800"
        >
          <div className="relative rounded-lg group bg-violet-50">
            <img
              alt="Project Image"
              className="object-cover object-top h-48 max-w-full max-h-full rounded-lg"
              src={img}
            />
            <div className="absolute top-0 flex items-center justify-center w-full h-full gap-4 transition-transform duration-200 ease-linear scale-x-0 bg-gray-800 rounded-lg group-hover:scale-100 bg-opacity-60">
              <Link
                to={live}
                target="_blank"
                className="p-2 text-black transition-all bg-white rounded-lg hover:bg-black hover:text-white"
              >
                <BiLinkExternal size={20} />
              </Link>

              <Link
                to={github}
                target="_blank"
                className="p-2 text-black transition-all bg-white rounded-lg hover:bg-black hover:text-white"
              >
                <FaGithub size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 my-2">
            <h3 className="text-xl font-medium text-center text-black">
              {title}
            </h3>
            <p className="text-sm text-center text-gray-600 align-middle">
              <span className="font-medium">Tech Stack:</span>
              {techstack}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MernProjects;
