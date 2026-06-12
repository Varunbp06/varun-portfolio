import { personalInfo } from '../data/portfolioData';

const footerLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary overflow-hidden">
      <div className="py-16 sm:py-20 relative z-10">
        <div className="max-w-7xl mx-auto section-padding text-center space-y-10">
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Varun B P"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Follow
            </a>
          </div>

          <div>
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-black">
                Varun<span className="text-white">.dev</span>
              </h3>
              <p className="text-sm text-black/60 max-w-md mx-auto">
                Building scalable, reliable, and user-focused software products.
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70 hover:text-black transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="w-full h-px bg-black/10 rounded-full" />

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p className="text-black/50">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-black/30">{personalInfo.email}</span>
              <span className="text-black/20 hidden sm:inline">|</span>
              <span className="text-black/30">{personalInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
