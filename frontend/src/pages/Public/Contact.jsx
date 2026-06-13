import React, { useState } from 'react';
import useToast from '../../hooks/useToast';
import useForm from '../../hooks/useForm';
import inquiryService from '../../services/inquiryService';

const Contact = () => {
  const { success, error } = useToast();
  const form = useForm(
    { name: '', email: '', subject: '', message: '' },
    async (values) => {
      try {
        await inquiryService.createInquiry(values);
        success('Your inquiry has been submitted successfully!');
        form.resetForm();
      } catch (err) {
        error('Failed to submit inquiry. Please try again.');
      }
    }
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">Have questions? We'd love to hear from you.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">📧 Email</h3>
              <p className="text-gray-600">info@travelhub.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">📞 Phone</h3>
              <p className="text-gray-600">+91-9876543210</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">📍 Address</h3>
              <p className="text-gray-600">123 Travel Street, Mumbai, Maharashtra, India</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">🕒 Working Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={form.handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.values.name}
                onChange={form.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.values.email}
                onChange={form.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.values.subject}
                onChange={form.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-bold mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={form.values.message}
                onChange={form.handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                required
              />
            </div>
            <button
              type="submit"
              disabled={form.isSubmitting}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            >
              {form.isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
