import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animations';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  description,
  align = 'center'
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`max-w-2xl mb-12 ${isCenter ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <span className="text-xs font-bold uppercase tracking-widest text-[#0A2A52] mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-base md:text-lg text-[#4B5563] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};
