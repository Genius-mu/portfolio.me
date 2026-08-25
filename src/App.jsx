import "./App.css";
// import "boxicons";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectsView from "./components/ProjectsView";
import DotField from "./components/DotField";
import SplashCursor from "./components/SplashCursor";
import CustomCursor from "./components/CustomCu";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-gray-50 text-black">
      <div className="fixed inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="rgba(0,0,0,.5)"
        />
      </div>

      {/* Header lives OUTSIDE main now → its fixed dock sits in the root stacking context */}
      <Header />

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectsView />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </main>

      {/* <SplashCursor /> */}
      <CustomCursor />
    </div>
  );
}

export default App;
