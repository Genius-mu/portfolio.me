import { FileBarChart, Github, Home, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="w-full z-50 h-[8em] flex justify-center items-center relative">
        <div className="w-fit fixed p-5 rounded-2xl py-3 gap-x-2 border border-black/10 h-fit flex justify-between items-center bg-white/20 backdrop-blur-xl animate-[jelly-pop_0.6s_ease-in-out] ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] backdrop-saturate-150 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
          <div className="w-fit pr-2 border-r border-black/10 h-full flex">
            <Link
              to="/"
              className="text-black py-2 rounded px-3 sm:px-4 hover:px-6 sm:hover:px-7 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
            >
              <Home />
            </Link>
          </div>
          <nav className="flex gap-x-2 pr-2 border-r border-black/10">
            <Link
              to="https://x.com/mustaphAdegbite"
              className="text-black py-2 rounded px-3 sm:px-4 hover:px-6 sm:hover:px-7 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
              target="_blank"
            >
              <Twitter />
            </Link>
            <Link
              to="https://github.com/Genius-mu"
              className="text-black py-2 rounded px-3 sm:px-4 hover:px-6 sm:hover:px-7 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
              target="_blank"
            >
              <Github />
            </Link>
            <a
              href="/resume.pdf"
              download="Mustapha_Adegbite_Resume.pdf"
              className="text-black py-2 rounded px-3 sm:px-4 hover:px-6 sm:hover:px-7 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
            >
              <FileBarChart />
            </a>
          </nav>
          <a
            href="mailto:adegbitemustapha73@gmail.com"
            target="_blank"
            className="text-white bg-black py-2 rounded px-4 hover:px-7 transition-all duration-300 ease-in-out hover:bg-black/80"
          >
            Hire me
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
