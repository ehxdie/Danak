import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiUsers, FiClock, FiAward } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <FiShield className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Safety First Culture',
      description: 'Strict adherence to international maritime safety standards and HSE protocols.'
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Proven Reliability',
      description: 'Consistently meeting project timelines with zero-compromise quality.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Expert Team',
      description: 'Decades of combined offshore and maritime logistics expertise in Nigeria.'
    },
    {
      icon: <FiClock className="w-6 h-6 text-[#0A2A52]" />,
      title: '24/7 Operations',
      description: 'Round-the-clock operational support for urgent vessel and cargo logistics.'
    },
    {
      icon: <FiAward className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Client Centric',
      description: 'Tailored solutions aligned directly with your project requirements.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="The Danak Advantage"
          title="Why Choose Danak Logistics"
          description="We combine industry knowledge with operational execution to maximize performance."
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
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 text-center hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2">{feature.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
