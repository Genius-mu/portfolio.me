import { Link } from "react-router-dom";
import projects from "../utils/products";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Section2 = () => {
  const { dark } = useContext(ThemeTog);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <section className="sec3 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
        {/* SVG Filter for Glass Effect */}
        <svg className="absolute w-0 h-0">
          <defs>
            <filter id="glass-distortion">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.01"
                numOctaves="3"
              />
              <feDisplacementMap in="SourceGraphic" scale="5" />
            </filter>
          </defs>
        </svg>

        <div className="w-[90%] sm:w-[80%] h-full flex flex-col justify-center gap-y-9 items-center">
          <div className="w-full h-full flex justify-center items-center">
            <h2
              className={`font-semibold text-4xl tracking-[1px] text-center ${
                dark ? "text-[#f1f1f1]" : "text-black/90"
              }`}
            >
              Projects That Speak for Me
            </h2>
          </div>

          <div className="md:w-[90%] xl:w-[80%] sm:w-full h-full grid grid-cols-1 sm:grid-cols-2 justify-center gap-7 items-center pt-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                className={`relative flex flex-col overflow-hidden justify-center items-center gap-y-3 rounded-2xl p-5 w-full h-fit border ${
                  dark
                    ? "border-[#f1f1f1] bg-white/5"
                    : "border-black/20 bg-white/30"
                } shadow-[-1px_-1px_1px_#999_inset]`}
              >
                {/* Liquid Glass Effects - Fixed layering */}
                <div
                  className="absolute inset-0 backdrop-blur-sm rounded-2xl -z-10"
                  style={{ filter: "url(#glass-distortion)" }}
                ></div>
                <div className="absolute inset-0 bg-white/2 rounded-2xl -z-10"></div>
                <div className="absolute inset-0 rounded-2xl -z-10 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_rgba(255,255,255,0.3)]"></div>

                <div className="w-full h-[50%] border border-black/30 shadow-xl rounded-2xl overflow-hidden z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full hover:scale-110 transition-all duration-300 ease-in-out object-cover object-center"
                  />
                </div>

                <h2
                  className={`font-bold w-full text-left text-xl tracking-[1px] z-10 ${
                    dark ? "text-[#f1f1f1]" : "text-black/90"
                  }`}
                >
                  {project.title}
                </h2>

                <p
                  className={`${
                    dark ? "text-white" : "text-black/90"
                  } text-base line-clamp-3 z-10`}
                >
                  {project.description}
                </p>

                <span className="w-full overflow-hidden flex items-center gap-x-2 z-10">
                  <Link
                    to={`/project/${project.id}`}
                    rel="noopener noreferrer"
                    className={`font-semibold overflow-hidden ${
                      dark
                        ? "text-[#f1f1f1] bg-white/10 shadow-lg"
                        : "text-black/90 bg-black/10"
                    } w-[40%] text-base py-3 rounded-2xl px-4 flex items-center gap-x-2 transition-all group duration-300 ease-in-out hover:bg-black/30`}
                  >
                    View{" "}
                    <span>
                      <ArrowRight className="w-5 h-5 group-hover:ml-3 duration-200" />
                    </span>
                  </Link>

                  {/* <Link
                    to={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      dark
                        ? "text-[#f1f1f1] bg-white/10 shadow-lg"
                        : "text-black/90 bg-black/10"
                    } py-2 rounded px-2 sm:px-4 hover:px-4 sm:hover:px-7 transition-all duration-300 ease-in-out hover:backdrop-blur-xl`}
                  >
                    <Github className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Link> */}
                </span>
              </motion.div>
            ))}
          </div>

          <Link
            to="/projects"
            className="font-semibold text-white w-fit text-base bg-black py-3 rounded-2xl px-9 hover:px-7 flex items-center gap-x-4 transition-all duration-300 ease-in-out hover:bg-black/80"
          >
            View All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Section2;
