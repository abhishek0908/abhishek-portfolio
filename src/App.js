// import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
