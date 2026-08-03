import React from 'react';
import { motion } from 'framer-motion';
import { companyData } from '../../data/company';

export const CompanyStory: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-3xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Danak Company Operations" 
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] mb-3 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] mb-6">
              About Danak Logistics resource Ltd
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed mb-6">
              {companyData.description}
            </p>
            <p className="text-base text-[#4B5563] leading-relaxed">
              We combine practical industry knowledge with a commitment to safety, professionalism and operational excellence, enabling our clients to focus on their core business while we provide dependable support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
