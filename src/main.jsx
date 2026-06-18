import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "boxicons/css/boxicons.min.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import Footer from "./components/Footer.jsx";
// import Header from "./components/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
