import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

const skillsRow1 = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
];

const skillsRow2 = [
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
];

const SkillPill = ({ skill, hidden = false }) => (
  <div
    aria-hidden={hidden || undefined}
    className="skill flex-none w-16 h-16 md:w-40 md:h-14 rounded-lg flex items-center justify-center gap-2
               bg-green-600/10 text-white font-medium text-lg shadow-md"
  >
    <span className={`text-3xl md:text-2xl ${skill.color}`}>{skill.icon}</span>
    <span className="sr-only md:not-sr-only">{skill.name}</span>
  </div>
);

// Each row renders its list twice for the seamless -50% loop
const MarqueeRow = ({ skills, direction = "left" }) => (
  <div className="relative w-full overflow-hidden">
    {/* Fade gradients */}
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10" />

    <div
      className={`inline-flex whitespace-nowrap gap-4 md:gap-6 py-4 ${
        direction === "right" ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {skills.map((skill, i) => (
        <SkillPill key={`${direction}-a-${i}`} skill={skill} />
      ))}
      {skills.map((skill, i) => (
        <SkillPill key={`${direction}-b-${i}`} skill={skill} hidden />
      ))}
    </div>
  </div>
);

export default function Section4Marquee() {
  return (
    <section className="sec4 w-full py-12 flex justify-center items-center bg-black">
      <div className="sc4Div w-[90%] max-w-5xl py-10 flex flex-col items-center gap-y-10">
        <div className="w-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Skills
          </h2>
        </div>

        {/* Two rows scrolling in opposite directions */}
        <div className="w-full flex flex-col gap-y-4">
          <MarqueeRow skills={skillsRow1} direction="left" />
          <MarqueeRow skills={skillsRow2} direction="right" />
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

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }

        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
