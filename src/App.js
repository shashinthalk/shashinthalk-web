import * as React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import About from './about-me';
import Contact from './contact-me';
import Projects from './projects';
import ProjectDetails from './project-detail';
import ToDo from './tools/todo';
import Scrapper from './tools/scrapper';
import AICam from './tools/ai-cam';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/shashinthalk-web/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/todo" element={<ToDo />} />
          <Route path="/projects/scrapper" element={<Scrapper />} />
          <Route path="/projects/ai-cam" element={<AICam />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
