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
      <section className="w-full py-2 sm:py-10 min-h-screen flex justify-center items-center">
        <div className="w-[90%] md:w-[70%]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl mb-6"
          />

          <h1
            className={`text-4xl ${dark ? "text-white/90" : "text-black/90"} font-bold mb-4 overflow-hidden`}
          >
            {project.title}
          </h1>
          <p
            className={`text-lg ${dark ? "text-white/90" : "text-black/90"} mb-6`}
          >
            {project.description}
          </p>

          {/* <div className="grid grid-cols-3 py-5 gap-2">
            {project.imgs.map((img, i) => (
              <div className="w-full rounded-xl h-[10em] overflow-hidden">
                <img
                  key={i}
                  src={img}
                  alt={`Project image ${i + 1}`}
                  className="object-cover h-full w-full duration-300 transition hover:scale-105"
                />
              </div>
            ))}
          </div> */}

          <div className="flex justify-start items-center w-full gap-x-3">
            <div>
              <Link
                to={"/"}
                className={`font-semibold overflow-hidden text-white/80 hover:text-white bg-black/90 w-fit text-base py-4 rounded-2xl px-7 flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:px-8`}
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="flex gap-4">
              <Link
                to={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold overflow-hidden ${
                  dark
                    ? "text-[#f1f1f1] text-shadow-[1px_1px_#444] bg-[#f1f1f1]/20 shadow-lg"
                    : "text-black/90 bg-black/10"
                } w-fit text-base py-3 rounded-2xl px-4 hover:px-6 flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:bg-black/30 sm:text-[16px] text-[13px]`}
              >
                Live{" "}
                <span>
                  <ArrowRight
                    className={`w-5 h-5 ${dark ? "text-shadow-[1px_1px_#000]" : "text-shadow-[0px_0px_#000]"}`}
                  />
                </span>
              </Link>

              <Link
                to={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  dark
                    ? "text-[#f1f1f1] bg-red-600 shadow-lg"
                    : "text-white/90 bg-black/90"
                } hover:cursor-pointer rounded-[50%] flex justify-center items-center h-fit p-3 sm:p-4 transition-all duration-300 ease-in-out hover:backdrop-blur-xl`}
              >
                <Github className="w-4 h-4 sm:w-6 sm:h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsView;
