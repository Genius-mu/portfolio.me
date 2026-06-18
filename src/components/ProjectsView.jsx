import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectsView = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center backdrop-blur-md bg-white/30 border border-white/40 rounded-3xl px-10 py-12 shadow-lg shadow-black/10">
          <h1 className="text-5xl font-bold mb-3 tracking-[1px] text-black/90">
            404
          </h1>
          <p className="text-lg mb-8 text-black/60">Project not found.</p>
          <Link
            to="/projects"
            className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-black/80"
          >
            <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ArrowLeft size={18} className="relative z-10" />
            <span className="relative z-10">Back to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    // No bg here — let the global DotField show through like the home sections
    <div className="min-h-screen">
      <div className="mx-auto w-[90%] sm:w-[80%] max-w-5xl pb-24 pt-4">
        {/* Glass back button */}
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/30 px-5 py-2.5 text-sm font-medium text-black/80 backdrop-blur-md shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/50 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12"
        >
          <h1 className="mb-4 overflow-hidden text-2xl font-bold tracking-[1px] text-black/90 sm:text-3xl xl:text-4xl">
            {project.title}
          </h1>
          <p className="mb-8 text-justify text-[14px] text-black/70 sm:text-[16px]">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-black/80"
            >
              <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <ExternalLink size={20} className="relative z-10" />
              <span className="relative z-10">View Live</span>
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/30 px-6 py-3 font-medium text-black/80 backdrop-blur-md transition-all duration-300 hover:bg-white/50 hover:text-black"
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </motion.div>

        {/* Gallery */}
        {project.imgs && project.imgs.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 text-2xl font-bold tracking-[1px] text-black/90">
              Gallery
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.imgs.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl shadow-black/10 backdrop-blur-md"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-auto w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {project.stacks && project.stacks.length > 0 && (
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-[1px] text-black/90">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stacks.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-green-600/30 bg-green-600/10 px-4 py-2 text-sm font-medium text-green-700 transition-colors duration-200 hover:bg-green-600/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsView;
