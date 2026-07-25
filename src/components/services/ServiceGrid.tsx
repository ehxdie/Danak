import React from 'react';
import { motion } from 'framer-motion';
import { FiAnchor, FiTruck, FiBox, FiTrendingUp } from 'react-icons/fi';
import { servicesData } from '../../data/services';
import { Button } from '../common/Button';

const iconMap: Record<string, React.ReactNode> = {
  FiAnchor: <FiAnchor className="w-8 h-8 text-[#0A2A52]" />,
  FiTruck: <FiTruck className="w-8 h-8 text-[#0A2A52]" />,
  FiBox: <FiBox className="w-8 h-8 text-[#0A2A52]" />,
  FiTrendingUp: <FiTrendingUp className="w-8 h-8 text-[#0A2A52]" />
};

export const ServiceGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F8FAFC] p-8 md:p-10 rounded-3xl border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-4">{service.title}</h3>
                <p className="text-base text-[#4B5563] leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm font-medium text-[#0A2A52] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button to="/contact" variant="primary" size="md">
                  Enquire About Service
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
