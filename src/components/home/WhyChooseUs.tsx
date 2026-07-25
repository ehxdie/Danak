import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiBriefcase, FiZap, FiUsers } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <FiBriefcase className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Professional & Dependable Service',
      // description: 'Transparent execution and standard-setting logistics operations.'
    },
    {
      icon: <FiZap className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Industry-Focused Solutions',
      // description: 'Decades of domain expertise applied to West African oil, gas and logistics.'
    },
    {
      icon: <FiShield className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Strong Commitment to Safety',
      // description: 'Unyielding adherence to NIMASA, HSE, and international protocols.'
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Responsive Project Support',
      // description: '24/7 readiness to deploy assets and resolve offshore technical tasks.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Client-Focused Approach',
      // description: 'Operational strategy engineered specifically around your project scope.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="The Danak Advantage"
          title="Why Choose Danak"
          description="We combine operational excellence with industry-leading support to keep your operations moving."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 text-center hover:border-[#D9A441] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">{feature.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
