import { motion } from "framer-motion";

const Section3 = () => {
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
        <div className="sm:w-[65%] w-[80%] h-full flex flex-col justify-center gap-y-9 items-start">
          <h2 className="font-semibold text-4xl tracking-[1px] text-center">
            About Me
          </h2>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="max-w-[800px] text-black/60 pl-5 border-l-2 border-[#007BFF] text-[14px] sm:text-[16px]"
          >
            I specialize in using React and modern JavaScript (ES6+) to
            transform creative ideas and UI designs into clean, functional, and
            interactive applications. I enjoy bringing structure to design chaos
            — from styling with Tailwind CSS to integrating APIs that make web
            apps dynamic and alive.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="max-w-[800px] text-black/60 pl-5 border-l-2 border-[#007BFF] text-[14px] sm:text-[16px]"
          >
            I’m Mustapha Adegbite —{" "}
            <span className="text-black">
              a Frontend Developer who’s passionate about building
            </span>{" "}
            fast, responsive, and visually engaging web experiences.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="max-w-[800px] text-black/60 pl-5 border-l-2 border-[#007BFF] text-[14px] sm:text-[16px]"
          >
            My journey into frontend development started with curiosity —
            turning small ideas into projects,
            <span className="text-black">
              {" "}
              and projects into learning milestones. Each build helps me
              understand
            </span>{" "}
            not just how the web works, but how users feel when interacting with
            it.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="max-w-[800px] text-black/60 pl-5 border-l-2 border-[#007BFF] text-[14px] sm:text-[16px]"
          >
            <span className="text-black">
              I believe great web experiences are not just about visuals —
              they’re about performance
            </span>
            , accessibility, and the little animations that make people smile
            while using your app.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="max-w-[800px] text-black/60 pl-5 border-l-2 border-[#007BFF] text-[14px] sm:text-[16px]"
          >
            <span className="text-black underline">
              When I’m not coding, you’ll probably find me
            </span>{" "}
            learning new tools, exploring design trends, or documenting my dev
            journey on social media — sharing what I learn, what I build, and
            how I grow along the way.
          </motion.p>
          <h2 className="font-semibold text-2xl tracking-[1px] text-center">
            Let’s connect and create something amazing.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Section3;
