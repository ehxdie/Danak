import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { CompanyStory } from '../components/about/CompanyStory';
import { MissionVision } from '../components/about/MissionVision';
import { Values } from '../components/about/Values';
import { CTASection } from '../components/common/CTASection';

export const About: React.FC = () => {
  return (
    <>
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
