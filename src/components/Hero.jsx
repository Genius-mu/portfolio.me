import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <section className="sec2 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
        <div className="w-[80%] h-full flex flex-col gap-y-5 md:flex-row justify-between items-center">
          <div className="flex flex-col gap-y-1 sm:gap-y-3">
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-bold text-xl sm:text-4xl tracking-[1px]"
            >
              Hey, I’m Mustapha Adegbite.
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: false, amount: 0.3 }}
              className="font-bold text-xl sm:text-4xl tracking-[1px]"
            >
              Frontend Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="max-w-[450px] text-black/60"
            >
              Building fast, interactive, and pixel-perfect web apps with React.
              I love turning ideas into sleek, responsive experiences that look
              good and feel even better.
            </motion.p>
            <div className="mt-1 flex flex-col sm:flex-row gap-y-2 w-fit gap-x-2">
              <a
                href="mailto:adegbitemustapha73@gmail.com"
                target="_blank"
                className="text-white w-full sm:w-fit text-[16px] bg-black py-3 rounded-2xl px-5 hover:px-7 transition-all duration-300 ease-in-out hover:bg-black/80"
              >
                Hire me
              </a>

              <ul className="text-white w-fit backdrop-blur-md border border-blue-600/30 bg-blue-600/10 py-3 rounded-3xl px-8 hover:[box-shadow:1px_1px_5px_rgba(0,0,0,.1)] transition-all duration-300 ease-in-out">
                <li className="text-[14px] sm:text-[16px] text-blue-600 list-disc">
                  Available for new projects
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:w-[20em] sm:h-[20em] w-full h-[20em] rounded-[50%] overflow-hidden">
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
