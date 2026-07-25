import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { CTASection } from '../components/common/CTASection';

export const Contact: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        subtitle="Let us discuss how Danak Logistics can support your offshore project."
      />
      <section className="py-20 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};
