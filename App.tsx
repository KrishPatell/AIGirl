import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThumbnailCarouselSection from './components/ThumbnailCarouselSection';
import HowItWorksSection from './components/HowItWorksSection';
import LiveGallerySection from './components/LiveGallerySection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogPreviewSection from './components/BlogPreviewSection';
import FAQSection from './components/FAQSection';
import StickyCTA from './components/StickyCTA';
import ExitIntentModal from './components/ExitIntentModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#050505] text-[#F8FAFC] font-sans antialiased">
      <ExitIntentModal />
      <Header />
      <main>
        <HeroSection />
        <ThumbnailCarouselSection />
        <HowItWorksSection />
        <GallerySection />
        <LiveGallerySection />
        <TestimonialsSection />
        <PricingSection />
        <BlogPreviewSection />
        <FAQSection />
      </main>
      <StickyCTA />
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
