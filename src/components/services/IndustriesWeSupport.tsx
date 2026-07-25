import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

export const IndustriesWeSupport: React.FC = () => {
  const industries = [
    { title: 'Offshore Energy & Power', desc: 'Supporting offshore wind, gas, and power operational platforms.' },
    { title: 'Oil & Gas Exploration', desc: 'Vessel chartering, supply chain, and crew transfers for oilfields.' },
    { title: 'Maritime Construction', desc: 'Heavy equipment rental and marine barge transport for port projects.' },
    { title: 'Government & Defense', desc: 'Compliance-backed coastal logistics and maritime advisory support.' },
    { title: 'Industrial Procurement', desc: 'Sourcing heavy-duty maritime spares and specialized engineering goods.' },
    { title: 'Port & Cargo Handling', desc: 'On-dock loading, cargo clearance, and vessel berthing coordination.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="Sectors We Serve"
          title="Industries We Support"
          description="Delivering tailored marine solutions across diverse industrial sectors."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="p-6 rounded-2xl border border-gray-100 bg-[#F8FAFC] flex items-start gap-4 hover:border-[#0A2A52] transition-colors"
            >
              <FiCheckCircle className="w-6 h-6 text-[#D9A441] shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-bold text-[#111827] mb-1">{ind.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
