import { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 50);
      setVisible(current < lastScroll || current < 100);
      setLastScroll(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="inline-flex items-center text-xl sm:text-2xl font-black tracking-tight hover:text-primary transition-colors leading-none"
          >
            Varun<span className="text-primary">.</span>dev
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <span className="ml-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/15 text-primary border border-primary/30 whitespace-nowrap">
              Open To Work
            </span>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-primary/15 text-primary border border-primary/30 whitespace-nowrap">
              Open To Work
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-zinc-950/98 backdrop-blur-3xl transition-all duration-500 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-3xl sm:text-4xl font-bold transition-all duration-500 ${
                isOpen ? 'text-zinc-300 hover:text-primary translate-y-0' : 'text-zinc-300 hover:text-primary translate-y-4'
              }`}
              style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
              tabIndex={isOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
