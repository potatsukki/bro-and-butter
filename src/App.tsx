import { useEffect, useState } from 'react';
import Navbar from './components/layout/Navbar';
import SiteFooter from './components/layout/SiteFooter';
import CollectionSection from './components/sections/CollectionSection';
import HeroSection from './components/sections/HeroSection';
import ProcessSection from './components/sections/ProcessSection';
import PromoSection from './components/sections/PromoSection';
import TestimonialSection from './components/sections/TestimonialSection';
import PaymentModal from './components/shared/PaymentModal';

const navSectionIds = ['story', 'collection', 'catering', 'visit'] as const;

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentItemLabel, setPaymentItemLabel] = useState('Bros and Batter Order');

  const openPaymentModal = (itemLabel: string) => {
    setPaymentItemLabel(itemLabel);
    setIsPaymentOpen(true);
  };

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

  useEffect(() => {
    const findActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let nextActive = '';

      for (const id of navSectionIds) {
        const section = document.getElementById(id);
        if (!section) {
          continue;
        }

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (marker >= top && marker < bottom) {
          nextActive = id;
          break;
        }
      }

      if (nextActive !== activeSection) {
        setActiveSection(nextActive);
      }
    };

    findActiveSection();
    window.addEventListener('scroll', findActiveSection, { passive: true });
    window.addEventListener('resize', findActiveSection);
    return () => {
      window.removeEventListener('scroll', findActiveSection);
      window.removeEventListener('resize', findActiveSection);
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#2f342e]">
      <Navbar
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        activeSection={activeSection}
        onOrderClick={() => openPaymentModal('Reserve Batch')}
        onLinkClick={(sectionId) => setActiveSection(sectionId)}
        onToggleMenu={() => setIsMenuOpen((previous) => !previous)}
        onCloseMenu={() => setIsMenuOpen(false)}
      />

      <main>
        <HeroSection onOrderClick={() => openPaymentModal('Join Next Drop')} />
        <CollectionSection onOrderClick={(itemLabel) => openPaymentModal(itemLabel)} />
        <ProcessSection />
        <TestimonialSection />
        <PromoSection onOrderClick={(itemLabel) => openPaymentModal(itemLabel)} />
      </main>

      <SiteFooter />

      <PaymentModal
        isOpen={isPaymentOpen}
        itemLabel={paymentItemLabel}
        onClose={() => setIsPaymentOpen(false)}
      />
    </div>
  );
}

export default App;
