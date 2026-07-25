import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCheckCircle, FiAward, FiUsers, FiHeart } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

export const Values: React.FC = () => {
  const values = [
    { title: 'Integrity', desc: 'Operating with full transparency and ethical accountability.', icon: <FiShield /> },
    { title: 'Reliability', desc: 'Delivering results on schedule without compromising standard.', icon: <FiCheckCircle /> },
    { title: 'Safety', desc: 'Prioritizing HSE protocols in all offshore and port environments.', icon: <FiHeart /> },
    { title: 'Excellence', desc: 'Striving for continuous improvement in services and equipment.', icon: <FiAward /> },
    { title: 'Partnership', desc: 'Building long-term collaborative relations with our clients.', icon: <FiUsers /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="Guided By Principles"
          title="Core Values"
          description="The values that guide every operational decision we make."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-gray-100 text-center hover:border-[#0A2A52] transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#0A2A52] flex items-center justify-center mx-auto mb-4 text-xl">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">{v.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
