import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  { key: 'languages', label: 'Languages', icon: '⚡' },
  { key: 'frontend', label: 'Frontend', icon: '🎨' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'databases', label: 'Databases', icon: '🗄️' },
  { key: 'ai', label: 'AI & Prompt Engineering', icon: '🤖' },
  { key: 'tools', label: 'Tools', icon: '🛠️' },
  { key: 'fundamentals', label: 'CS Fundamentals', icon: '📚' },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );

      gsap.fromTo(gridRef.current?.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Skills & Expertise</span>
          <h2 className="section-title">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="section-subtitle">Technologies and skills I work with to build modern applications</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillCategories.map((cat) => {
            const items = skills[cat.key];
            if (!items) return null;
            return (
              <div
                key={cat.key}
                className="glass-card p-5 hover:border-primary/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className="font-semibold text-white text-sm uppercase tracking-wider">{cat.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50 group-hover:border-primary/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
