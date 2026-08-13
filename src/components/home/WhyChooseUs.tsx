import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield, FiBriefcase, FiZap, FiUsers } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';
import { staggerContainer, fadeUp } from '../../utils/animations';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <FiBriefcase className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Reliable Service Delivery',
      description: 'We take a practical, hands-on approach to delivering dependable solutions across logistics, procurement, facilities, equipment, and project support.'
    },
    {
      icon: <FiZap className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Integrated Solutions',
      description: 'From sourcing and supply to facilities and marine operations, we connect complementary services to address your operational needs in one place.'
    },
    {
      icon: <FiShield className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Strong Commitment to Safety',
      description: 'Unyielding adherence to NIMASA, HSE, and international protocols.'
    },
    {
      icon: <FiCheckCircle className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Safety & Professional Standards',
      description: 'Safety, accountability and professionalism are built into how we work, with a commitment to responsible service delivery across every engagement.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Responsive Project Support',
      description: 'We understand that operational needs can change quickly. Our team works closely with clients to respond efficiently and keep projects moving forward.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Strong Resource Network',
      description: 'We connect clients with trusted suppliers, service providers, equipment and operational resources to get the right solutions in place.'
    },
    {
      icon: <FiUsers className="w-6 h-6 text-[#0A2A52]" />,
      title: 'Client-Focused Approach',
      description: 'Every business has different requirements. We listen, understand the challenge and tailor our approach to deliver solutions that are practical, efficient and fit for purpose. '
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="The Danak Advantage"
          title="Built to Deliver. Ready to Support."
          description="We bring together the resources, expertise, and operational coordination businesses need to get things done — reliably, efficiently, and safely."
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
