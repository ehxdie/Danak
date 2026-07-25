import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <div className="py-32 text-center container-custom">
    <h1 className="text-6xl font-extrabold text-[#0A2A52] mb-4">404</h1>
    <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
    <Link to="/" className="px-6 py-3 bg-[#0A2A52] text-white rounded-xl font-semibold hover:bg-[#174C7A] transition-colors">
      Back to Home
    </Link>
  </div>
);
