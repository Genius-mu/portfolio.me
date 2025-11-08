import {
  FileBarChart,
  Github,
  Home,
  Instagram,
  Mail,
  MailIcon,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full pt-5 pb-13 border-t border-black/20 flex flex-col gap-y-1 justify-center items-center">
        <p className="footP text-black/70 font-light text-[14px] sm:text-[16px] leading-6">
          Copyrights © 2025 Mustapha Adegbite
        </p>
        <nav className="flex gap-x-2">
          <Link
            to="https://x.com/mustaphAdegbite"
            className="text-black/70 py-2 hover:text-black rounded px-2 sm:px-4 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 1227"
              fill="currentColor"
              className="w-4 h-4 sm:w-6 sm:h-6"
            >
              <path d="M714 519L1161 0h-109L671 420 426 0H0l464 726L0 1226h109l417-463 262 463h426z" />
            </svg>

            {/* <Twitter className="w-4 h-4 sm:w-6 sm:h-6" /> */}
          </Link>
          <Link
            to="https://github.com/Genius-mu"
            className="text-black/70 py-2 hover:text-black rounded px-2 sm:px-4 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
            target="_blank"
          >
            <Github className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
          <a
            href="https://www.instagram.com/genius_mu01/"
            className="text-black/70 py-2 hover:text-black rounded px-2 sm:px-4 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
          >
            <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:adegbitemustapha73@gmail.com"
            className="text-black/70 py-2 hover:text-black rounded px-2 sm:px-4 transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
          >
            <MailIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
