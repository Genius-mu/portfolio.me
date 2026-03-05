import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";
import { ThemeTog } from "../App";

const ProjectsView = () => {
  const { dark } = useContext(ThemeTog);
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // Find adjacent projects for navigation
  const currentIndex = projects.findIndex((p) => p.id === id);
  // const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  // const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${dark ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <div className="text-center">
          <h1
            className={`text-4xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}
          >
            404
          </h1>
          <p
            className={`text-xl mb-8 ${dark ? "text-gray-400" : "text-gray-600"}`}
          >
            Project Not Found!
          </p>
          <Link
            to="/"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
              dark
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${dark ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Header with back button */}
      <div
        className={`sticky top-0 z-10 backdrop-blur-md ${dark ? "bg-gray-900/80" : "bg-gray-50/80"} border-b ${dark ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
              dark
                ? "text-gray-400 hover:text-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project header */}
        <div className="mb-12 animate-fade-in">
          <h1
            className={`text-4xl overflow-hidden sm:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-gray-900"}`}
          >
            {project.title}
          </h1>
          <p
            className={`text-lg sm:text-xl overflow-hidden mb-8 ${dark ? "text-gray-400" : "text-gray-600"}`}
          >
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex overflow-hidden py-2 pb-4 flex-wrap gap-4">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-103 ml-2 ${
                dark
                  ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/50"
                  : "bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30"
              }`}
            >
              <ExternalLink size={20} />
              View Live
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                dark
                  ? "border-gray-700 hover:border-gray-600 text-gray-300 hover:bg-gray-800"
                  : "border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </div>

        {/* Project images gallery */}
        {project.imgs && project.imgs.length > 0 && (
          <div className="mb-12">
            <h2
              className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}
            >
              Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-6">
              {project.imgs.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden shadow-xl ${
                    dark
                      ? "bg-gray-800 shadow-gray-900/80"
                      : "bg-white shadow-gray-300/80"
                  }`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-auto object-cover transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies used */}
        {project.stacks && project.stacks.length > 0 && (
          <div className="mb-12">
            <h2
              className={`text-2xl font-bold mb-6 ${dark ? "text-white" : "text-gray-900"}`}
            >
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stacks.map((tech, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    dark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Navigation to adjacent projects */}
        {/*<div
          className={`flex justify-between items-center pt-12 border-t ${dark ? "border-gray-800" : "border-gray-200"}`}
        >
           {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className={`group flex items-center gap-2 transition-colors duration-200 ${
                dark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <ArrowLeft
                size={20}
                className="transition-transform duration-200 group-hover:-translate-x-1"
              />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wide opacity-60">
                  Previous
                </div>
                <div className="font-medium">{prevProject.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className={`group flex items-center gap-2 transition-colors duration-200 ${
                dark
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="text-right">
                <div className="text-xs uppercase tracking-wide opacity-60">
                  Next
                </div>
                <div className="font-medium">{nextProject.title}</div>
              </div>
              <ArrowRight
                size={20}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <div />
          )}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectsView;
