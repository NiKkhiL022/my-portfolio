import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Resume from "./components/Resume";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnRouteChange behavior="auto" />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
