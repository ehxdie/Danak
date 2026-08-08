import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook, 
  FiInstagram, 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiArrowUp, 
  FiChevronRight
} from 'react-icons/fi';
import { companyData } from '../../data/company';
import danakLogo from '../../assets/danak_logo_exact_transparent.png';
 
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#061427] text-gray-300 relative pt-16 pb-10 border-t border-[#132A4A] overflow-hidden">
      {/* Subtle Background Glow Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A2A52]/30 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#D9A441]/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info (LG: 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={danakLogo} alt={companyData.name} className="h-24 w-auto object-contain py-2" />
            </Link>
            
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              {companyData.description}
            </p>

            {/* Quick Contact Micro Info */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 text-[#D9A441] shrink-0 mt-0.5" />
                <span className="text-gray-300">{companyData.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-white transition-colors">
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-[#D9A441] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white transition-colors">
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (LG: 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs font-semibold text-[#D9A441]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Our Services', path: '/services' },
                { label: 'Contact Us', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#D9A441] transition-colors group"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#D9A441] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs font-semibold text-[#D9A441]">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {[
                'Marine Logistics',
                'Vessel Management',
                'Equipment Management',
                'Procurement & Supply',
                'Consultancy & Project Support'
              ].map((service, idx) => (
                <li key={idx}>
                  <Link 
                    to="/services" 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#D9A441] transition-colors group"
                  >
                    <FiChevronRight className="w-3.5 h-3.5 text-[#D9A441] opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect With Us (LG: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide uppercase text-xs font-semibold text-[#D9A441]">
              Connect With Us
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Reach out or follow our social channels for operational news and maritime support.
            </p>

            <div className="pt-1">
              <div className="flex items-center gap-2.5">
                {[
                  { icon: <FiLinkedin className="w-4 h-4" />, label: 'LinkedIn' },
                  { icon: <FiTwitter className="w-4 h-4" />, label: 'Twitter' },
                  { icon: <FiFacebook className="w-4 h-4" />, label: 'Facebook' },
                  { icon: <FiInstagram className="w-4 h-4" />, label: 'Instagram' }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-white/5 text-gray-300 flex items-center justify-center hover:bg-[#D9A441] hover:text-[#0A2A52] transition-all duration-200 border border-white/10"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} {companyData.name}. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#D9A441] hover:text-[#0A2A52] text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};





