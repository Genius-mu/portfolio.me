const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Node.js",
  "Git",
  "TypeScript",
  // Feel free to add more
];

export default function Section4Marquee() {
  return (
    <section className="sec4 w-full py-12 flex justify-center items-center bg-black">
      <div className="sc4Div w-[90%] max-w-5xl py-10 flex flex-col items-center gap-y-10">
        <div className="w-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Skills
          </h2>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden">
          {/* Fade gradients */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Marquee track */}
          <div className="inline-flex animate-marquee whitespace-nowrap gap-6 py-4">
            {/* First set */}
            {skills.map((skill, i) => (
              <div
                key={`a-${i}`}
                className="skill flex-none w-40 h-14 rounded-lg flex items-center justify-center 
                           bg-green-600/10 text-white font-medium text-lg shadow-md"
              >
                {skill}
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {skills.map((skill, i) => (
              <div
                key={`b-${i}`}
                className="skill flex-none w-40 h-14 rounded-lg flex items-center justify-center 
                           bg-green-600/10 text-white font-medium text-lg shadow-md"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
