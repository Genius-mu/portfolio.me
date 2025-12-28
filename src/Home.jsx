// import Hero from "./components/Hero";
// import Section2 from "./components/Section2";
// import Section3 from "./components/Section3";
// import Section4Marquee from "./components/Section4";
// import Section5 from "./components/Section5";
// import { useContext } from "react";
// import { motion } from "framer-motion";
// import { ThemeTog } from "./App";

// const Home = () => {
//   const { dark } = useContext(ThemeTog);

//   // Generate consistent random values for each orb
//   const orbs = [...Array(20)].map((_, i) => ({
//     color: ["#3b82f6", "#8b5cf6", "#06b6d4"][i % 3],
//     size: Math.random() * 400 + 150,
//     startX: Math.random() * 100,
//     startY: Math.random() * 100,
//     moveX: Math.random() * 200 - 100,
//     moveY: Math.random() * 200 - 100,
//     duration: Math.random() * 15 + 15,
//   }));

//   return (
//     <div className="relative">
//       {/* Animated background - only shows in dark mode */}
//       {dark && (
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//           {orbs.map((orb, i) => (
//             <motion.div
//               key={i}
//               className="absolute rounded-full mix-blend-screen filter blur-3xl"
//               style={{
//                 background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
//                 width: orb.size,
//                 height: orb.size,
//                 left: `${orb.startX}%`,
//                 top: `${orb.startY}%`,
//               }}
//               animate={{
//                 x: [0, orb.moveX, 0],
//                 y: [0, orb.moveY, 0],
//                 scale: [1, 1.3, 1],
//                 opacity: [0.15, 0.25, 0.15],
//               }}
//               transition={{
//                 duration: orb.duration,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             />
//           ))}
//         </div>
//       )}

//       {/* Page content */}
//       <div className="relative z-10">
//         <Hero />
//         <Section2 />
//         <Section3 />
//         <Section4Marquee />
//         <Section5 />
//       </div>
//     </div>
//   );
// };

// export default Home;

import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4Marquee from "./components/Section4";
import Section5 from "./components/Section5";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeTog } from "./App";

const Home = () => {
  const { dark } = useContext(ThemeTog);

  // Generate consistent random values for each particle
  const particles = [...Array(80)].map((_, i) => ({
    color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899"][i % 4],
    size: Math.random() * 6 + 2,
    startX: Math.random() * 100,
    startY: Math.random() * 100,
    moveX: Math.random() * 300 - 150,
    moveY: Math.random() * 300 - 150,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 2,
  }));

  return (
    <div className="relative">
      {/* Particle animation background - only shows in dark mode */}
      {dark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: particle.color,
                width: particle.size,
                height: particle.size,
                left: `${particle.startX}%`,
                top: `${particle.startY}%`,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              }}
              animate={{
                x: [0, particle.moveX, 0],
                y: [0, particle.moveY, 0],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
            />
          ))}

          {/* Connection lines between nearby particles */}
          <svg className="absolute inset-0 w-full h-full">
            {particles.slice(0, 30).map((particle, i) => {
              const nextParticle = particles[(i + 1) % 30];
              return (
                <motion.line
                  key={`line-${i}`}
                  x1={`${particle.startX}%`}
                  y1={`${particle.startY}%`}
                  x2={`${nextParticle.startX}%`}
                  y2={`${nextParticle.startY}%`}
                  stroke={particle.color}
                  strokeWidth="0.5"
                  animate={{
                    opacity: [0, 0.15, 0],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: particle.delay,
                  }}
                />
              );
            })}
          </svg>
        </div>
      )}

      {/* Page content */}
      <div className="relative z-10">
        <Hero />
        <Section2 />
        <Section3 />
        <Section4Marquee />
        <Section5 />
      </div>
    </div>
  );
};

export default Home;
