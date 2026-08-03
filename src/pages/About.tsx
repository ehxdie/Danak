import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageBanner } from '../components/common/PageBanner';
import { CompanyStory } from '../components/about/CompanyStory';
import { MissionVision } from '../components/about/MissionVision';
import { Values } from '../components/about/Values';
import { CTASection } from '../components/common/CTASection';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Danak Logistics resource Ltd - our history, mission, vision, and commitment to maritime excellence in Nigeria."
      />
      <PageBanner 
        title="About Danak Logistics" 
        subtitle="Dedicated to excellence in marine logistics, vessel operations, and offshore resources support."
      />
      <CompanyStory />
      <MissionVision />
      <Values />    
      <CTASection />
    </>
  );
};

