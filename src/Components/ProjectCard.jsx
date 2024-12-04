/* eslint-disable react/prop-types */
import React from "react";
import gitIcon from "../assets/icons/github.png";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card bg-gray-300 rounded-lg shadow-lg transition transform hover:scale-105 w-80   mx-auto">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="text-xl p-4 font-semibold mt-4 text-black">
        {project.title}
      </h3>
      <p className="text-gray-900 mt-2 p-4">{project.description}</p>
      <div className="mt-4 flex justify-between p-4">
        {/* <a href={project.liveLink} className="text-blue-500 hover:underline">Live Demo</a> */}
        <a href={project.repoLink} className="text-blue-500 hover:underline">
          {" "}
          <i className="fa-brands fa-github text-4xl hover:text-red-500"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
