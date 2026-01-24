import React from "react";
import { useParams } from "react-router-dom";
import projects from "../utils/projects";

const ProjectsView = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project Not Found!</h2>;
  }
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[70%]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl mb-6"
          />

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-6">{project.description}</p>

          <div className="flex gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black text-white rounded-xl"
            >
              Live Site
            </a>

            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border rounded-xl"
            >
              Source Code
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsView;
