import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiCompass } from 'react-icons/fi';
import { companyData } from '../../data/company';

export const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <FiTarget className="w-7 h-7 text-[#0A2A52]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Mission</h3>
            <p className="text-base text-[#4B5563] leading-relaxed">{companyData.mission}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xs"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
              <FiCompass className="w-7 h-7 text-[#0A2A52]" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827] mb-4">Our Vision</h3>
            <p className="text-base text-[#4B5563] leading-relaxed">{companyData.vision}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
