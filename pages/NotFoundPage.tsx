import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F8FAFC]">
      <Header />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:px-8">
        <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          404
        </span>
        <h1 className="mt-6 text-4xl font-semibold text-white">This page stepped off the runway.</h1>
        <p className="mt-4 text-sm text-white/65 sm:text-base">
          The link you followed is no longer strutting here. Explore the latest sexy AI playbooks and presets from VIXLOR.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-gradient-to-r from-[#FF00A8] via-[#7F2BFF] to-[#00F0FF] px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-black"
          >
            Return Home
          </Link>
          <Link
            to="/blog"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 hover:border-white/50 hover:text-white"
          >
            Explore the Blog
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
