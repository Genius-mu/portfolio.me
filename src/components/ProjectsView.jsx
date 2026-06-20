import { Link, useParams } from "react-router-dom";
import projects from "../utils/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github, ExternalLink } from "lucide-react";

const ProjectsView = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  // adjacent projects for the Prev/Next nav
  const currentIndex = projects.findIndex((p) => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const labelClass =
    "mb-4 text-xs font-semibold uppercase tracking-[2px] text-black/45";

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

  const gallery = (project.imgs || []).filter(
    (src) => src && src !== project.image,
  );

  return (
    // No bg → global DotField shows through, like the home sections
    <div className="min-h-screen">
      <div className="mx-auto w-[90%] sm:w-[85%] max-w-4xl pb-24 pt-4">
        {/* Back */}
        <Link
          to="/projects"
          className="mb-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/30 px-5 py-2.5 text-sm font-medium text-black/80 backdrop-blur-md shadow-md shadow-black/5 transition-all duration-300 hover:bg-white/50 hover:text-black"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        {/* Title + tagline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold tracking-[1px] text-black/90 sm:text-4xl xl:text-5xl">
            {project.title}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className={labelClass}>Description</h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed text-black/70 sm:text-base">
            {project.description}
          </p>
        </motion.section>

        {/* Technologies */}
        {project.stacks && project.stacks.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className={labelClass}>Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.stacks.map((tech, i) => (
                <span
                  key={i}
                  className="rounded-full border border-green-600/40 bg-green-600/10 px-4 py-1 text-sm font-medium text-green-700 transition-colors duration-200 hover:bg-green-600/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.section>
        )}

        {/* Actions */}
        <div className="mb-14 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group/cta relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-black px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-black/80"
          >
            <span className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <ExternalLink size={20} className="relative z-10" />
            <span className="relative z-10">Visit Project</span>
          </a>
        </div>

        {/* Cover image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-14 overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl shadow-black/10 backdrop-blur-md"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-auto w-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        )}

        {/* Gallery */}
        {gallery.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <h2 className={labelClass}>Gallery</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl shadow-black/10 backdrop-blur-md"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="h-auto w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Prev / Next */}
        <div className="flex items-center justify-between gap-4 border-t border-black/10 pt-8">
          {prevProject ? (
            <Link
              to={`/project/${prevProject.id}`}
              className="group flex min-w-0 items-center gap-2 text-black/60 transition-colors hover:text-black"
            >
              <ArrowLeft
                size={20}
                className="shrink-0 transition-transform duration-200 group-hover:-translate-x-1"
              />
              <span className="min-w-0 text-left">
                <span className="block text-xs uppercase tracking-wide opacity-60">
                  Previous
                </span>
                <span className="hidden md:block font-medium truncate">
                  {prevProject.title}
                </span>
              </span>
            </Link>
          ) : (
            <span />
          )}

          {nextProject ? (
            <Link
              to={`/project/${nextProject.id}`}
              className="group flex min-w-0 items-center gap-2 text-right text-black/60 transition-colors hover:text-black"
            >
              <span className="min-w-0 text-right">
                <span className="block text-xs uppercase tracking-wide opacity-60">
                  Next
                </span>
                <span className="hidden md:block font-medium truncate">
                  {nextProject.title}
                </span>
              </span>
              <ArrowRight
                size={20}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsView;
