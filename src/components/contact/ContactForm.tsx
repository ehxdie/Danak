import React, { useState } from 'react';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'marine-logistics',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xs text-center">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-[#111827] mb-2">Message Sent!</h3>
        <p className="text-[#4B5563] text-sm mb-6">Thank you for reaching out. Our operations team will respond shortly.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xs">
      <h3 className="text-2xl font-bold text-[#111827] mb-6">Send Us a Message</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Name *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Company</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Email Address *</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Phone Number</label>
          <input
            type="tel"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Service Required</label>
        <select
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        >
          <option value="marine-logistics">Marine Logistics</option>
          <option value="vessel-management">Vessel Management</option>
          <option value="equipment-management">Equipment Management</option>
          <option value="procurement-supply">Procurement & Supply</option>
          <option value="consultancy">Consultancy</option>
          <option value="project-support">Project Support</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Your Message *</label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Submit Enquiry
      </Button>
    </form>
  );
};
