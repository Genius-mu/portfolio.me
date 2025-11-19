import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeTog } from "../App";

const Hero = () => {
  const { dark } = useContext(ThemeTog);

  return (
    <>
      <section className="sec2 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
        <div className="w-[90%] sm:w-[80%] h-full flex flex-col-reverse gap-y-5 md:flex-row justify-between sm:items-center">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`font-bold ${
                dark
                  ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                  : "text-black"
              } text-xl sm:text-4xl tracking-[1px]`}
            >
              Hey, I’m Mustapha Adegbite.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`font-bold ${
                dark
                  ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                  : "text-black"
              } text-xl sm:text-4xl tracking-[1px]`}
            >
              Frontend Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`max-w-[450px] ${
                dark
                  ? "text-[#f1f1f1] [text-shadow:1px_1px_1px_#111]"
                  : "text-black/60"
              }`}
            >
              I build fast, pixel-perfect React apps that solve real problems —
              like turning scattered information into a clean, structured
              experience with ClarityHub. I love transforming messy ideas into
              smooth, responsive interfaces that make life easier.
            </motion.p>
            <div
              className={`mt-1 flex flex-col sm:flex-row gap-y-2 w-fit gap-x-2`}
            >
              <a
                href="mailto:adegbitemustapha73@gmail.com"
                target="_blank"
                className={`text-white w-full sm:w-fit text-[16px] bg-black py-3 rounded-2xl px-5 hover:px-7 transition-all duration-300 ${
                  dark ? "text-[#f1f1f1] shadow-2xl" : "text-black"
                } ease-in-out hover:bg-black/80`}
              >
                Hire me
              </a>

              <ul
                className={`text-white w-fit backdrop-blur-md border ${
                  dark
                    ? "border-blue-600/30 bg-blue-600/10"
                    : "border-blue-600/30 bg-blue-600/10"
                } py-3 rounded-3xl px-8 hover:[box-shadow:1px_1px_5px_rgba(0,0,0,.1)] transition-all duration-300 ease-in-out`}
              >
                <li
                  className={`text-[14px] sm:text-[16px] ${
                    dark ? "text-white list-disc" : "text-blue-600 list-disc"
                  } list-disc`}
                >
                  Available for new projects
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`sm:w-[20em] sm:h-[20em] w-[8em] h-[8em] rounded-[50%] overflow-hidden`}
          >
            <img
              src="/images/img1.webp"
              alt=""
              className="w-full h-full object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
