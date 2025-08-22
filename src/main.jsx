import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";
import Resume from "./components/Resume";
import { ThemeProvider } from "./contexts/ThemeContext";
// Replaced always-scroll-to-top behavior with smarter restoration
import ScrollRestoration from "./components/ScrollRestoration";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ScrollRestoration />
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
