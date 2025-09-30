import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Choose a Style',
    description: 'Pick from curated presets like Cyber Vogue, Anime Luxe, or Mythic Couture — each tuned for lighting, mood, and camera fidelity.',
    icon: '01',
  },
  {
    title: 'Enter Your Prompt',
    description: 'Direct the muse with cinematic prompt templates, fine-tune with sliders, and preview adjustments in real time before render.',
    icon: '02',
  },
  {
    title: 'Generate Stunning AI Girl',
    description: 'Render in seconds with our haute couture-trained diffusion model, export in 4K, and remix instantly for your next concept.',
    icon: '03',
  },
];

const features = [
  'Safe-mode filters & NSFW controls',
  'Batch rendering with prompt variations',
  'High-res upscaler + background cleaner',
  'Shareable galleries & embed links',
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#090909] py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,0,168,0.12),_rgba(13,13,13,0))]" aria-hidden />
      <div className="mx-auto max-w-[1240px] px-5 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60"
          >
            Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          >
            Launch a cinematic AI muse in three stylish moves
          </motion.h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-white/40">{step.icon}</span>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{step.description}</p>
              <span className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-[#FF00A8]/80 group-hover:text-[#00F0FF]">
                Swipe to see next →
              </span>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-14 rounded-3xl border border-white/10 bg-[#0B0B0B]/80 p-8 sm:p-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Built for creators, engineered for scale</h3>
              <p className="text-base text-white/60">
                VIXLOR orchestrates GSAP-powered interactions in Webflow-ready modules so your landing page breathes.
                Our neural engines pre-bake lighting, makeup, and wardrobe cues so anyone can output publish-ready shots.
              </p>
            </div>
            <ul className="grid gap-4 text-sm text-white/70">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-[#FF00A8] to-[#00F0FF]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
