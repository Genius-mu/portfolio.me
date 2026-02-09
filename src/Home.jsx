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

//   // Generate Matrix-style falling code streams
//   const codeStreams = [...Array(40)].map((_, i) => ({
//     color: ["#00ff41", "#008f11", "#00ff41"][i % 3], // Matrix green variations
//     startX: i * 2.5 + Math.random() * 2, // Evenly distributed columns
//     duration: Math.random() * 3 + 2, // Falling speed
//     delay: Math.random() * 5,
//     length: Math.random() * 30 + 10, // Trail length
//   }));

//   // Random characters for the Matrix effect
//   const matrixChars =
//     "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
//   const getRandomChar = () =>
//     matrixChars[Math.floor(Math.random() * matrixChars.length)];

//   return (
//     <div className="relative">
//       {/* Matrix-style falling code animation - only shows in dark mode */}
//       {dark && (
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//           {codeStreams.map((stream, i) => (
//             <div
//               key={i}
//               className="absolute top-0 overflow-hidden"
//               style={{
//                 left: `${stream.startX}%`,
//               }}
//             >
//               {/* Create multiple characters in each stream */}
//               {[...Array(Math.floor(stream.length))].map((_, charIndex) => (
//                 <motion.div
//                   key={`${i}-${charIndex}`}
//                   className="font-mono text-sm font-bold overflow-hidden"
//                   style={{
//                     color: charIndex === 0 ? "#ffffff" : stream.color, // White leading character
//                     textShadow:
//                       charIndex === 0
//                         ? `0 0 10px #00ff41, 0 0 20px #00ff41`
//                         : `0 0 5px ${stream.color}`,
//                     opacity: 1 - charIndex / stream.length, // Fade as it goes down
//                   }}
//                   animate={{
//                     y: [-50, window.innerHeight + 50],
//                   }}
//                   transition={{
//                     duration: stream.duration,
//                     repeat: Infinity,
//                     ease: "linear",
//                     delay: stream.delay + charIndex * 0.05,
//                   }}
//                 >
//                   {getRandomChar()}
//                 </motion.div>
//               ))}
//             </div>
//           ))}

//           {/* Overlay gradient for better readability */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
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

  // Generate bubbles with varying sizes and speeds
  const bubbles = [...Array(25)].map((_, i) => ({
    color: ["#3b82f680", "#8b5cf680", "#06b6d480", "#ec489980"][i % 4],
    size: Math.random() * 80 + 30,
    startX: Math.random() * 100,
    startY: 100 + Math.random() * 20, // Start below viewport
    floatHeight: Math.random() * 120 + 80, // How high it floats
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    drift: Math.random() * 40 - 20, // Horizontal drift
  }));

  return (
    <div className="relative">
      {/* Floating bubbles background - only shows in dark mode */}
      {dark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {bubbles.map((bubble, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${bubble.color.replace("80", "cc")}, ${bubble.color})`,
                width: bubble.size,
                height: bubble.size,
                left: `${bubble.startX}%`,
                bottom: `-${bubble.size}px`,
                boxShadow: `0 0 ${bubble.size * 0.8}px ${bubble.color}, inset 0 0 ${bubble.size * 0.3}px rgba(255, 255, 255, 0.3)`,
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
              animate={{
                y: [
                  `0vh`,
                  `-${bubble.floatHeight}vh`,
                  `-${bubble.floatHeight + 20}vh`,
                ],
                x: [0, bubble.drift, bubble.drift * 1.5],
                opacity: [0, 0.7, 0],
                scale: [0.8, 1, 0.9],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: bubble.delay,
              }}
            />
          ))}

          {/* Add subtle background glow orbs */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`glow-${i}`}
              className="absolute rounded-full filter blur-3xl"
              style={{
                background: `radial-gradient(circle, ${["#3b82f6", "#8b5cf6", "#06b6d4", "#ec4899", "#10b981"][i]} 0%, transparent 70%)`,
                width: Math.random() * 300 + 200,
                height: Math.random() * 300 + 200,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 20 + 15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
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
