import { Link } from "react-router-dom";
import realProjects from "../utils/projects";
import { motion } from "framer-motion";

const Projects = () => {
  const fadeVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.95 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.95 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <section className="sec3 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
        <div className="w-[80%] h-full flex flex-col justify-center gap-y-9 items-center">
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="font-semibold text-4xl tracking-[1px] text-center">
              Projects That Speak for Me
            </h2>
          </div>
          <div className="md:w-[90%] xl:w-[80%] sm:w-full h-full grid grid-cols-1 sm:grid-cols-2 justify-center gap-8 items-center">
            {realProjects.map((project, index) => (
              <>
                <motion.div
                  key={project}
                  variants={fadeVariants}
                  initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col gap-y-2 rounded-2xl p-5 w-full h-[25em] border border-black/40"
                >
                  <div className="w-full h-[60%] rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full hover:scale-109 transition-all duration-300 ease-in-out object-center"
                    />
                  </div>
                  <h2 className="font-bold text-2xl tracking-[1px]">
                    {project.title}
                  </h2>
                  <p className="text-black/70 text-[16px] line-clamp-2">
                    {project.description}
                  </p>
                  <Link
                    to={project.live}
                    target="_blank"
                    className="font-semibold text-black w-[60%] text-[16px] bg-black/8 py-3 rounded-2xl px-4 hover:px-7 flex gap-x-4 transition-all duration-300 ease-in-out hover:bg-black/10"
                  >
                    View <span>{">"}</span>
                  </Link>
                </motion.div>
              </>
            ))}
          </div>
          <Link
            to="/"
            className="font-semibold text-white w-fit text-[16px] bg-black py-3 rounded-2xl px-9 hover:px-7 flex gap-x-4 transition-all duration-300 ease-in-out hover:bg-black/80"
          >
            {"<"} Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
