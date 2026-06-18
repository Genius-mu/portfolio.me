import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4Marquee from "./components/Section4";
import Section5 from "./components/Section5";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="relative">
      {/* Page content */}
      <div className="relative z-50">
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
