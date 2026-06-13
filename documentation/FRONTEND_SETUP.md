# Frontend Setup - React + Vite + Tailwind CSS

## Installation Steps

```bash
cd frontend
npm install
```

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── Common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── Toast.jsx
│   │   ├── Public/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PackageCard.jsx
│   │   │   ├── DestinationCard.jsx
│   │   │   ├── SearchFilter.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   └── CallToAction.jsx
│   │   ├── Customer/
│   │   │   ├── BookingCard.jsx
│   │   │   ├── BookingForm.jsx
│   │   │   ├── ReviewForm.jsx
│   │   │   ├── ReviewCard.jsx
│   │   │   ├── ProfileForm.jsx
│   │   │   └── BookingTimeline.jsx
│   │   └── Admin/
│   │       ├── DashboardCard.jsx
│   │       ├── AnalyticsChart.jsx
│   │       ├── UserTable.jsx
│   │       ├── PackageForm.jsx
│   │       ├── BookingTable.jsx
│   │       └── ReportGenerator.jsx
│   ├── pages/
│   │   ├── Public/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Packages.jsx
│   │   │   ├── PackageDetail.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── ForgotPassword.jsx
│   │   │   └── NotFound.jsx
│   │   ├── Customer/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── MyBookings.jsx
│   │   │   ├── BookingDetail.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Reviews.jsx
│   │   │   └── Wishlist.jsx
│   │   └── Admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── ManagePackages.jsx
│   │       ├── ManageUsers.jsx
│   │       ├── ManageBookings.jsx
│   │       ├── ManageDestinations.jsx
│   │       ├── ManageInquiries.jsx
│   │       ├── Reports.jsx
│   │       └── Settings.jsx
│   ├── layouts/
│   │   ├── PublicLayout.jsx
│   │   ├── CustomerLayout.jsx
│   │   └── AdminLayout.jsx
│   ├── services/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── packageService.js
│   │   ├── bookingService.js
│   │   ├── destinationService.js
│   │   ├── reviewService.js
│   │   ├── inquiryService.js
│   │   └── apiClient.js
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useFetch.js
│   │   ├── useForm.js
│   │   └── useToast.js
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── UserContext.jsx
│   │   └── NotificationContext.jsx
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   ├── validators.js
│   │   ├── formatters.js
│   │   └── localStorage.js
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── .env.example
```

## Start Development

```bash
npm run dev
```

The frontend will run on http://localhost:5173
