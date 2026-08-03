import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { CTASection } from '../components/common/CTASection';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Marine Logistics & Offshore Support Solutions"
        description="Danak Logistics resource Ltd provides premier marine logistics, vessel management, equipment support, and offshore consultancy across Nigeria."
      />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <CTASection />
    </>
  );
};

