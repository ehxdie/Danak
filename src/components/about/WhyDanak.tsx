import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { Button } from '../common/Button';
import { fadeRight, fadeLeft } from '../../utils/animations';

export const WhyDanak: React.FC = () => {
  const points = [
    { title: 'Deep Offshore & Marine Domain Expertise', desc: 'Over a decade of combined operational experience across West African waters.' },
    { title: 'Strict HSE & Regulatory Compliance', desc: 'Full adherence to NIMASA, DPR, and international maritime safety protocols.' },
    { title: 'Rapid Vessel & Heavy Equipment Deployment', desc: '24/7 responsiveness for urgent offshore logistics and cargo chartering.' },
    { title: 'Tailored Client-Focused Operations', desc: 'Customized logistics strategies designed specifically around your project scope.' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] bg-blue-50 px-3 py-1.5 rounded-full inline-block">
              Why Danak Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] leading-tight">
              Operational Excellence & Unmatched Dependability
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              We empower maritime operators, energy companies, and offshore contractors with seamless logistics, quality equipment, and transparent consultancy support.
            </p>

            <div className="space-y-4 pt-2">
              {points.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-[#D9A441] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-base font-bold text-[#111827]">{p.title}</h4>
                    <p className="text-sm text-[#4B5563]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button to="/contact" variant="primary" size="lg">
                Partner With Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80"
                alt="Offshore Marine Operations"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
