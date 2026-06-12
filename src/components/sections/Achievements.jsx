import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiAward } from 'react-icons/fi';
import { achievements } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
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
          y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="achievements" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-900/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Achievements</span>
          <h2 className="section-title">
            Key <span className="text-gradient">Milestones</span>
          </h2>
          <p className="section-subtitle">Recognitions and accomplishments throughout my academic journey</p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="glass-card p-6 sm:p-8 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiAward className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{item.event}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
