import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Education from './components/Education';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Hobbies from './components/Hobbies';
import Activities from './components/Activities';
import Projects from './components/Projects';
import './styles/main.css';

const App = () => (
  <Router>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </main>
    <Footer/>
  </Router>
);

export default App;
