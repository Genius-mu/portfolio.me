import { Link } from "react-router-dom";
import projects from "../utils/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Section2 = () => {
  const { dark } = useContext(ThemeTog);

  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -10, scale: 0.99 },
    hiddenRight: { opacity: 0, x: 10, scale: 0.99 },
    hiddenUp: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
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

          <div className="md:w-[90%] xl:w-[80%] sm:w-full h-full grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 items-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.id || index}
                variants={fadeVariants}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col overflow-hidden gap-y-2 rounded-2xl p-5 w-full h-[25em] border ${
                  dark
                    ? "border-[#f1f1f1] bg-white/5"
                    : "border-black/40 bg-white/30"
                }`}
              >
                {/* Liquid Glass Effects - Fixed layering */}
                <div
                  className="absolute inset-0 backdrop-blur-sm rounded-2xl -z-10"
                  style={{ filter: "url(#glass-distortion)" }}
                ></div>
                <div className="absolute inset-0 bg-white/2 rounded-2xl -z-10"></div>
                <div className="absolute inset-0 rounded-2xl -z-10 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_rgba(255,255,255,0.3)]"></div>

                <div className="w-full h-[50%] shadow-xl rounded-2xl overflow-hidden z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full hover:scale-110 transition-all duration-300 ease-in-out object-cover object-center"
                  />
                </div>

                <h2
                  className={`font-bold text-2xl tracking-[1px] z-10 ${
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
                    } w-[40%] text-base py-3 rounded-2xl px-4 hover:px-7 flex items-center gap-x-2 transition-all duration-300 ease-in-out hover:bg-black/30`}
                  >
                    View{" "}
                    <span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </span>
              </motion.div>
            ))}
          </div>

          <Link
            to="/"
            className="font-semibold text-white w-fit text-base bg-black py-3 rounded-2xl px-8 hover:px-7 flex items-center gap-x-4 transition-all duration-300 ease-in-out hover:bg-black/80"
          >
            <span> 
              <ArrowLeft className="w-5 h-5" />
            </span>
            Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default Section2;
