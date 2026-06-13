const Inquiry = require('../models/Inquiry');
const { sendEmail } = require('../utils/emailService');

const createInquiry = (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  Inquiry.create({ name, email, subject, message }, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error creating inquiry', error: err });

    // Send confirmation email to user
    const userHtml = `
      <h2>Thank you for contacting us!</h2>
      <p>We have received your inquiry and will get back to you soon.</p>
      <p><strong>Subject:</strong> ${subject}</p>
    `;
    sendEmail(email, 'Inquiry Received', userHtml);

    res.status(201).json({ success: true, message: 'Inquiry submitted successfully', inquiryId: result.insertId });
  });
};

const getInquiryById = (req, res) => {
  const inquiryId = req.params.id;

  Inquiry.findById(inquiryId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Inquiry not found' });

    res.status(200).json({ success: true, inquiry: results[0] });
  });
};

const getAllInquiries = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Inquiry.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, inquiries: results });
  });
};

const updateInquiryStatus = (req, res) => {
  const inquiryId = req.params.id;
  const { status } = req.body;

  const validStatuses = ['pending', 'resolved', 'closed'];
  if (!validStatuses.includes(status)) {
    return res.status(400).json({ success: false, message: 'Invalid status' });
  }

  Inquiry.updateStatus(inquiryId, status, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error updating inquiry', error: err });

    res.status(200).json({ success: true, message: 'Inquiry status updated successfully' });
  });
};

const deleteInquiry = (req, res) => {
  const inquiryId = req.params.id;

  Inquiry.delete(inquiryId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error deleting inquiry', error: err });

    res.status(200).json({ success: true, message: 'Inquiry deleted successfully' });
  });
};

module.exports = { createInquiry, getInquiryById, getAllInquiries, updateInquiryStatus, deleteInquiry };
