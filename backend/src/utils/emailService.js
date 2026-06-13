const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendEmail = async (to, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM || 'noreply@travelagency.com',
      to,
      subject,
      html: htmlContent
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, message: 'Email sending failed', error: error.message };
  }
};

const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('✅ Email service verified');
    return true;
  } catch (error) {
    console.error('❌ Email service verification failed:', error);
    return false;
  }
};

module.exports = { sendEmail, verifyEmailConnection };
