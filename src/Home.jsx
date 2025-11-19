import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4Marquee from "./components/Section4";
import Section5 from "./components/Section5";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Section2 />
        <Section3 />
        <Section4Marquee />
        <Section5 />
      </div>
    </>
  );
};

export default Home;
