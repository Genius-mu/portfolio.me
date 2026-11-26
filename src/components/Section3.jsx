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
        <div className="w-[90%] sm:w-[65%] h-full flex flex-col justify-center gap-y-6 items-start">
          <h2
            className={`font-semibold text-4xl tracking-[1px] text-center text-black/90`}
          >
            About Me
          </h2>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-300 hover:border-green-500 transition duration-200 text-[15px] sm:text-[16px] leading-7 text-black/70"
          >
            I'm Mustapha Adegbite, a frontend engineer and Physics undergraduate
            at the University of Lagos. I work mainly with{" "}
            <span className="text-black font-medium">
              React, Next.js, TypeScript and Tailwind
            </span>
            , and I care about interfaces that load fast, feel smooth and work
            on every screen size.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-300 hover:border-green-500 transition duration-200 text-[15px] sm:text-[16px] leading-7 text-black/70"
          >
            Most of what I know comes from shipping. I built{" "}
            <span className="text-black font-medium">Saim</span>, an embeddable
            AI sales agent (React, Express, MongoDB) that runs as the chat widget
            on this site;{" "}
            <span className="text-black font-medium">Navilag</span>, a campus
            navigation app for UNILAG students; and{" "}
            <span className="text-black font-medium">Padi</span>, an
            offline-first voice assistant for Nigerian senior citizens, built
            at a hackathon. I also build scroll-driven 3D websites for brands.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-300 hover:border-green-500 transition duration-200 text-[15px] sm:text-[16px] leading-7 text-black/70"
          >
            Right now I'm going deeper on backend and databases so I can
            take a product from idea to production on my own. I'm open to
            frontend roles, internships and freelance projects.
          </motion.p>

          <h2
            className={`font-semibold text-2xl tracking-[1px] text-center text-black/90`}
          >
            Let's connect and build something amazing together.
          </h2>
        </div>
      </section>
    </>
  );
};

export default Section3;
