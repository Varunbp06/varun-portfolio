import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiLinkedin, FiMail, FiCheck, FiCopy } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const roles = personalInfo.roles;

export default function Hero() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const socialRef = useRef(null);
  const bgTextRef = useRef(null);
  const roleRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!roleRef.current) return;
    gsap.fromTo(roleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
    );
  }, [roleIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(textRef.current?.children,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.3 }
      );

      gsap.fromTo(imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo(socialRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.8 }
      );

      gsap.to(bgTextRef.current, {
        y: -100, opacity: 0.05,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });

      gsap.to(imageRef.current, {
        y: 80,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });

      gsap.to(textRef.current, {
        y: -50, opacity: 0.6,
        scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: 1.5 }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email.replace('mailto:', '')).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[20vw] sm:text-[18vw] font-black text-white/5 tracking-tighter">
          PORTFOLIO
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={textRef} className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight">
              <span className="text-white">Hi, I'm</span>
              <br />
              <span className="text-gradient whitespace-nowrap">{personalInfo.name}</span>
            </h1>

            <div className="h-10 overflow-hidden">
              <p ref={roleRef} className="text-lg sm:text-xl text-primary font-medium" key={roleIndex}>
                {roles[roleIndex]}
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              {personalInfo.tagline}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={personalInfo.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-primary text-black font-bold text-sm hover:bg-yellow-400 transition-all hover:shadow-[0_0_30px_rgba(250,204,21,0.4)]"
                >
                  Hire Me
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-300 font-medium text-sm hover:border-primary hover:text-primary transition-all"
                >
                  View LinkedIn
                </a>
                <button
                  onClick={copyEmail}
                  className="px-6 py-3 rounded-xl border border-zinc-700 text-zinc-400 font-medium text-sm hover:border-primary hover:text-primary transition-all flex items-center gap-2"
                  aria-label="Copy email address"
                >
                  {copied ? <><FiCheck size={14} /> Copied</> : <><FiCopy size={14} /> Email</>}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <FiCheck size={12} className="text-primary" />
                  Open to Software Engineering Opportunities
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <FiCheck size={12} className="text-primary" />
                  Full Stack Development
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500">
                  <FiCheck size={12} className="text-primary" />
                  AI Application Development
                </span>
              </div>
            </div>

            <div ref={socialRef} className="flex items-center gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={personalInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={personalInfo.social.email}
                className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative flex items-center justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <img
                  src="/images/profile.png"
                  alt="Varun B P"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
