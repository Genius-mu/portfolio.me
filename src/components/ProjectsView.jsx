import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { ThemeTog } from "../App";

const ProjectsView = () => {
  const { dark } = useContext(ThemeTog);

  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2>Project Not Found!</h2>;
  }
  return (
    <>
      <section className="w-full py-10 min-h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[70%]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl mb-6"
          />

          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg mb-6">{project.description}</p>

          <div className="flex justify-between w-full">
            <div>
              <Link
                to={"/"}
                className={`font-semibold overflow-hidden text-white/80 hover:text-white bg-black/90 w-fit text-base py-3 rounded-2xl px-4 flex items-center gap-x-2 transition-all duration-300 ease-in-out`}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                to={project.live}
                rel="noopener noreferrer"
                className={`font-semibold overflow-hidden ${
                  dark
                    ? "text-[#f1f1f1] bg-white/10 shadow-lg"
                    : "text-black/90 bg-black/10"
                } w-fit text-base py-3 rounded-2xl px-4 hover:px-7 flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:bg-black/30`}
              >
                Live{" "}
                <span>
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>

              <Link
                to={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  dark
                    ? "text-[#f1f1f1] bg-white/10 shadow-lg"
                    : "text-white/90 bg-red-700"
                } hover:cursor-pointer rounded-[50%] flex justify-center items-center p-2 sm:px-4 transition-all duration-300 ease-in-out hover:backdrop-blur-xl`}
              >
                <Github className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
            </div>
            <div>
              <Link
                to={"/"}
                className={`font-semibold overflow-hidden text-white/80 hover:text-white bg-black/90 w-fit text-base py-3 rounded-2xl px-4 flex items-center gap-x-2 transition-all duration-300 ease-in-out`}
              >
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsView;
