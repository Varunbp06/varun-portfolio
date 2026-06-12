import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMapPin, FiCalendar } from 'react-icons/fi';
import { education } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current?.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );

      gsap.fromTo(timelineRef.current?.children,
        { x: -30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 85%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden bg-zinc-900/30">
      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        <div ref={headerRef} className="text-center space-y-4 mb-16">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase">Education</span>
          <h2 className="section-title">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="section-subtitle">My educational background and qualifications</p>
        </div>

        <div ref={timelineRef} className="space-y-6 max-w-4xl mx-auto">
          {education.map((item, i) => (
            <div key={i} className="glass-card p-6 sm:p-8 hover:border-primary/30 transition-all duration-500">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-2">
                    <FiCalendar size={12} />
                    <span>{item.period}</span>
                    <FiMapPin size={12} className="ml-2" />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{item.degree}</h3>
                  <p className="text-primary font-medium text-sm">{item.institution}</p>
                  {item.cgpa && (
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <span className="text-xs font-semibold text-primary">CGPA: {item.cgpa}</span>
                    </div>
                  )}
                  {item.coursework && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span key={course} className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                          {course}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
