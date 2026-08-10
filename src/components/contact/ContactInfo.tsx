import React from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { companyData } from '../../data/company';

export const ContactInfo: React.FC = () => {
  const items = [
    { 
      icon: <FiMapPin />, 
      title: 'Lagos Office Address', 
      details: (
        <>
          Km 34 Lekki-Epe Expressway<br />
          Opposite Emperor Estate<br />
          Sangotedo, Lekki
        </>
      ) 
    },
    { icon: <FiMail />, title: 'Email Address', details: <a href={`mailto:${companyData.email}`} className="hover:underline">{companyData.email}</a> },
    { icon: <FiPhone />, title: 'Phone Line', details: companyData.phone },
  ];

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0A2A52] flex items-center justify-center text-xl shrink-0">
            {item.icon}
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#111827] mb-1">{item.title}</h4>
            <p className="text-sm text-[#4B5563] leading-relaxed">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
