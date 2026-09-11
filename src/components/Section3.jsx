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
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className={`max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-400 text-[14px] hover:border-green-400 transition duration-200 sm:text-[16px] text-black/70 sm:line-clamp-7 line-clamp-4 text-justify`}
          >
            I'm Mustapha Adegbite, a Frontend Engineer who builds complete web
            solutions with{" "}
            <span className={`text-black bg-blue-500/20`}>
              React, Next.js, Node.js, and modern databases (MongoDB,
              PostgreSQL).
            </span>{" "}
            I don't just implement designs or write backend code in isolation —
            I architect end-to-end systems where scalable APIs meet
            pixel-perfect frontends. Clean architecture, optimized databases,
            and interfaces that feel alive.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className={`max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-400 text-[14px] hover:border-green-400 transition duration-200 sm:text-[16px] text-black/70 sm:line-clamp-7 line-clamp-4 text-justify`}
          >
            My journey into full-stack development grew from shipping products
            end-to-end.{" "}
            <span className={`text-black`}>
              I built Saim — an embeddable AI sales agent with a{" "}
              <span className="bg-green-500/20">
                React frontend, Express backend, and MongoDB database that
                qualifies leads and captures contacts 24/7;{" "}
              </span>{" "}
              a reusable React component library with API integrations; and Padi
              — a multilingual, offline-first voice assistant with both frontend
              UI and backend NLP processing, designed for Nigerian senior
              citizens and built during a hackathon with accessibility at its
              core.
            </span>{" "}
            Every project pushed me to think beyond isolated layers — connecting
            databases to APIs to user interfaces, obsessing over performance,
            scalability, and real human impact.
          </motion.p>
          <motion.p
            variants={cardVariants}
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className={`max-w-[800px] pl-5 border-l-3 rounded-l-[3px] border-gray-400 hover:border-green-400 transition duration-200 text-[14px] sm:text-[16px] text-black/70 sm:line-clamp-7 line-clamp-4 text-justify`}
          >
            Great products live at the intersection of{" "}
            <span className={`text-black bg-red-500/20`}>
              robust APIs, optimal database queries, performance, accessibility,
              and emotion
            </span>{" "}
            — fast response times, efficient data handling, inclusive design,
            and interactions that feel human, not just functional. When I'm not
            shipping, I'm studying architecture patterns, database optimization,
            and what great builders do differently — then applying it across the
            stack.
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
