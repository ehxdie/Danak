import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAnchor, FiTruck, FiBox, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { servicesData } from '../../data/services';
import { staggerContainer, fadeUp } from '../../utils/animations';

const iconMap: Record<string, React.ReactNode> = {
  FiAnchor: <FiAnchor className="w-7 h-7 text-[#0A2A52]" />,
  FiTruck: <FiTruck className="w-7 h-7 text-[#0A2A52]" />,
  FiBox: <FiBox className="w-7 h-7 text-[#0A2A52]" />,
  FiTrendingUp: <FiTrendingUp className="w-7 h-7 text-[#0A2A52]" />
};

export const ServicesPreview: React.FC = () => {
  // Preview first 4 services on home page
  const previewServices = servicesData.slice(0, 4);

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="Our Capabilities"
          title="Core Services We Deliver"
          description="Reliable marine and offshore solutions tailored to your operational needs."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {previewServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {iconMap[service.icon] || <FiAnchor className="w-7 h-7 text-[#0A2A52]" />}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{service.title}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed mb-6">{service.description}</p>
              </div>

              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2A52] hover:text-[#D9A441] transition-colors"
              >
                Learn More <FiArrowRight />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
