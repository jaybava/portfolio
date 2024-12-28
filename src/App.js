import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
      <Router basename="/portfolio">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/work" element={<WorkExperience />} />
          </Routes>
      </Router>
  );
}

export default App;
