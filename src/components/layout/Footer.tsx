import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B192C] text-white py-12 border-t border-[#1E3E62]">
      <div className="container-custom flex flex-col items-center justify-center text-center">
        
        {/* Quick Links */}
        <div className="mb-6">
          <h4 className="text-lg font-bold text-[#F59E0B] mb-3 tracking-wide">Quick Links</h4>
          <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-white">
            <li>
              <Link to="/" className="hover:text-[#F59E0B] transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#F59E0B] transition-colors">About</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#F59E0B] transition-colors">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#F59E0B] transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4 mb-6">
          <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-[#F59E0B] hover:text-[#0B192C] transition-all border border-white/20">
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-[#F59E0B] hover:text-[#0B192C] transition-all border border-white/20">
            <FiTwitter className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-[#F59E0B] hover:text-[#0B192C] transition-all border border-white/20">
            <FiFacebook className="w-5 h-5" />
          </a>
          <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center hover:bg-[#F59E0B] hover:text-[#0B192C] transition-all border border-white/20">
            <FiInstagram className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/15 w-full max-w-md">
          <p className="text-xs text-gray-200 font-medium">
            Copyright © Danak Logistics & Resources Ltd. All Rights Reserved. 2026
          </p>
        </div>

      </div>
    </footer>
  );
};



