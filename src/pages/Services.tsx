import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { CTASection } from '../components/common/CTASection';

export const Services: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Our Services" 
        subtitle="End-to-end marine logistics, equipment rental, procurement, and technical consultancy."
      />
      <ServiceGrid />
      <CTASection />
    </>
  );
};
