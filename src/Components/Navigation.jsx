import React from "react";
import { FaHome, FaLaptopCode, FaReact } from "react-icons/fa";
import { MdEmail, MdPersonOutline } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi";
import { Link } from "react-router-dom";

const Data = [
  {
    label: "Home",
    value: "Home",
    icon: FaHome,
    desc: "Home",
    src: "/",
  },
  {
    label: "About",
    value: "About",
    icon: MdPersonOutline,
    desc: "About",
    src: "/about",
  },
  {
    label: "Skills",
    value: "Skills",
    icon: FaLaptopCode,
    desc: "Skills",
    src: "/skills",
  },
  {
    label: "Projects",
    value: "Projects",
    icon: FaReact,
    desc: "Projects",
    src: "/projects",
  },
  {
    label: "Education",
    value: "Experience",
    icon: HiOutlineBriefcase,
    desc: "Experience",
    src: "/experience",
  },
  {
    label: "Contact",
    value: "Contact",
    icon: MdEmail,
    desc: "Contact",
    src: "/contact",
  },
];

const Navigation = () => {
  return (
    <section className="fixed bottom-0 z-50 items-center justify-center w-full xl:bottom-5 lg:flex">
      <div className="z-50 flex justify-center py-3 bg-white border border-gray-300 shadow-xl rounded-2xl md:gap-1">
        {Data.map(({ label, value, icon, src }) => (
          <Link to={src} key={value}>
            <div className="relative px-3 cursor-pointer group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full hover:text-blue-500">
                {React.createElement(icon, { className: "text-2xl" })}
              </div>
              <span className="absolute -top-8 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                {label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Navigation;
