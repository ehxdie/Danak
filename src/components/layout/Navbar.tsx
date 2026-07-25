import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { companyData } from '../../data/company';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A2A52] text-white border-b border-[#174C7A] shadow-md">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-[#D9A441] text-[#0A2A52] flex items-center justify-center font-extrabold text-xl shadow-xs">
            D
          </span>
          <span className="text-white font-extrabold">
            {companyData.name.split(' ')[0]} <span className="text-[#D9A441] font-normal">Logistics</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#D9A441] font-bold border-b-2 border-[#D9A441] pb-1'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2.5 text-sm font-bold text-[#0A2A52] bg-[#D9A441] hover:bg-[#e2b152] rounded-xl transition-all duration-300 shadow-sm"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2.5 rounded-xl text-white hover:bg-[#174C7A] focus:outline-hidden transition-colors"
        >
          {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071D39] border-b border-[#174C7A] px-6 py-6 space-y-4 shadow-xl">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-semibold py-2 transition-colors ${
                  isActive ? 'text-[#D9A441] pl-2 border-l-4 border-[#D9A441]' : 'text-gray-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-[#174C7A]">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 text-sm font-bold text-[#0A2A52] bg-[#D9A441] hover:bg-[#e2b152] rounded-xl transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
