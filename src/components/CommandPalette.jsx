import { useEffect, useState, useRef } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const sections = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [open]);

  const filtered = query.trim()
    ? sections.filter((s) => s.label.toLowerCase().includes(query.toLowerCase()))
    : sections;

  const handleSelect = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center pt-[20vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Quick navigation"
        >
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-lg mx-4 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
              <FiSearch className="text-zinc-500 shrink-0" size={18} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Navigate to..."
                className="flex-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none text-sm"
              />
              <kbd className="hidden sm:inline-flex px-2 py-0.5 text-xs text-zinc-500 bg-zinc-800 rounded border border-zinc-700 font-mono">
                ESC
              </kbd>
            </div>
            <div className="max-h-64 overflow-y-auto py-2">
              {filtered.length === 0 ? (
                <p className="px-5 py-4 text-sm text-zinc-500 text-center">No results found.</p>
              ) : (
                filtered.map((s) => (
                  <button
                    key={s.href}
                    onClick={() => handleSelect(s.href)}
                    className="w-full text-left px-5 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors flex items-center gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {s.label}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
