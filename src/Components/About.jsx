import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-2 pb-10 md:flex-row">
      <div className="p-6 font-serif text-justify md:w-1/2">
        <h1 className="mt-2 mb-5 text-2xl font-bold text-center border-b-2 border-light-blue-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl">
          My Name is <b>Shrikant Gaikwad</b>. I am an electronics &
          communication engineering graduate with expertise in{" "}
          <b>Full-stack web development.</b> He has hands-on experience building
          responsive applications using{" "}
          <b>JavaScript, React, Node.js and MongoDB.</b>
          <br />
          <br />I have demonstrated strong technical skills including{" "}
          <b>frontend development</b> with React, backend development with
          Node.js and Express, and database management with MongoDB. I am adept
          at crafting intuitive user interfaces and optimizing performance.
          <br />
          <br />I have spearheaded innovative projects such as a{" "}
          <b>real-time chat room </b>
          web app that increased user engagement 40% and reduced login times
          30%. I also built a <b>MERN job portal </b> that streamlined the job
          search process and boosted user engagement 40%.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
