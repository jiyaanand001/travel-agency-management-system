# Travel Agency Management System

A comprehensive Full Stack Travel Agency Management System built as a final-year engineering project. This system enables customers to browse and book travel packages while administrators manage the entire platform through a professional dashboard.

## 🎯 Project Overview

This is a complete full-stack web application demonstrating:
- Modern Frontend Development (React.js + Vite + Tailwind CSS)
- RESTful Backend API (Node.js + Express.js)
- Database Design & Management (MySQL)
- Authentication & Authorization (JWT + Bcrypt)
- Professional UI/UX Design
- Industry Best Practices

## 🏗️ Technology Stack

### Frontend
- **React.js** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Axios** - HTTP Client
- **Chart.js** - Analytics & Visualizations

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MySQL** - Database
- **JWT** - Authentication
- **Bcrypt** - Password Hashing
- **Multer** - File Upload
- **Nodemailer** - Email Notifications

## 📁 Project Structure

```
travel-agency-management-system/
├── frontend/                    # React Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── context/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                     # Express Application
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   ├── utils/
│   │   ├── validators/
│   │   └── app.js
│   ├── uploads/
│   ├── package.json
│   ├── .env.example
│   └── server.js
│
├── database/                    # Database Schema
│   ├── schema.sql
│   ├── sample_data.sql
│   └── ER_DIAGRAM.md
│
├── documentation/               # Project Documentation
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_DESIGN.md
│   ├── AUTHENTICATION_FLOW.md
│   ├── SETUP_GUIDE.md
│   └── DEPLOYMENT.md
│
├── postman/
│   └── Travel_Agency_API.postman_collection.json
│
├── reports/                     # Project Reports
│   ├── PROJECT_REPORT.md
│   ├── TEST_CASES.md
│   ├── VIVA_QUESTIONS.md
│   └── PPT_CONTENT.md
│
└── README.md
```

## 👥 User Roles

### Customer
- Register and Login
- Browse Travel Packages
- Search & Filter Packages
- View Package Details
- Book Travel Packages
- Track Booking Status
- Manage Profile
- Submit Reviews
- Contact Agency

### Administrator
- Secure Admin Login
- Manage Users
- Manage Packages (CRUD)
- Manage Destinations (CRUD)
- Manage Bookings
- View Reports & Analytics
- Handle Customer Queries
- Monitor Dashboard Statistics

## 📦 Core Modules

### 1. **Authentication Module**
- User Registration with validation
- Secure Login with JWT
- Password Encryption (Bcrypt)
- Forgot/Reset Password
- Email Verification

### 2. **Travel Package Module**
- Create, Read, Update, Delete Packages
- Package Details (Name, Destination, Duration, Price, Seats)
- Image Upload Support
- Search & Filter Functionality
- Package Availability Management

### 3. **Destination Module**
- Manage Travel Destinations
- Country, State, City Information
- Tourist Attractions
- Destination Images

### 4. **Booking Module**
- Create Bookings
- Booking Status Tracking (Pending, Confirmed, Cancelled)
- Cancel Bookings
- View Booking History
- Booking Confirmation Emails

### 5. **User Profile Module**
- Update Profile Information
- Change Password
- Profile Picture Upload
- Booking History

### 6. **Review & Rating Module**
- Submit Package Reviews
- Rating System (1-5 stars)
- View Package Reviews
- Delete Own Reviews

### 7. **Contact & Inquiry Module**
- Submit Contact Inquiries
- Admin Query Management
- Mark Inquiries as Resolved
- Email Notifications

### 8. **Admin Dashboard**
- Dashboard Statistics (Users, Packages, Bookings, Revenue)
- Charts & Analytics (Monthly Bookings, Revenue, Popular Destinations)
- Quick Actions
- Recent Activities

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/jiyaanand001/travel-agency-management-system.git
cd travel-agency-management-system
```

#### 2. Database Setup
```bash
mysql -u root -p
CREATE DATABASE travel_agency;
USE travel_agency;
source database/schema.sql;
source database/sample_data.sql;
```

#### 3. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your database credentials
npm start
```

#### 4. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📚 Documentation

- **[API Documentation](./documentation/API_DOCUMENTATION.md)** - Complete API endpoints reference
- **[Database Design](./documentation/DATABASE_DESIGN.md)** - Schema and relationships
- **[Authentication Flow](./documentation/AUTHENTICATION_FLOW.md)** - JWT implementation
- **[Setup Guide](./documentation/SETUP_GUIDE.md)** - Detailed installation instructions
- **[Project Report](./reports/PROJECT_REPORT.md)** - Comprehensive project documentation

## 🧪 Testing

- **[Test Cases](./reports/TEST_CASES.md)** - Complete test scenarios
- **[Postman Collection](./postman/Travel_Agency_API.postman_collection.json)** - API testing collection

## 📋 Deliverables

✅ Complete Folder Structure
✅ React Frontend Source Code
✅ Node.js + Express Backend Source Code
✅ MySQL Database Schema with ER Diagram
✅ API Documentation with Examples
✅ Postman Collection for Testing
✅ Authentication Flow Documentation
✅ Sample Data SQL Scripts
✅ Validation Rules Documentation
✅ Project Report (Academic)
✅ PPT Content Outline
✅ Test Cases & QA Documentation
✅ Viva Questions and Answers
✅ Deployment Guide

## 🎨 UI/UX Features

- Modern Travel Agency Design
- Fully Responsive Layout (Mobile, Tablet, Desktop)
- Attractive Hero Section with CTAs
- Destination Cards with Hover Effects
- Advanced Search & Filter System
- Interactive Data Tables
- Dashboard Analytics with Charts
- Toast Notifications for User Actions
- Loading Animations & Spinners
- Error Handling with User-Friendly Messages
- Smooth Page Transitions

## 🔒 Security Features

- JWT-based Authentication
- Bcrypt Password Hashing
- Role-Based Access Control (RBAC)
- Input Validation & Sanitization
- Protected API Routes
- CORS Configuration
- SQL Injection Prevention
- XSS Protection

## 📊 Key Features

- Real-time Dashboard Analytics
- Advanced Search with Multiple Filters
- Booking Management System
- Email Notifications
- Image Upload & Management
- Review & Rating System
- Responsive Admin Dashboard
- User Management
- Inquiry Tracking System

## 👨‍💼 Project Status

This is a complete, production-ready project suitable for:
- ✅ Final Year Engineering Project Submission
- ✅ Project Evaluation & Grading
- ✅ GitHub Portfolio
- ✅ Technical Interviews
- ✅ Learning Full-Stack Development

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact & Support

For questions or support, please create an issue in the GitHub repository.

---

**Last Updated:** June 2026
**Version:** 1.0.0
**Author:** Final Year Student
