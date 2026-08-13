import React, { useState } from 'react';
import { Button } from '../common/Button';
import { FiCheckCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'marine-logistics',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS keys are configured in environment variables
    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
      console.warn('EmailJS keys are not configured in .env yet. Simulating success submission.');
      // Simulate brief network delay for UX demonstration
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            company: formData.company || 'N/A',
            phone: formData.phone || 'N/A',
            service_required: formData.service,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setLoading(false);
        setSubmitted(true);
      } else {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to send email');
      }
    } catch (err: unknown) {
      console.error('EmailJS error:', err);
      setLoading(false);
      const message = err instanceof Error ? err.message : undefined;
      setErrorMessage(
        message || 'Failed to send message via EmailJS. Please try again or contact us directly via email.'
      );
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xs text-center">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
          <FiCheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#111827] mb-2">Message Sent!</h3>
        <p className="text-[#4B5563] text-sm mb-6">
          Thank you for reaching out. Our operations team has received your enquiry and will respond shortly.
        </p>
        <Button 
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              company: '',
              email: '',
              phone: '',
              service: 'marine-logistics',
              message: ''
            });
          }} 
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xs">
      <h3 className="text-2xl font-bold text-[#111827] mb-6">Send Us a Message</h3>

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs flex items-center gap-2">
          <FiAlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Name *</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Company</label>
          <input
            type="text"
            placeholder="Company Ltd"
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
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Phone Number</label>
          <input
            type="tel"
            placeholder="+234 800 000 0000"
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
          <option value="marine-logistics">Marine & Logistics</option>
          <option value="equipment-management">Equipment Management</option>
          <option value="procurement-supply">Procurement & Supply</option>
          <option value="facilities-management">Facilities Management</option>
          <option value="project-support">Project & Operations Support</option>
          <option value="consultancy">Consultancy & Advisory</option>
        </select>
      </div>

      <div className="mb-8">
        <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Your Message *</label>
        <textarea
          required
          rows={5}
          placeholder="How can we assist your maritime operations?"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A2A52] focus:outline-hidden text-sm"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full flex items-center justify-center gap-2" disabled={loading}>
        {loading ? (
          <>
            <FiLoader className="w-5 h-5 animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          'Submit Enquiry'
        )}
      </Button>
    </form>
  );
};

