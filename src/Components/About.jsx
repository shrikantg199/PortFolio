import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-2 pb-10 md:flex-row">
      <div className="p-6 text-justify md:w-1/2">
        <h1 className="mt-2 mb-5 text-2xl font-bold text-center border-b-2 border-light-blue-500">
          About Me
        </h1>
        <p className="text-lg md:text-xl">
          I am a passionate <b>Full Stack web Developer & MERN Dev.</b> with
          hands on experience in building innovative and scalable web
          applications.
          <br />
          <br />
          My Educational background includes a Bachelor of Engineering degree in
          Electronic and telecommunication Engineering from Pune,Maharashtra
          <br />
          <br />
          Results-oriented recent graduate in Java and JavaScript, specializing
          in full-stack development with proficiency in HTML5, CSS3, Node.js,
          Express.js, MongoDB, and React. Adept at translating conceptual ideas
          into tangible, user-friendly applications.
          <br />
          <br />
          Solid foundation in software testing, version control, and database
          management. Possesses strong communication, teamwork, and creative
          problem-solving skills. Eager to leverage academic knowledge and
          practical experience to contribute to dynamic software projects as a
          dedicated full-stack developer.
        </p>
      </div>
    </div>
  );
};

export default About;
