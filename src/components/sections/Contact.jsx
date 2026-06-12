import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCheck, FiAlertCircle, FiLoader } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);
  const bgTextRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const botCheckRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgTextRef.current, {
        y: -50, opacity: 0.06,
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 1.5 }
      });

      gsap.fromTo(contentRef.current?.children,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', end: 'top 30%', toggleActions: 'play none none reverse' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (botCheckRef.current?.value) return;

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          botcheck: botCheckRef.current?.value || ''
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaWhatsapp, href: personalInfo.social.whatsapp, label: 'WhatsApp' },
    { icon: FiMail, href: personalInfo.social.email, label: 'Email' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span className="text-[25vw] font-black text-white/[0.02] tracking-tighter">CONNECT</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto section-padding py-24">
        <div ref={contentRef} className="text-center space-y-8 max-w-3xl mx-auto">
          <span className="text-primary font-medium text-sm tracking-[0.3em] uppercase inline-block">Contact</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight">
            Let's <span className="text-gradient">Talk</span>
          </h2>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social) => {
              const isEmail = social.label === 'Email';
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noopener noreferrer'}
                  className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                  aria-label={social.label}
                >
                  <social.icon size={22} />
                </a>
              );
            })}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 max-w-xl mx-auto space-y-5 text-left"
            noValidate
          >
            <input
              ref={botCheckRef}
              type="text"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full px-4 py-3.5 rounded-xl bg-zinc-900/50 border text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all ${
                  errors.name ? 'border-red-500' : 'border-white/10'
                }`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="text-xs text-red-400 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full px-4 py-3.5 rounded-xl bg-zinc-900/50 border text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all ${
                  errors.email ? 'border-red-500' : 'border-white/10'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="text-xs text-red-400 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className={`w-full px-4 py-3.5 rounded-xl bg-zinc-900/50 border text-white placeholder-zinc-500 focus:outline-none focus:border-white/30 transition-all resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/10'
                }`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            {status === 'success' && (
              <div className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 px-4 py-3 rounded-xl border border-green-500/20">
                <FiCheck size={16} />
                Message sent successfully. I will get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 px-4 py-3 rounded-xl border border-red-500/20">
                <FiAlertCircle size={16} />
                Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-3.5 rounded-xl font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${
                status === 'loading'
                  ? 'bg-zinc-700 text-zinc-400 cursor-not-allowed'
                  : status === 'success'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-black hover:bg-zinc-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]'
              }`}
            >
              {status === 'loading' ? (
                <><FiLoader size={16} className="animate-spin" /> Sending...</>
              ) : status === 'success' ? (
                <><FiCheck size={16} /> Sent!</>
              ) : (
                <><FiSend size={16} /> Send</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
