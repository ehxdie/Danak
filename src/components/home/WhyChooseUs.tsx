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
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/60">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const isLastOdd = index === features.length - 1;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`bg-white p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#0A2A52]/30 transition-all duration-300 flex flex-col ${
                  isLastOdd ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A2A52]/5 text-[#0A2A52] flex items-center justify-center mb-5 shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2A52] mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
