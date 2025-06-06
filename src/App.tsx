import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Tech from './pages/Tech';
import Skills from './pages/Skills';
import Hackathons from './pages/Hackathons';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';
import HackathonDetails from './pages/HackathonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/tech/:projectId" element={<ProjectDetails />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/hackathons/:hackathonId" element={<HackathonDetails />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;