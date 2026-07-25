import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image?: string;
  pageName?: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  image = '/images/maritime_banner.png',
  pageName
}) => {
  const location = useLocation();

  // Derive explicit page name based on route if not explicitly passed
  const derivedPageName = pageName || (() => {
    const path = location.pathname.replace('/', '').toLowerCase();
    if (path.includes('service')) return 'Services';
    if (path.includes('contact')) return 'Contact';
    if (path.includes('about')) return 'About';
    return title.split(' ')[0] || 'Page';
  })();

  return (
    <section className="relative min-h-[340px] md:min-h-[400px] flex items-end pb-14 bg-[#051329] text-white overflow-hidden border-b border-[#1E3E62]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          loading="eager" 
          decoding="async" 
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      {/* Dark Heavy Backdrop Overlay to prevent any text clashing */}
      <div className="absolute inset-0 z-1 bg-[#051329]/80 backdrop-blur-[1px]" />

      <div className="container-custom relative z-10 w-full">
        {/* Breadcrumb Tags */}
        <div className="flex items-center gap-2 mb-5 text-xs font-semibold">
          <Link 
            to="/" 
            className="px-3.5 py-1.5 bg-white/20 hover:bg-white/30 rounded-md transition-colors border border-white/25"
            style={{ color: '#FFFFFF' }}
          >
            Home
          </Link>
          <span className="px-3.5 py-1.5 bg-[#F59E0B] text-[#051329] font-bold rounded-md">
            {derivedPageName}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
          style={{ color: '#FFFFFF' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p 
            className="text-base md:text-lg leading-relaxed max-w-2xl font-normal"
            style={{ color: '#E5E7EB' }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};






