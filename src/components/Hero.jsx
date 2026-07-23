import { motion } from "motion/react";
import { useEffect, useRef, useState, useMemo } from "react";

/* ---------- BlurText component ---------- */

const buildKeyframes = (from, steps) => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);
  const keyframes = {};
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])];
  });
  return keyframes;
};

const BlurText = ({
  text = "",
  delay = 200,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
  as: Tag = "p",
}) => {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom = useMemo(
    () =>
      direction === "top"
        ? { filter: "blur(10px)", opacity: 0, y: -50 }
        : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  );

  const defaultTo = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;
  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1),
  );

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);
        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        };
        spanTransition.ease = easing;
        return (
          <motion.span
            className="inline-block overflow-hidden will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        );
      })}
    </Tag>
  );
};

/* ---------- Hero ---------- */

const Hero = () => {
  const headingClass = `font-bold sm:text-center md:text-center text-black text-xl sm:text-4xl tracking-[1px] overflow-hidden`;

  return (
    <section className="sec2 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] h-full flex flex-col-reverse gap-y-5 md:flex-row justify-between sm:items-center">
        <div className="flex flex-col sm:items-center md:items-start gap-y-1 sm:gap-y-3">
          <BlurText
            as="h2"
            text="Hey, I’m Mustapha Adegbite."
            delay={120}
            animateBy="words"
            direction="top"
            className={headingClass}
          />
          <BlurText
            as="h2"
            // text="Frontend Engineer"
            text="Frontend Developer"
            delay={150}
            animateBy="words"
            direction="top"
            stepDuration={0.4}
            className={headingClass}
          />

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className={`max-w-[500px] sm:text-center md:text-left text-black/60`}
          >
            Most websites lose leads silently — I built Saim to fix that. It's
            an embeddable AI sales agent that qualifies visitors, captures
            contacts, and works 24/7. I don't just write React code; I ship
            products that solve real problems.
          </motion.p>

          <div className="mt-1 flex flex-col sm:flex-row gap-y-2 w-fit gap-x-2">
            <a
              href="mailto:adegbitemustapha73@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full sm:w-fit text-[16px] bg-black py-3 rounded-2xl px-5 hover:px-6 text-white disCD flex justify-center items-center hover:bg-black/80 overflow-hidden z-10 transition-all duration-300 ease-in-out group/cta relative`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10">Hire me</span>
            </a>

            <ul
              className={`text-white w-fit backdrop-blur-md border border-green-600/30 bg-green-600/10 py-3 rounded-3xl px-8 hover:[box-shadow:1px_1px_5px_rgba(0,0,0,.1)] transition-all duration-300 ease-in-out`}
            >
              <li className={`text-[14px] sm:text-[16px] text-green-600`}>
                Available for work
              </li>
            </ul>
          </div>
        </div>

        <div className="sm:w-[20em] sm:h-[20em] w-[8em] h-[8em] rounded-[50%] overflow-hidden">
          <img
            src="/images/img1.webp"
            alt=""
            className="w-full h-full object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
