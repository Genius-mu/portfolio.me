import "./App.css";
import "boxicons";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/Projects";
import { createContext, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ThemeTog = createContext();

function App() {
  const [dark, setDark] = useState(false);

  return (
    <>
      <div className={`${dark ? "bg-black/85" : "bg-black/2"}`}>
        <ThemeTog.Provider value={{ dark, setDark }}>
          <Header />
        </ThemeTog.Provider>
        <Routes>
          <Route
            path="/"
            element={
              <ThemeTog.Provider value={{ dark, setDark }}>
                <Home />
              </ThemeTog.Provider>
            }
          />
          <Route
            path="/projects"
            element={
              <ThemeTog.Provider value={{ dark, setDark }}>
                <Projects />
              </ThemeTog.Provider>
            }
          />
        </Routes>
        <ThemeTog.Provider value={{ dark, setDark }}>
          <Footer />
        </ThemeTog.Provider>
      </div>
    </>
  );
}

export default App;
