import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { fadeRight, fadeLeft } from '../../utils/animations';
import { FiTarget, FiLayers } from 'react-icons/fi';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50/50 relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with Floating Card Overlay */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80" 
                alt="Offshore Marine Operations" 
                loading="lazy"
                decoding="async"
                className="w-full h-[400px] md:h-[480px] object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A52]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 right-6 bg-[#0A2A52] text-white p-5 rounded-2xl shadow-xl border border-white/20 hidden sm:flex items-center gap-4 max-w-xs backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D9A441] text-[#0A2A52] flex items-center justify-center font-black text-xl shrink-0">
                ✓
              </div>
              <p className="text-xs font-semibold leading-snug text-slate-100">
                Integrated logistics & operational support across Nigeria
              </p>
            </div>
          </motion.div>

          {/* Right Column: Structured Text & Highlights */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] bg-blue-50 px-3 py-1.5 rounded-full inline-block border border-blue-100 mb-4">
              About Danak Logistics
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2A52] tracking-tight mb-4">
              Your Reliable Partner for Logistics & Operations
            </h2>
            
            <p className="text-base text-gray-600 leading-relaxed mb-6">
              Danak Logistics Resource Ltd is a Nigerian company providing integrated logistics, operational,
              and business support solutions across the maritime, energy, construction, commercial, and
              infrastructure sectors.
            </p>

            {/* Structured Feature Callout Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-blue-200 transition-colors">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#0A2A52] shrink-0 mt-0.5">
                  <FiTarget className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2A52] mb-1">Source, Manage & Execute</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    We help businesses source what they need, manage what they have, and execute what matters
                    — from procurement and equipment management to facilities, marine logistics, and project support.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4 hover:border-blue-200 transition-colors">
                <div className="p-2.5 rounded-xl bg-amber-50 text-[#D9A441] shrink-0 mt-0.5">
                  <FiLayers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A2A52] mb-1">Practical Expertise & Tailored Solutions</h4>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    By connecting trusted resources, capable partners, and practical expertise, we deliver efficient,
                    dependable solutions tailored to the needs of each client.
                  </p>
                </div>
              </div>
            </div>

            <Button to="/about" variant="primary" size="lg">
              Learn More About Us
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

 