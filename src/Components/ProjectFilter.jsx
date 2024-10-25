import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import projectsData from '../projectsData';

const ProjectFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="portfolio-section bg-gray-950 text-white py-10 px-4" id='portfolio'>
      <div className="container ">
        <h2 className="text-4xl font-semibold text-center mb-8">My Projects</h2>
        <div className="text-center mb-8">
          {['All', 'Frontend', 'Backend', 'Fullstack'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 mx-2 rounded ${
                selectedCategory === category ? 'bg-red-500' : 'bg-gray-700'
              } hover:bg-red-500 transition`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap  w-3/4 mx-auto gap-8 p-4">
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4"> */}

          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;
