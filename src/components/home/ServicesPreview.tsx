import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiAnchor, FiTruck, FiBox, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { staggerContainer, fadeUp } from '../../utils/animations';

const homeServices = [
  {
    id: 'marine-logistics',
    title: 'Marine Logistics',
    description: 'Reliable logistics support for offshore and marine operations.',
    icon: <FiAnchor className="w-7 h-7 text-[#0A2A52]" />
  },
  {
    id: 'equipment-management',
    title: 'Equipment Management',
    description: 'Management, coordination and support for marine equipment and operational assets.',
    icon: <FiTruck className="w-7 h-7 text-[#0A2A52]" />
  },
  {
    id: 'procurement-supply',
    title: 'Procurement & Supply',
    description: 'Sourcing and supply of marine equipment, materials and operational requirements.',
    icon: <FiBox className="w-7 h-7 text-[#0A2A52]" />
  },
  {
    id: 'consultancy-project-support',
    title: 'Consultancy & Project Support',
    description: 'Business advisory, regulatory support and project coordination for maritime and offshore operations.',
    icon: <FiBriefcase className="w-7 h-7 text-[#0A2A52]" />
  }
];

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="Our Capabilities"
          title="Our Services"
          description="Reliable marine and offshore solutions tailored to your operational needs."
        />

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {homeServices.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xs hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {service.icon}
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

