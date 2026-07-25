import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { fadeUp } from '../../utils/animations';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A2A52] text-white relative overflow-hidden">
      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-[#D9A441]">
            Ready to discuss your next project?
          </h2>
          <p className="text-base text-gray-200 mb-8 leading-relaxed">
            Our team is ready to support your marine logistics, vessel chartering, and offshore operational needs across Nigeria.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


