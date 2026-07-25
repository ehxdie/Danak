import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  image = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80'
}) => {
  return (
    <section className="relative h-[320px] md:h-[400px] flex items-center justify-center bg-[#0A2A52] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-25">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="container-custom relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
