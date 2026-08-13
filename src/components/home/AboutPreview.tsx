import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { companyData } from '../../data/company';
import { fadeRight, fadeLeft } from '../../utils/animations';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Offshore Marine Operations" 
                loading="lazy"
                decoding="async"
                className="w-full h-[380px] md:h-[450px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] mb-3 block">
              About Danak Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-6">
              Your Reliable Partner for Logistics & Operations
            </h2>
            <p className="text-base md:text-lg text-[#4B5563] leading-relaxed mb-6">
              {companyData.description}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed mb-4">
              Danak Logistics Resource Ltd is a Nigerian company providing integrated logistics, operational,
              and business support solutions across the maritime, energy, construction, commercial, and
              infrastructure sectors.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed mb-4">
              We help businesses source what they need, manage what they have, and execute what matters
              — from procurement and equipment management to facilities, marine logistics, and project
              support.
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed mb-8">
              By connecting trusted resources, capable partners, and practical expertise, we deliver efficient,
              dependable solutions tailored to the needs of each client.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

 