import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects, personalInfo } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
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
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[22vw] font-black text-white/[0.02] select-none">
          My Work
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Projects</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="section-subtitle">Real-world applications I've built end-to-end</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group glass-card overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              <div className="h-48 relative overflow-hidden bg-gradient-to-br" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-black text-white/10">{project.tag}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: project.color, color: 'white' }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-zinc-500 flex gap-2">
                      <span className="text-primary mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {project.impact && (
                  <div className="text-xs text-zinc-400 italic border-t border-zinc-800 pt-3">
                    {project.impact}
                  </div>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-400 hover:text-primary flex items-center gap-1 transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FiGithub size={14} /> Source
                  </a>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-zinc-400 hover:text-primary flex items-center gap-1 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FiExternalLink size={14} /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
