import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] bg-blue-50 px-3 py-1.5 rounded-full mb-6 inline-block border border-blue-100">
              Trusted Marine Logistics Partner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight mb-6">
              Your Trusted Maritime Partner
            </h1>
            <p className="text-lg md:text-xl text-[#4B5563] mb-8 leading-relaxed max-w-xl">
              Danak Logistics & Resources Ltd is a Nigerian company providing practical, reliable and efficient marine support solutions. We work with businesses across the maritime, offshore, logistics and energy sectors, delivering services with professionalism, safety and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/services" variant="primary" size="lg">
                Our Services
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-800">
              <img 
                src="/images/maritime-hero.png" 
                alt="Offshore Marine Logistics Cargo Vessel" 
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

