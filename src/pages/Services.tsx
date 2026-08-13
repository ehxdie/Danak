import React from 'react';
import { SEO } from '../components/common/SEO';
import { PageBanner } from '../components/common/PageBanner';
import { ServiceGrid } from '../components/services/ServiceGrid';
import { CTASection } from '../components/common/CTASection';

export const Services: React.FC = () => {
  return (
    <>
      <SEO 
        title="Our Services | Marine & Logistics, Operations & Facilities Management"
        description="Comprehensive marine & logistics, equipment management, procurement & supply, facilities management, project & operations support, and consultancy & advisory in Nigeria."
      />
      <PageBanner 
        title="Our Services" 
        subtitle="Practical solutions and reliable execution across marine logistics, facilities, equipment, and project operations."
      />
      <ServiceGrid />
      <CTASection />
    </>
  );
};

