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

const X = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  return (
    <>
      <footer className="w-full relative pt-5 pb-19 flex flex-col gap-y-1 justify-center items-center z-50">
        {/* Top gradient line */}
        <hr
          className={`absolute top-0 left-0 right-0 border-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent z-10`}
        />
        <p
          className={`footP text-black/70 font-light text-[14px] sm:text-[16px] leading-6`}
        >
          Copyrights © 2025 Mustapha Adegbite
        </p>
        <nav className="flex gap-x-2 overflow-hidden">
          <Link
            to="https://x.com/mustaphAdegbite"
            className={`text-black/70 hover:text-black/90 py-2 rounded px-2 sm:px-3 transition-all hover:bg-white rounded-[50%] duration-300 ease-in-out hover:scale-110`}
            target="_blank"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <Link
            to="https://github.com/Genius-mu"
            className={`text-black/70 hover:text-black/90 py-2 rounded px-2 sm:px-3 transition-all hover:bg-white rounded-[50%] duration-300 ease-in-out hover:scale-110`}
            target="_blank"
          >
            <Github className="w-4 h-4 sm:w-6 sm:h-6" />
          </Link>
          <a
            href="https://www.instagram.com/genius_mu01/"
            className={`text-black/70 hover:text-black/90 py-2 rounded px-2 sm:px-3 transition-all hover:bg-white duration-300 ease-in-out hover:scale-110`}
          >
            <Instagram className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:adegbitemustapha73@gmail.com"
            className={`text-black/70 hover:text-black/90 py-2 rounded px-2 sm:px-3 transition-all hover:bg-white duration-300 ease-in-out hover:scale-110`}
          >
            <MailIcon className="w-4 h-4 sm:w-6 sm:h-6" />
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
