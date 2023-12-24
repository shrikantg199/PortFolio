import { Tooltip } from "@material-tailwind/react";

const Data = [
  {
    link: "https://www.linkedin.com/in/contactshrikantgaikwad/",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/shrikantg199",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tooltip: "Connect On Github",
  },

  {
    link: "mailto:mailto:shrikantg199@gmail.com",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-mail-1299-1100772.png?f=webp&w=256",
    tooltip: "Mail Us",
  },
];

const Social = () => {
  return (
    <section className="fixed z-20 flex-col hidden gap-3 xl:bottom-40 xl:left-4 2xl:bottom-80 2xl:left-10 lg:flex">
      {Data.map((item, index) => {
        return (
          <Tooltip
            key={index}
            color="lightBlue"
            placement="right"
            content={item.tooltip}
          >
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 text-2xl bg-gray-600 rounded-full bg-opacity-20 hover:bg-opacity-50"
            >
              <img src={item.icon} alt={item.tooltip} className="p-2" />
            </a>
          </Tooltip>
        );
      })}
    </section>
  );
};

export default Social;
