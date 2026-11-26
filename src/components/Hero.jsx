/* ---------- Hero ---------- */
// Content renders immediately (no JS-driven blur-in), so the first paint
// shows the headline instead of an empty screen.

const Hero = () => {
  const headingClass = `font-bold sm:text-center md:text-left text-black text-2xl sm:text-4xl tracking-[1px]`;

  return (
    <section className="sec2 w-full h-fit pt-[6%] pb-[6%] flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%] h-full flex flex-col-reverse gap-y-5 md:flex-row justify-between sm:items-center">
        <div className="hero-fade flex flex-col sm:items-center md:items-start gap-y-1 sm:gap-y-3">
          <h1 className={headingClass}>
            Hi, I'm Mustapha Adegbite.
            <span className="block mt-1 sm:mt-3">Frontend Engineer</span>
          </h1>

          <p className="max-w-[500px] sm:text-center md:text-left text-black/60">
            I build fast, polished web interfaces with React and Next.js, from
            e-commerce storefronts to scroll-driven 3D experiences. I'm growing
            into full-stack, wiring frontends to Node.js APIs and databases like
            Supabase and MongoDB.
          </p>

          <div className="mt-1 flex flex-col sm:flex-row gap-y-3 w-fit gap-x-4 sm:items-center">
            <a
              href="mailto:adegbitemustapha73@gmail.com"
              className={`w-full sm:w-fit text-[16px] bg-black py-3 rounded-2xl px-5 hover:px-6 text-white disCD flex justify-center items-center hover:bg-black/80 overflow-hidden z-10 transition-all duration-300 ease-in-out group/cta relative`}
            >
              <div className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <span className="relative z-10">Hire me</span>
            </a>

            <p className="flex items-center gap-x-2 text-[14px] sm:text-[15px] text-green-700">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>
              Available for work
            </p>
          </div>
        </div>

        <div className="sm:w-[20em] sm:h-[20em] w-[8em] h-[8em] rounded-[50%] overflow-hidden flex-none">
          <img
            src="/images/img1-640.webp"
            alt="Portrait of Mustapha Adegbite"
            width="640"
            height="640"
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
