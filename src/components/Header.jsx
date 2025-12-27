import { Moon, Sun, FileBarChart, Github, Home, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Header = () => {
  // const { dark } = useContext(ThemeTog);
  const { dark, setDark } = useContext(ThemeTog);

  return (
    <>
      <header className="w-full z-50 h-[8em] flex justify-center items-center relative">
        <div className="w-fit fixed p-3 rounded-2xl py-3 gap-x-2 border border-black/10 h-fit flex justify-between items-center bg-white/20 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-150 shadow-[(1px_1px_9px_#000_inset), (0_8px_32px_0_rgba(255,255,255,0.1))]">
          <div className="w-fit pr-2 border-r border-black/10 h-full flex">
            <Link
              to="/"
              className={`${
                dark
                  ? "text-white hover:bg-white/1"
                  : "text-black/70 hover:bg-[#f1f1f1]/60"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out hover:backdrop-blur-2xl group-hover/resume:scale-110 group-hover/resume:-rotate-12 hover:backdrop-saturate-150 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-y-hidden`}
            >
              <Home
                className={`w-3 h-3 sm:w-5 sm:h-5`}
                strokeWidth={`${dark ? 2 : 2}`}
              />
            </Link>
          </div>
          <nav className="flex gap-x-2 pr-2 border-r border-black/10">
            <Link
              to="https://x.com/mustaphAdegbite"
              className={`${
                dark
                  ? "text-white hover:bg-white/1"
                  : "text-black/70 hover:bg-[#f1f1f1]/60"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out hover:backdrop-blur-2xl group-hover/resume:scale-110 group-hover/resume:-rotate-12 hover:backdrop-saturate-150 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-y-hidden`}
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1227"
                fill="currentColor"
                className={`w-3 h-3 sm:w-4 sm:h-4`}
                strokeWidth={`${dark ? 3 : 1}`}
              >
                <path d="M714 519L1161 0h-109L671 420 426 0H0l464 726L0 1226h109l417-463 262 463h426z" />
              </svg>
              {/* <Twitter className={`w-3 h-3 sm:w-5 sm:h-5`} strokeWidth={`${dark ? 3 : 1}`} /> */}
            </Link>
            <Link
              to="https://github.com/Genius-mu"
              className={`${
                dark
                  ? "text-white hover:bg-white/1"
                  : "text-black/70 hover:bg-[#f1f1f1]/60"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out hover:backdrop-blur-2xl group-hover/resume:scale-110 group-hover/resume:-rotate-12 hover:backdrop-saturate-150 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-y-hidden`}
              target="_blank"
            >
              <Github
                className={`w-3 h-3 sm:w-5 sm:h-5`}
                strokeWidth={`${dark ? 2 : 2}`}
              />
            </Link>
            <a
              href="/resume.pdf"
              download="Mustapha_Adegbite_Resume.pdf"
              className={`${
                dark
                  ? "text-white hover:bg-white/1"
                  : "text-black/70 hover:bg-[#f1f1f1]/60"
              } py-2 rounded px-2 sm:px-4 hover:px-3 sm:hover:px-6 transition-all duration-300 ease-in-out hover:backdrop-blur-2xl group-hover/resume:scale-110 group-hover/resume:-rotate-12 hover:backdrop-saturate-150 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-y-hidden`}
            >
              <FileBarChart
                className={`w-3 h-3 sm:w-5 sm:h-5`}
                strokeWidth={`${dark ? 2 : 2}`}
              />
            </a>
          </nav>
          <a
            href="mailto:adegbitemustapha73@gmail.com"
            target="_blank"
            className="text-white relative group/cta bg-black text-[13px] sm:text-[16px] py-2 rounded-xl px-4 hover:px-5 sm:hover:px-6 transition-all duration-300 ease-in-out hover:bg-black/80"
          >
            <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="relative z-10">Hire me</span>
          </a>
        </div>
        <div className="fixed bottom-2">
          <button
            onClick={() => setDark(!dark)}
            //   aria-label="Toggle dark mode"
            className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300
                 ${
                   dark ? "bg-gray-700" : "bg-gray-200"
                 } hover:shadow-lg shadow-2xl`}
          >
            <div
              className={`absolute w-5 h-5 rounded-full flex items-center justify-center
                    ${
                      dark
                        ? "translate-x-6 bg-indigo-500"
                        : "translate-x-0.5 bg-yellow-400"
                    }
                    shadow-md`}
            >
              {dark ? (
                <span key="moon">
                  <Moon className="w-4 h-4 text-white" />
                </span>
              ) : (
                <span key="sun">
                  <Sun className="w-4 h-4 text-white" />
                </span>
              )}
            </div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
