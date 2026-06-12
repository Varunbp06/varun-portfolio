import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';

function App() {
  return (
    <div className="bg-zinc-950 text-white font-sans">
      <ProgressBar />
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
