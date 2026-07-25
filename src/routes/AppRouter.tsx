import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Contact } from '../pages/Contact';
import { NotFound } from '../pages/NotFound';

export const AppRouter: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
