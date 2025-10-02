import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Generate', href: '#cta' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'How it works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#top' },
      { label: 'Blog', href: '/blog' },
      { label: 'Community', href: '#styles' },
      { label: 'Affiliates', href: '#pricing' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Prompt Library', href: '#gallery' },
      { label: 'API Docs', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const anchorToHome = (hash: string) => (isHome ? hash : `/${hash}`);

  const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    hash: string
  ) => {
    if (isHome) {
      event.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-white/8 bg-[#040404] pb-12 pt-16 text-white/70">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12 px-5 sm:px-10 lg:flex-row lg:justify-between lg:px-16">
        <div className="max-w-sm space-y-5">
          <Link
            to="/"
            className="text-lg font-semibold uppercase tracking-[0.35em] text-white"
            onClick={(event) => {
              if (isHome) {
                event.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            VIXLOR AI
          </Link>
          <p className="text-sm leading-relaxed text-white/65">
            Create stunning AI girl images instantly with our advanced AI generator. Professional quality portraits, anime characters, and custom AI art. Free to use, no signup required.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            <a href="https://x.com" className="hover:text-white">X</a>
            <a href="https://instagram.com" className="hover:text-white">Instagram</a>
            <a href="https://discord.com" className="hover:text-white">Discord</a>
            <a href="mailto:hello@vixlor.ai" className="hover:text-white">Email</a>
          </div>
        </div>

        <div className="grid flex-1 gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title} className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/50">{column.title}</p>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') || link.href.startsWith('mailto:') ? (
                      <a href={link.href} className="transition-colors hover:text-white capitalize tracking-[0.1em]">
                        {link.label}
                      </a>
                    ) : link.href.startsWith('#') ? (
                      <Link
                        to={anchorToHome(link.href)}
                        className="transition-colors hover:text-white capitalize tracking-[0.1em]"
                        onClick={(event) => handleAnchorClick(event, link.href)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link to={link.href} className="transition-colors hover:text-white capitalize tracking-[0.1em]">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1320px] flex-col gap-4 px-5 text-xs uppercase tracking-[0.25em] text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <p>© {new Date().getFullYear()} VIXLOR Labs. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
