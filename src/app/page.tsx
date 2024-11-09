import React from 'react';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero';
import RewardsSection from '@/components/rewards';
import About from '@/components/about';
import FAQAccordion from '@/components/faq';
import Footer from '@/components/footer';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <FAQAccordion />
      <RewardsSection />
      <Footer />
      {/* Add other sections here as needed */}
    </div>
  );
};

export default HomePage;
