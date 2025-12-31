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
import { useContext } from "react";
import { ThemeTog } from "../App";

const Footer = () => {
  const { dark } = useContext(ThemeTog);

  return (
    <>
      <footer className="w-full pt-5 pb-13 border-t border-black/20 flex flex-col gap-y-1 justify-center items-center">
        <p
          className={`footP ${
            dark ? "text-white/70" : "text-black/70"
          } font-light text-[14px] sm:text-[16px] leading-6`}
        >
          Copyrights © 2025 Mustapha Adegbite
        </p>
        <nav className="flex gap-x-2">
          <Link
            to="https://x.com/mustaphAdegbite"
            className={`${
              dark ? "text-white/90" : "text-black/70"
            } py-2 rounded px-2 sm:px-4 transition-all duration-300 ease-in-out "
            target="_blank`}
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
            className={`${
              dark ? "text-white/90" : "text-black/70"
            } py-2 rounded px-2 sm:px-4 transition-all duration-300 ease-in-out`}
            target="_blank"
          >
            <Github className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
          <a
            href="https://www.instagram.com/genius_mu01/"
            className={`${
              dark ? "text-white/90" : "text-black/70"
            } py-2 rounded px-2 sm:px-4 transition-all duration-300 ease-in-out`}
          >
            <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:adegbitemustapha73@gmail.com"
            className={`${
              dark ? "text-white/90" : "text-black/70"
            } py-2 rounded px-2 sm:px-4 transition-all duration-300 ease-in-out`}
          >
            <MailIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
