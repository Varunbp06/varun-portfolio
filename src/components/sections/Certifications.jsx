import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiAward } from 'react-icons/fi';
import { certifications } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
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
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-950">
      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Certifications</span>
          <h2 className="section-title">
            Professional <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">Industry-recognized certifications in AI, Cloud, and Software Development</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full" />
              <FiAward className="text-primary mb-4" size={24} />
              <h3 className="text-sm font-bold text-white mb-1 leading-snug">{cert.title}</h3>
              <p className="text-xs text-primary font-medium mb-3">{cert.issuer} • {cert.year}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
