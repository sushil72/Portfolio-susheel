import { useState } from "react";
import picture2 from "../assets/images/p3.png";
import { Link } from "react-scroll";
const About = () => {
  return (
    <div className="bg-slate-900" id="about">
      <div className="py-20">
        <div>
          <h2 className="text-4xl text-center py-4 font-semibold text-white ">
            About Me
          </h2>
        </div>
        {/* main div */}
        <div className="container flex flex-col lg:flex-row mt-5 px-8 py-8">
          {/* image  */}
          <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0 ">
            <img
              src={picture2}
              alt=""
              className="animate-bob-slow rounded-full w-1/2 lg:w-1/2 bg-slate-700 shadow-md shadow-white transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
            <h2 className="text-white text-4xl text-center lg:text-left">
              Spring Boot & React Developer
            </h2>
            <p className="text-white mt-6 px-8 text-center lg:text-left">
              Hello! I'm Susheel Kumar, a dedicated Spring Boot & React
              Developer with a passion for creating innovative and efficient web
              applications. With a strong background in both back-end and
              front-end development, I bring a holistic approach to building
              robust and scalable software solutions.
            </p>
            <p className="text-white mt-6 px-8 text-center lg:text-left">
              I am always open to new opportunities and collaborations. If
              you're looking for a dedicated and skilled developer to join your
              team or work on an exciting project, feel free to reach out to me.
              Let's build something amazing together!
            </p>
            <div className="mt-10">
              <Link
                to="contacts"
                smooth={true}
                duration={500}
                className="px-4 py-2 text-white hover:bg-red-600 bg-red-500 rounded-lg cursor-pointer"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
