import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Documentation from './components/Documentation'; // ← Tambahkan ini
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Documentation /> {/* ← Tambahkan ini */}
      <Contact />
      <footer className="footer">
        <div>© {new Date().getFullYear()} Fathur Rizqi</div>
        <div>Designed & Built with ♥ in Tegal</div>
      </footer>
    </>
  );
}