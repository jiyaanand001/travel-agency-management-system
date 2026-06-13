const User = require('../models/User');
const { generateToken } = require('../utils/jwtService');
const { comparePassword } = require('../utils/hashPassword');
const { sendEmail } = require('../utils/emailService');

const register = (req, res) => {
  const { name, email, phone, password, confirmPassword, address } = req.body;

  // Validation
  if (!name || !email || !phone || !password || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }

  // Check if user already exists
  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length > 0) {
      return res.status(409).json({ success: false, message: 'Email already registered' });
    }

    // Create new user
    User.create({ name, email, phone, password, address, role: 'customer' }, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error creating user', error: err });

      const token = generateToken({ id: result.insertId, email, role: 'customer' });
      
      res.status(201).json({
        success: true,
        message: 'Registration successful',
        token,
        user: { id: result.insertId, name, email, phone, role: 'customer' }
      });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required' });
  }

  User.findByEmail(email, async (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const user = results[0];
    const isPasswordValid = await comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = generateToken({ id: user.id, email: user.email, role: user.role });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role, phone: user.phone }
    });
  });
};

const logout = (req, res) => {
  res.status(200).json({ success: true, message: 'Logout successful' });
};

const forgotPassword = (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  User.findByEmail(email, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Email not found' });
    }

    const resetToken = generateToken({ id: results[0].id, email, purpose: 'reset' });
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    const htmlContent = `
      <h2>Password Reset Request</h2>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
    `;

    sendEmail(email, 'Password Reset Request', htmlContent);

    res.status(200).json({ success: true, message: 'Password reset link sent to your email' });
  });
};

const resetPassword = (req, res) => {
  const { token, newPassword, confirmPassword } = req.body;

  if (!newPassword || !confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords are required' });
  }

  if (newPassword !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }

  // Verify token would be done in middleware
  const decoded = req.user; // From auth middleware

  User.updatePassword(decoded.id, newPassword, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error updating password', error: err });

    res.status(200).json({ success: true, message: 'Password reset successful' });
  });
};

module.exports = { register, login, logout, forgotPassword, resetPassword };
