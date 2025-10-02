import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

type NavLink = {
  name: string;
  href: string;
  type: 'hash' | 'route';
};

const navLinks: NavLink[] = [
  { name: 'Styles', href: '#styles', type: 'hash' },
  { name: 'How It Works', href: '#how-it-works', type: 'hash' },
  { name: 'Gallery', href: '#gallery', type: 'hash' },
  { name: 'Pricing', href: '#pricing', type: 'hash' },
  { name: 'Blog', href: '/blog', type: 'route' },
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
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

  const scrollToHash = (hash: string) => {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const baseLinkClasses =
    'capitalize tracking-[0.1em] text-white/70 transition-colors duration-200 hover:text-white';

  const renderNavLink = (link: NavLink) => {
  if (link.type === 'route') {
    return (
      <Link
        key={link.name}
        to={link.href}
        className={baseLinkClasses}
      >
        {link.name}
      </Link>
    );
  }

  if (isHome) {
    return (
      <button
        key={link.name}
        type="button"
        onClick={() => scrollToHash(link.href)}
        className={baseLinkClasses}
      >
        {link.name}
      </button>
    );
  }

  return (
    <Link
      key={link.name}
      to={`/${link.href}`}
      className={baseLinkClasses}
    >
      {link.name}
    </Link>
  );
  };

  const anchorToHome = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleAnchorClick = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (isHome) {
      event.preventDefault();
      scrollToHash(hash);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0D0D0D]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:px-16">
        <Link
          to="/"
          className="flex items-center gap-3 text-white transition-transform duration-300 hover:scale-[1.02]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF00A8] via-[#7F2BFF] to-[#00F0FF] text-lg font-semibold tracking-widest">
            VG
          </span>
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-white/90">
            VIXLOR AI
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex">
          {navLinks.map(renderNavLink)}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to={isHome ? '#pricing' : '/#pricing'}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold capitalize tracking-[0.1em] text-white/80 transition-all hover:border-white/40 hover:text-white"
            onClick={(event) => handleAnchorClick(event, '#pricing')}
          >
            Login
          </Link>
          <Link
            to={isHome ? '#cta' : '/#cta'}
            className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 text-xs font-semibold capitalize tracking-[0.1em] text-white transition-all hover:shadow-lg"
            onClick={(event) => handleAnchorClick(event, '#cta')}
          >
            Generate Now
          </Link>
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
        <nav className="border-t border-white/5 bg-[#0D0D0D] px-6 py-6 text-sm text-white/80 lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={`mobile-${link.name}`}>
                {link.type === 'route' ? (
                  <Link
                    to={link.href}
                    className={baseLinkClasses}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    to={anchorToHome(link.href)}
                    className={baseLinkClasses}
                    onClick={(event) => {
                      handleAnchorClick(event, link.href);
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            {isBlogPage ? (
              <>
                <Link
                  to="/#pricing"
                  className="rounded-full border border-white/20 px-5 py-3 text-center text-xs font-semibold capitalize tracking-[0.1em] text-white/80 transition-all hover:border-white/40 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/#cta"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-center text-xs font-semibold capitalize tracking-[0.1em] text-white transition-all hover:shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Generate Now
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={anchorToHome('#pricing')}
                  className="rounded-full border border-white/20 px-5 py-3 text-center text-xs font-semibold capitalize tracking-[0.1em] text-white/80 transition-all hover:border-white/40 hover:text-white"
                  onClick={(event) => {
                    handleAnchorClick(event, '#pricing');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Link>
                <Link
                  to={anchorToHome('#cta')}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-3 text-center text-xs font-semibold capitalize tracking-[0.1em] text-white transition-all hover:shadow-lg"
                  onClick={(event) => {
                    handleAnchorClick(event, '#cta');
                    setIsMenuOpen(false);
                  }}
                >
                  Generate Now
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
