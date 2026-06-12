import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import App from './App.jsx';

function Root() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Root />);
