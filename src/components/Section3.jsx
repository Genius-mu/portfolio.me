import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Section3 = () => {
  const { dark } = useContext(ThemeTog);

  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -100, scale: 0.9 },
    hiddenRight: { opacity: 0, x: 100, scale: 0.9 },
    hiddenUp: { opacity: 0, y: 100, scale: 0.9 },
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
        <div className="w-[90%] sm:w-[65%] h-full flex flex-col justify-center gap-y-9 items-start">
          <h2
            className={`font-semibold text-4xl tracking-[1px] text-center ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/90"
            }`}
          >
            About Me
          </h2>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className={`max-w-[800px] pl-5 border-l-2 border-green-500 text-[14px] sm:text-[16px] ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/70"
            } sm:line-clamp-7 line-clamp-3`}
          >
            I’m Mustapha Adegbite, a Frontend Developer who builds fast,
            responsive, and visually engaging web experiences with{" "}
            <span
              className={`${
                dark
                  ? "text-white/50 font-semibold [text-shadow:1px_1px_1px_#111]"
                  : "text-black"
              }`}
            >
              {" "}
              React and modern JavaScript (ES6+).
            </span>{" "}
            I enjoy turning raw ideas and UI designs into clean, functional
            interfaces — bringing order to design chaos using Tailwind CSS,
            thoughtful component structure, and smooth micro-interactions that
            make apps feel alive.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className={`max-w-[800px] pl-5 border-l-2 border-green-500 text-[14px] sm:text-[16px] ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/70"
            } sm:line-clamp-7 line-clamp-3`}
          >
            My journey into frontend development grew from curiosity into
            real-world projects.{" "}
            <span
              className={`${
                dark
                  ? "text-white/50 font-semibold [text-shadow:1px_1px_1px_#111]"
                  : "text-black"
              }`}
            >
              I’ve built a reusable React component library focused on
              consistency and scalability, TimeDrip, a productivity-driven web
              app that balances performance with user experience, and Padi — a
              multilingual, offline-first voice assistant project built for
              Nigerian senior citizens, developed during a hackathon with
              accessibility and real human needs at its core.
            </span>{" "}
            Each project pushed me to think beyond visuals and focus on
            structure, performance, and usability.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className={`max-w-[800px] pl-5 border-l-2 border-green-500 text-[14px] sm:text-[16px] ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/70"
            } sm:line-clamp-7 line-clamp-3`}
            // style={{
            //   display: "-webkit-box",
            //   overflow: "hidden",
            //   WebkitBoxOrient: "vertical",
            //   WebkitLineClamp: "2",
            //   WebkitLineBreak: "2",
            // }}
          >
            I believe great web experiences live at the intersection of
            performance, accessibility, and emotion — fast load times, inclusive
            design, and{" "}
            <span
              className={`${
                dark
                  ? "text-white/50 font-semibold [text-shadow:1px_1px_1px_#111]"
                  : "text-black"
              }`}
            >
              subtle animations that make users smile without distracting them.
            </span>{" "}
            When I’m not coding, I’m learning new tools, exploring design
            trends, and documenting my developer journey by sharing what I
            build, what breaks, and how I improve along the way.
          </motion.p>

          <h2
            className={`font-semibold text-2xl tracking-[1px] text-center ${
              dark
                ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                : "text-black/90"
            }`}
          >
            Let’s connect and create something amazing.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Section3;
