import { Moon, Sun, FileBarChart, Github, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeTog } from "../App";

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Header = () => {
  const { dark, setDark } = useContext(ThemeTog);

  return (
    <>
      <header className="w-full z-50 h-32 flex justify-center items-center relative">
        <div className="w-fit fixed p-3 rounded-2xl py-3 gap-x-2 border border-black/10 h-fit flex justify-between items-center bg-white/5 shadow-xl">
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

          {/* Liquid Glass Effects - Fixed layering */}
          <div
            className="absolute inset-0 backdrop-blur-[5px] rounded-2xl -z-10"
            style={{ filter: "url(#glass-distortion)" }}
          ></div>
          <div className="absolute inset-0 bg-white/1 rounded-2xl -z-10"></div>
          <div className="absolute inset-0 rounded-2xl -z-10 shadow-[inset_2px_2px_1px_rgba(255,255,255,0.5),inset_-1px_-1px_1px_rgba(255,255,255,0.5)]"></div>

          <div
            className={`w-fit pr-2 border-r ${
              dark ? "border-white/20" : "border-black/10"
            } h-full flex z-10`}
          >
            <Link
              to="/"
              className={`${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-black/70 hover:bg-black/5 hover:text-black/90"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out text-shadow-2xl`}
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </Link>
          </div>

          <nav
            className={`flex gap-x-2 pr-2 border-r ${
              dark ? "border-white/20" : "border-black/10"
            } z-10`}
          >
            <Link
              to="https://x.com/mustaphAdegbite"
              className={`${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-black/70 hover:bg-black/5 hover:text-black/90"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <Link
              to="https://github.com/Genius-mu"
              className={`${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-black/70 hover:bg-black/5 hover:text-black/90"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </Link>

            <a
              href="/resume.pdf"
              download="mustapha adegbite's resume.pdf"
              className={`${
                dark
                  ? "text-white hover:bg-white/10"
                  : "text-black/70 hover:bg-black/5 hover:text-black/90"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out`}
            >
              <FileBarChart className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
            </a>
          </nav>

          <a
            href="mailto:adegbitemustapha73@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white relative group/cta bg-black text-xs sm:text-base py-2 rounded-xl px-4 hover:px-5 sm:hover:px-6 transition-all duration-300 ease-in-out hover:bg-black/80 z-10 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="relative z-10">Hire me</span>
          </a>
        </div>

        <div className="fixed bottom-8 z-50">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${
              dark ? "bg-gray-700" : "bg-gray-200"
            } hover:shadow-lg`}
          >
            <div
              className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
                dark
                  ? "translate-x-6 bg-indigo-500"
                  : "translate-x-0.5 bg-yellow-400"
              } shadow-md`}
            >
              {dark ? (
                <Moon className="w-3 h-3 text-white" />
              ) : (
                <Sun className="w-3 h-3 text-white" />
              )}
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
