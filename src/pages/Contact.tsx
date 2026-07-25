import React from 'react';
import { PageBanner } from '../components/common/PageBanner';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { GoogleMap } from '../components/contact/GoogleMap';
import { FAQ } from '../components/contact/FAQ';
import { CTASection } from '../components/common/CTASection';

export const Contact: React.FC = () => {
  return (
    <>
      <PageBanner 
        title="Let's Work Together" 
        subtitle="Whether you require marine logistics, consultancy or operational support, our team is ready to assist."
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
      <GoogleMap />
      <FAQ />
      <CTASection />
    </>
  );
};
