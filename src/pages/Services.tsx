import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageBanner } from '../components/common/PageBanner';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { CTASection } from '../components/common/CTASection';

export const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Services | Marine Logistics & Vessel Support"
        description="Comprehensive marine logistics, vessel management, equipment rental, procurement, and offshore consultancy services in Nigeria."
      />
      <PageBanner 
        title="Our Services" 
        subtitle="End-to-end marine logistics, equipment rental, procurement, and technical consultancy."
      />
      <ServiceGrid />
      <CTASection />
    </>
  );
};

