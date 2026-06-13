# Travel Agency Management System - Project Structure

## 📁 Complete Directory Structure

```
travel-agency-management-system/
│
├── 📂 frontend/                          # React.js Frontend Application
│   ├── 📂 public/
│   │   ├── 📄 index.html
│   │   ├── 📂 images/
│   │   └── 📄 favicon.ico
│   │
│   ├── 📂 src/
│   │   ├── 📂 components/                # Reusable Components
│   │   │   ├── 📂 Common/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Loader.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Toast.jsx
│   │   │   │
│   │   │   ├── 📂 Public/
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── PackageCard.jsx
│   │   │   │   ├── DestinationCard.jsx
│   │   │   │   ├── SearchFilter.jsx
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   └── CallToAction.jsx
│   │   │   │
│   │   │   ├── 📂 Customer/
│   │   │   │   ├── BookingCard.jsx
│   │   │   │   ├── BookingForm.jsx
│   │   │   │   ├── ReviewForm.jsx
│   │   │   │   ├── ReviewCard.jsx
│   │   │   │   ├── ProfileForm.jsx
│   │   │   │   └── BookingTimeline.jsx
│   │   │   │
│   │   │   └── 📂 Admin/
│   │   │       ├── DashboardCard.jsx
│   │   │       ├── AnalyticsChart.jsx
│   │   │       ├── UserTable.jsx
│   │   │       ├── PackageForm.jsx
│   │   │       ├── BookingTable.jsx
│   │   │       └── ReportGenerator.jsx
│   │   │
│   │   ├── 📂 pages/                    # Page Components
│   │   │   ├── 📂 Public/
│   │   │   │   ├── Home.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── Packages.jsx
│   │   │   │   ├── PackageDetail.jsx
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   ├── ForgotPassword.jsx
│   │   │   │   └── NotFound.jsx
│   │   │   │
│   │   │   ├── 📂 Customer/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── MyBookings.jsx
│   │   │   │   ├── BookingDetail.jsx
│   │   │   │   ├── Profile.jsx
│   │   │   │   ├── Reviews.jsx
│   │   │   │   └── Wishlist.jsx
│   │   │   │
│   │   │   └── 📂 Admin/
│   │   │       ├── AdminDashboard.jsx
│   │   │       ├── ManagePackages.jsx
│   │   │       ├── ManageUsers.jsx
│   │   │       ├── ManageBookings.jsx
│   │   │       ├── ManageDestinations.jsx
│   │   │       ├── ManageInquiries.jsx
│   │   │       ├── Reports.jsx
│   │   │       └── Settings.jsx
│   │   │
│   │   ├── 📂 layouts/                  # Layout Templates
│   │   │   ├── PublicLayout.jsx
│   │   │   ├── CustomerLayout.jsx
│   │   │   └── AdminLayout.jsx
│   │   │
│   │   ├── 📂 services/                 # API Services
│   │   │   ├── authService.js
│   │   │   ├── userService.js
│   │   │   ├── packageService.js
│   │   │   ├── bookingService.js
│   │   │   ├── destinationService.js
│   │   │   ├── reviewService.js
│   │   │   ├── inquiryService.js
│   │   │   └── apiClient.js
│   │   │
│   │   ├── 📂 hooks/                   # Custom React Hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useFetch.js
│   │   │   ├── useForm.js
│   │   │   └── useToast.js
│   │   │
│   │   ├── 📂 context/                 # Context API
│   │   │   ├── AuthContext.jsx
│   │   │   ├── UserContext.jsx
│   │   │   └── NotificationContext.jsx
│   │   │
│   │   ├── 📂 utils/                   # Utility Functions
│   │   │   ├── constants.js
│   │   │   ├── helpers.js
│   │   │   ├── validators.js
│   │   │   ├── formatters.js
│   │   │   └── localStorage.js
│   │   │
│   │   ├── 📂 assets/
│   │   │   ├── 📂 images/
│   │   │   ├── 📂 icons/
│   │   │   ├── 📂 videos/
│   │   │   └── 📂 fonts/
│   │   │
│   │   ├── 📂 styles/
│   │   │   └── globals.css
│   │   │
│   │   ├── App.jsx                      # Main App Component
│   │   ├── main.jsx                     # Entry Point
│   │   └── index.css                    # Global Styles
│   │
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   ├── 📄 vite.config.js
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 .env.example
│   ├── 📄 .env.local (ignored)
│   └── 📄 .gitignore
│
├── 📂 backend/                          # Node.js Express Backend
│   ├── 📂 src/
│   │   ├── 📂 models/                  # Database Models
│   │   │   ├── User.js
│   │   │   ├── Package.js
│   │   │   ├── Destination.js
│   │   │   ├── Booking.js
│   │   │   ├── Review.js
│   │   │   ├── Inquiry.js
│   │   │   └── Admin.js
│   │   │
│   │   ├── 📂 controllers/              # Request Handlers
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── packageController.js
│   │   │   ├── bookingController.js
│   │   │   ├── destinationController.js
│   │   │   ├── reviewController.js
│   │   │   ├── inquiryController.js
│   │   │   ├── adminController.js
│   │   │   └── dashboardController.js
│   │   │
│   │   ├── 📂 routes/                  # API Routes
│   │   │   ├── auth.js
│   │   │   ├── users.js
│   │   │   ├── packages.js
│   │   │   ├── bookings.js
│   │   │   ├── destinations.js
│   │   │   ├── reviews.js
│   │   │   ├── inquiries.js
│   │   │   ├── admin.js
│   │   │   └── dashboard.js
│   │   │
│   │   ├── 📂 middleware/               # Custom Middleware
│   │   │   ├── authMiddleware.js
│   │   │   ├── roleMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   ├── validators.js
│   │   │   ├── fileUpload.js
│   │   │   └── corsMiddleware.js
│   │   │
│   │   ├── 📂 config/                  # Configuration Files
│   │   │   ├── database.js
│   │   │   ├── mail.js
│   │   │   └── constants.js
│   │   │
│   │   ├── 📂 utils/                   # Utility Functions
│   │   │   ├── emailService.js
│   │   │   ├── jwtService.js
│   │   │   ├── hashPassword.js
│   │   │   ├── validators.js
│   │   │   ├── errorFormatter.js
│   │   │   └── logger.js
│   │   │
│   │   ├── 📂 validators/              # Input Validators
│   │   │   ├── authValidator.js
│   │   │   ├── userValidator.js
│   │   │   ├── packageValidator.js
│   │   │   ├── bookingValidator.js
│   │   │   └── reviewValidator.js
│   │   │
│   │   └── app.js                       # Express App Setup
│   │
│   ├── 📂 uploads/                      # User Uploads Directory
│   │   ├── 📂 profiles/
│   │   ├── 📂 packages/
│   │   └── 📂 destinations/
│   │
│   ├── 📄 server.js                     # Server Entry Point
│   ├── 📄 package.json
│   ├── 📄 package-lock.json
│   ├── 📄 .env.example
│   ├── 📄 .env (ignored)
│   └── 📄 .gitignore
│
├── 📂 database/                         # Database Files
│   ├── 📄 schema.sql                    # Complete Database Schema
│   ├── 📄 sample_data.sql              # Sample/Demo Data
│   ├── 📄 ER_DIAGRAM.md                # Entity Relationship Diagram
│   └── 📄 relationships.md             # Table Relationships
│
├── 📂 documentation/                    # Project Documentation
│   ├── 📄 API_DOCUMENTATION.md         # Complete API Reference
│   ├── 📄 DATABASE_DESIGN.md           # Database Schema Details
│   ├── 📄 AUTHENTICATION_FLOW.md       # JWT & Auth Flow
│   ├── 📄 SETUP_GUIDE.md               # Installation & Setup
│   ├── 📄 DEPLOYMENT.md                # Deployment Instructions
│   ├── 📄 CODING_STANDARDS.md          # Code Style Guide
│   └── 📄 TROUBLESHOOTING.md           # Common Issues & Solutions
│
├── 📂 postman/
│   └── 📄 Travel_Agency_API.postman_collection.json
│
├── 📂 reports/                          # Academic Reports
│   ├── 📄 PROJECT_REPORT.md            # Detailed Project Report
│   ├── 📄 TEST_CASES.md                # QA Test Cases
│   ├── 📄 VIVA_QUESTIONS.md            # Viva Q&A
│   ├── 📄 PPT_CONTENT.md               # Presentation Outline
│   └── 📄 FEATURE_SUMMARY.md           # Feature Overview
│
├── 📄 README.md                         # Main Documentation
├── 📄 PROJECT_STRUCTURE.md              # This File
├── 📄 GETTING_STARTED.md                # Quick Start Guide
├── 📄 .gitignore                        # Git Ignore Rules
└── 📄 LICENSE                           # MIT License
```

## 📋 File Descriptions

### Frontend Structure

**Components/**
- `Common/` - Shared components used across the app (Navbar, Footer, etc.)
- `Public/` - Components for public pages (HeroSection, PackageCard, etc.)
- `Customer/` - Customer-specific components (BookingForm, ReviewForm, etc.)
- `Admin/` - Admin dashboard components (DashboardCard, Charts, etc.)

**Pages/**
- `Public/` - Login, Register, Home, About, Contact, Packages, etc.
- `Customer/` - Dashboard, MyBookings, Profile, Reviews
- `Admin/` - Admin Dashboard, Manage sections for all modules

**Services/**
- API integration layer for all modules
- Axios instances and request/response interceptors

**Hooks/**
- Custom React hooks for auth, data fetching, form handling

**Context/**
- Global state management using React Context API

**Utils/**
- Helper functions, constants, validators, formatters

### Backend Structure

**Models/**
- Database models representing each entity
- Methods for database operations

**Controllers/**
- Business logic for handling requests
- Request/response processing

**Routes/**
- API endpoint definitions
- Route-specific middleware attachment

**Middleware/**
- Authentication, authorization, validation, error handling

**Config/**
- Database connection, email setup, constants

**Utils/**
- Email service, JWT operations, password hashing, validators

**Validators/**
- Input validation schemas and functions

### Database

**schema.sql**
- Complete database schema with all tables
- Primary keys, foreign keys, constraints
- Indexes for performance

**sample_data.sql**
- Demo data for testing and evaluation

**ER_DIAGRAM.md**
- Visual representation of database relationships

### Documentation

**API_DOCUMENTATION.md**
- All endpoints with request/response examples
- Authentication requirements
- Error codes and messages

**DATABASE_DESIGN.md**
- Table descriptions and relationships
- Field details and data types
- Normalization explanation

**SETUP_GUIDE.md**
- Step-by-step installation instructions
- Environment configuration
- Database setup

### Reports

**PROJECT_REPORT.md**
- Executive summary
- System architecture
- Implementation details
- Features overview
- Challenges and solutions

**TEST_CASES.md**
- Functional test cases
- Edge cases
- Expected results

**VIVA_QUESTIONS.md**
- Technical questions and answers
- Project understanding questions
- Interview preparation

**PPT_CONTENT.md**
- Presentation slide outlines
- Key points for each slide

## 🔄 Development Workflow

1. **Initialize Project** - Setup all directories and base files
2. **Frontend Development** - Components, pages, services
3. **Backend Development** - Models, controllers, routes
4. **Database Setup** - Create schema and sample data
5. **Integration** - Connect frontend with backend API
6. **Testing** - Run test cases and quality assurance
7. **Documentation** - Complete all documentation
8. **Deployment** - Setup production environment

## 🎯 Best Practices

- Follow MVC architecture on backend
- Use component composition on frontend
- Maintain separation of concerns
- Use environment variables for configuration
- Implement proper error handling
- Add input validation
- Use meaningful file and function names
- Follow consistent coding standards
- Add comments for complex logic
- Implement logging and debugging

---

**This structure ensures a scalable, maintainable, and professional project suitable for submission and interviews.**
