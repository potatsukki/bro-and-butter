import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';
import CollectionSection from './components/sections/CollectionSection';
import HeroSection from './components/sections/HeroSection';
import ProcessSection from './components/sections/ProcessSection';
import PromoSection from './components/sections/PromoSection';
import TestimonialSection from './components/sections/TestimonialSection';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#2f342e]">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((previous) => !previous)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main>
        <HeroSection />
        <CollectionSection />
        <ProcessSection />
        <TestimonialSection />
        <PromoSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
