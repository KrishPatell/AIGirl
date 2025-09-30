import React, { useState } from 'react';

const navLinks = [
  { name: 'Styles', href: '#styles' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Blog', href: '#blog' },
];

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5" />
  </svg>
);

const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0D0D0D]/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <a
          href="#top"
          className="flex items-center gap-3 text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF00A8] via-[#7F2BFF] to-[#00F0FF] text-lg font-semibold tracking-widest">
            VG
          </span>
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-white/90">
            VIXLOR AI
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium uppercase text-white/70 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="tracking-[0.18em] transition-colors duration-200 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#pricing"
            className="rounded-lg border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/80 transition-all hover:border-white/40 hover:text-white"
          >
            Login
          </a>
          <a
            href="#prompt"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-all hover:shadow-lg"
          >
            Generate Now
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full border border-white/20 p-2 text-white lg:hidden"
        >
          {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="border-t border-white/5 bg-[#0D0D0D] px-6 py-6 text-sm uppercase text-white/80 lg:hidden">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={`mobile-${link.name}`}>
                <a
                  href={link.href}
                  className="tracking-[0.25em] transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#pricing"
              className="rounded-lg border border-white/20 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              Login
            </a>
            <a
              href="#prompt"
              className="rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white transition-all hover:shadow-lg"
            >
              Generate Now
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
