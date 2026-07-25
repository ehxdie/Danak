import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import { SectionTitle } from '../common/SectionTitle';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What regions in Nigeria do you provide marine logistics services?',
      a: 'We operate primarily across Nigeria’s major offshore oil & gas corridors, including Port Harcourt, Warri, Bonny, Calabar, and Lagos ports.'
    },
    {
      q: 'Do you offer vessel chartering and equipment rental services?',
      a: 'Yes, we provide specialized marine vessels, supply boats, tugs, and heavy-duty offshore equipment tailored for short-term or long-term operational contracts.'
    },
    {
      q: 'How do you ensure compliance with maritime safety regulations?',
      a: 'All our operational procedures adhere strictly to NIMASA, NIPEX, DPR guidelines, and ISO international safety standards.'
    },
    {
      q: 'Can Danak assist with emergency or 24/7 logistics requests?',
      a: 'Absolutely. We maintain a round-the-clock rapid response team for urgent offshore cargo, crew transfers, and technical support.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <SectionTitle
          eyebrow="Common Enquiries"
          title="Frequently Asked Questions"
          description="Everything you need to know about partnering with Danak Logistics."
        />

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl bg-[#F8FAFC] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-hidden"
                >
                  <span className="font-bold text-base text-[#111827]">{faq.q}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-[#0A2A52] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-sm text-[#4B5563] leading-relaxed border-t border-gray-100/50 pt-3"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
