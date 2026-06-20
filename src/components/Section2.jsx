import { Link } from "react-router-dom";
import projects from "../utils/products";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

/* ---------- SpotlightCard ---------- */

const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  ...motionProps
}) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = divRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--spotlight-color", spotlightColor);

    const rotateX = (y - rect.height / 2) / 10;
    const rotateY = (rect.width / 2 - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = divRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative isolate overflow-hidden transition-transform duration-200 ease-out group/spot ${className}`}
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
        "--spotlight-color": spotlightColor,
      }}
      {...motionProps}
    >
      {/* Spotlight overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-60 group-focus-within/spot:opacity-60"
        style={{
          background:
            "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)",
        }}
      />
      {children}
    </motion.div>
  );
};

/* ---------- Section2 (home preview) ---------- */

const Section2 = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="sec3 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
      <div className="w-[90%] xl:w-[80%] sm:w-full h-full flex flex-col justify-center gap-y-9 items-center">
        <div className="w-full flex justify-center items-center">
          <h2 className="font-semibold text-4xl tracking-[1px] text-center text-black/90">
            Projects That Speak for Me
          </h2>
        </div>

        <div className="md:w-[90%] xl:w-[90%] sm:w-full w-full px-[5%] py-4 grid grid-cols-1 sm:grid-cols-2 justify-center gap-7 items-stretch">
          {projects.map((project, index) => (
            <SpotlightCard
              key={project.id || index}
              spotlightColor={"rgba(30, 60, 21, 0.4)"}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-y-3 rounded-2xl p-5 w-full h-fit border border-black/20 bg-white/40 [content-visibility:auto] [contain-intrinsic-size:auto_380px]"
            >
              {/* Lightweight glass edge — no backdrop-filter, no SVG filter */}
              <div className="absolute inset-0 rounded-2xl -z-10 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.1),inset_-1px_-1px_1px_rgba(255,255,255,0.3)] backdrop-blur-xl" />

              <div className="w-full aspect-[16/10] border border-black/30 shadow-xl rounded-2xl overflow-hidden z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <h2 className="font-bold w-full text-left text-xl tracking-[1px] z-10 text-black/90 line-clamp-1 break-words">
                {project.title}
              </h2>

              <p className="w-full text-black/90 text-base line-clamp-3 break-words z-10">
                {project.description}
              </p>

              <span className="w-full flex items-center gap-x-2 z-10">
                <Link
                  to={`/project/${project.id}`}
                  rel="noopener noreferrer"
                  className="font-semibold text-black/90 bg-black/10 w-[40%] text-base py-3 rounded-2xl px-4 flex items-center gap-x-2 transition-all group duration-300 ease-in-out hover:bg-black/30"
                >
                  View{" "}
                  <span>
                    <ArrowRight className="w-5 h-5 group-hover:ml-3 duration-200" />
                  </span>
                </Link>
              </span>
            </SpotlightCard>
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
  );
};

export default Section2;
