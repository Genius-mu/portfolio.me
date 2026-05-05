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

  return (
    <div className="relative">
      {/* Floating bubbles background - only shows in dark mode */}
      {dark && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
