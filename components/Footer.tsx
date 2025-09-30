import React from 'react';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Generate', href: '#prompt' },
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
  return (
    <footer className="border-t border-white/8 bg-[#040404] pb-12 pt-16 text-white/70">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-12 px-5 sm:px-10 lg:flex-row lg:justify-between lg:px-16">
        <div className="max-w-sm space-y-5">
          <a href="#top" className="text-lg font-semibold uppercase tracking-[0.35em] text-white">
            VIXLOR AI
          </a>
          <p className="text-sm leading-relaxed text-white/65">
            The sexy AI girl generator engineered for high-converting launches. We blend couture-trained diffusion with production-ready Webflow and GSAP components.
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
                    <a href={link.href} className="transition-colors hover:text-white">
                      {link.label}
                    </a>
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
