import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import { companyData } from '../../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05172E] text-white pt-20 pb-10 border-t border-[#0F3666]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#0F3666]">
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#D9A441] text-[#0A2A52] flex items-center justify-center font-extrabold text-lg">
                D
              </span>
              <span className="text-white font-extrabold">
                {companyData.name.split(' ')[0]} <span className="text-[#D9A441] font-normal">Logistics</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              {companyData.description}
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold text-[#D9A441] mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-[#D9A441] transition-colors flex items-center gap-2">
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D9A441]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#D9A441] transition-colors flex items-center gap-2">
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D9A441]" /> About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#D9A441] transition-colors flex items-center gap-2">
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D9A441]" /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#D9A441] transition-colors flex items-center gap-2">
                  <FiArrowRight className="w-3.5 h-3.5 text-[#D9A441]" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Offered */}
          <div>
            <h4 className="text-base font-bold text-[#D9A441] mb-5 uppercase tracking-wider text-xs">Our Core Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" /> Marine Logistics</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" /> Vessel Management</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" /> Equipment Management</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" /> Technical Consultancy</li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-base font-bold text-[#D9A441] mb-5 uppercase tracking-wider text-xs">Get In Touch</h4>
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <FiMapPin className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="w-5 h-5 text-[#D9A441] shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-[#D9A441] transition-colors">{companyData.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="w-5 h-5 text-[#D9A441] shrink-0" />
                <a href={`tel:${companyData.phone}`} className="hover:text-[#D9A441] transition-colors">{companyData.phone}</a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>Copyright © {companyData.name}. All Rights Reserved. 2026</p>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
