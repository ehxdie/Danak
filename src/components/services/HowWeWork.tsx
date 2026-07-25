import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiCompass, FiZap, FiCheck } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

export const HowWeWork: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Consultation & Assessment',
      desc: 'We analyze your marine logistics or equipment requirements in detail.',
      icon: <FiMessageSquare />
    },
    {
      num: '02',
      title: 'Strategy & Sourcing',
      desc: 'Our team formulates an efficient operational plan and sources appropriate vessels/assets.',
      icon: <FiCompass />
    },
    {
      num: '03',
      title: 'Execution & Support',
      desc: 'We coordinate full deployment with continuous 24/7 field monitoring.',
      icon: <FiZap />
    },
    {
      num: '04',
      title: 'Completion & Review',
      desc: 'Timely project delivery adhering strictly to safety compliance and standards.',
      icon: <FiCheck />
    }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container-custom">
        <SectionTitle 
          eyebrow="Our Process"
          title="How We Work"
          description="A structured workflow designed for clarity, safety, and operational speed."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-gray-100 relative shadow-xs"
            >
              <span className="text-4xl font-extrabold text-gray-200 block mb-4">
                {step.num}
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A2A52] flex items-center justify-center text-xl mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111827] mb-2">{step.title}</h3>
              <p className="text-xs text-[#4B5563] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
