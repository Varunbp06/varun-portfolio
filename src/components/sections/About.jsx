import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, projects, certifications, skills } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ target, suffix = '', label, description }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          const duration = 1500;
          const steps = 30;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="glass-card p-6 hover:border-primary/30 transition-all duration-500 group">
      <div className="text-3xl font-black text-primary mb-2">
        {count}{suffix}
      </div>
      <h3 className="text-white font-semibold mb-1">{label}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current?.children,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 20%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const techCount = Object.values(skills).flat().length;
  const certCount = certifications.length;
  const projectCount = projects.length;

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={contentRef} className="space-y-8">
          <div className="inline-block">
            <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">About Me</span>
          </div>

          <h2 className="section-title">
            Who <span className="text-gradient">I Am</span>
          </h2>

          <p className="section-subtitle">
            {personalInfo.summary}
          </p>

          <div className="grid md:grid-cols-4 gap-6 pt-8">
            <AnimatedCounter target={projectCount} suffix="+" label="Projects Delivered" description="Full-stack web apps & AI-powered platforms built end-to-end" />
            <AnimatedCounter target={techCount} label="Technologies" description="Languages, frameworks, tools & CS fundamentals" />
            <AnimatedCounter target={certCount} label="Certifications" description="AI, Cloud & Software Engineering credentials from IBM, Microsoft, Cisco" />
            <AnimatedCounter target={8} label="CS Fundamentals" description="DSA, DBMS, OS, Networks, SDLC, Agile, OOP & more" />
          </div>
        </div>
      </div>
    </section>
  );
}
