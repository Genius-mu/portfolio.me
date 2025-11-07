import "./App.css";
import "boxicons";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
