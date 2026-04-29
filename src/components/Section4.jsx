import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
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
          <div className="inline-flex animate-marquee whitespace-nowrap gap-4 md:gap-6 py-4">
            {/* First set */}
            {skills.map((skill, i) => (
              <div
                key={`a-${i}`}
                className="skill flex-none w-16 h-16 md:w-40 md:h-14 rounded-lg flex items-center justify-center gap-2
                           bg-green-600/10 text-white font-medium text-lg shadow-md"
              >
                <span className={`text-3xl md:text-2xl ${skill.color}`}>
                  {skill.icon}
                </span>
                <span className="hidden md:inline">{skill.name}</span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {skills.map((skill, i) => (
              <div
                key={`b-${i}`}
                className="skill flex-none w-16 h-16 md:w-40 md:h-14 rounded-lg flex items-center justify-center gap-2
                           bg-green-600/10 text-white font-medium text-lg shadow-md"
              >
                <span className={`text-3xl md:text-2xl ${skill.color}`}>
                  {skill.icon}
                </span>
                <span className="hidden md:inline">{skill.name}</span>
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
