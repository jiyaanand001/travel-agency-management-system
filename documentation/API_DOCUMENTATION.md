# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## 🔐 Authentication Endpoints

### Register User
```
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "password": "Password123",
  "confirmPassword": "Password123",
  "address": "123 Main Street"
}

Response (201):
{
  "success": true,
  "message": "Registration successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "role": "customer"
  }
}
```

### Login User
```
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "Password123"
}

Response (200):
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "customer",
    "phone": "9876543210"
  }
}
```

### Logout
```
POST /auth/logout
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Logout successful"
}
```

### Forgot Password
```
POST /auth/forgot-password
Content-Type: application/json

{
  "email": "john@example.com"
}

Response (200):
{
  "success": true,
  "message": "Password reset link sent to your email"
}
```

### Reset Password
```
POST /auth/reset-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "newPassword": "NewPassword123",
  "confirmPassword": "NewPassword123"
}

Response (200):
{
  "success": true,
  "message": "Password reset successful"
}
```

---

## 👤 User Endpoints

### Get Profile
```
GET /users/profile
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "address": "123 Main Street",
    "role": "customer",
    "profile_picture": "/uploads/profiles/pic.jpg"
  }
}
```

### Update Profile
```
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "9876543211",
  "address": "456 Oak Avenue"
}

Response (200):
{
  "success": true,
  "message": "Profile updated successfully"
}
```

### Change Password
```
POST /users/change-password
Authorization: Bearer <token>
Content-Type: application/json

{
  "currentPassword": "OldPassword123",
  "newPassword": "NewPassword123",
  "confirmPassword": "NewPassword123"
}

Response (200):
{
  "success": true,
  "message": "Password changed successfully"
}
```

### Get Booking History
```
GET /users/bookings?page=1&limit=10
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "bookings": [
    {
      "id": 1,
      "package_name": "Mumbai City Tour",
      "image": "/uploads/packages/mumbai.jpg",
      "country": "India",
      "city": "Mumbai",
      "travel_date": "2026-07-15",
      "number_of_travelers": 2,
      "total_price": 30000,
      "status": "confirmed",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}
```

---

## 📦 Package Endpoints

### Get All Packages
```
GET /packages?page=1&limit=10

Response (200):
{
  "success": true,
  "packages": [
    {
      "id": 1,
      "name": "Mumbai City Tour",
      "destination_id": 1,
      "country": "India",
      "state": "Maharashtra",
      "city": "Mumbai",
      "description": "Explore the vibrant city of Mumbai",
      "duration": 3,
      "price": 15000,
      "available_seats": 30,
      "travel_date": "2026-07-15",
      "image": "/uploads/packages/mumbai.jpg",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}
```

### Get Package By ID
```
GET /packages/:id

Response (200):
{
  "success": true,
  "package": {
    "id": 1,
    "name": "Mumbai City Tour",
    "destination_id": 1,
    "country": "India",
    "description": "Explore the vibrant city of Mumbai with guided tours",
    "duration": 3,
    "price": 15000,
    "available_seats": 30,
    "travel_date": "2026-07-15",
    "image": "/uploads/packages/mumbai.jpg",
    "averageRating": 4.5,
    "totalReviews": 12
  }
}
```

### Search Packages
```
GET /packages/search?search=Mumbai

Response (200):
{
  "success": true,
  "packages": [...]
}
```

### Filter Packages
```
GET /packages/filter?destination_id=1&minPrice=10000&maxPrice=25000

Response (200):
{
  "success": true,
  "packages": [...]
}
```

### Create Package (Admin)
```
POST /packages
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

{
  "name": "New Package",
  "destination_id": 1,
  "description": "Package description",
  "duration": 4,
  "price": 20000,
  "available_seats": 25,
  "travel_date": "2026-08-15",
  "image": <file>
}

Response (201):
{
  "success": true,
  "message": "Package created successfully",
  "packageId": 5
}
```

### Update Package (Admin)
```
PUT /packages/:id
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

{
  "name": "Updated Package",
  "price": 21000,
  "available_seats": 20
}

Response (200):
{
  "success": true,
  "message": "Package updated successfully"
}
```

### Delete Package (Admin)
```
DELETE /packages/:id
Authorization: Bearer <admin_token>

Response (200):
{
  "success": true,
  "message": "Package deleted successfully"
}
```

---

## 🗺️ Destination Endpoints

### Get All Destinations
```
GET /destinations?page=1&limit=10

Response (200):
{
  "success": true,
  "destinations": [
    {
      "id": 1,
      "country": "India",
      "state": "Maharashtra",
      "city": "Mumbai",
      "description": "The city of dreams with modern architecture and beaches",
      "tourist_attractions": "Gateway of India, Marine Drive, Bandra-Worli Sealink",
      "image": "/uploads/destinations/mumbai.jpg",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}
```

### Get Destination By ID
```
GET /destinations/:id

Response (200):
{
  "success": true,
  "destination": {...}
}
```

### Search Destinations
```
GET /destinations/search?search=Jaipur

Response (200):
{
  "success": true,
  "destinations": [...]
}
```

### Create Destination (Admin)
```
POST /destinations
Authorization: Bearer <admin_token>
Content-Type: multipart/form-data

{
  "country": "India",
  "state": "Goa",
  "city": "Panaji",
  "description": "Beaches and culture",
  "tourist_attractions": "Beaches, Churches",
  "image": <file>
}

Response (201):
{
  "success": true,
  "message": "Destination created successfully",
  "destinationId": 5
}
```

---

## 🎫 Booking Endpoints

### Create Booking
```
POST /bookings
Authorization: Bearer <token>
Content-Type: application/json

{
  "package_id": 1,
  "travel_date": "2026-07-15",
  "number_of_travelers": 2
}

Response (201):
{
  "success": true,
  "message": "Booking created successfully",
  "bookingId": 5
}
```

### Get My Bookings
```
GET /bookings/my-bookings?page=1&limit=10
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "bookings": [...]
}
```

### Get Booking By ID
```
GET /bookings/:id
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "booking": {
    "id": 1,
    "user_id": 2,
    "package_id": 1,
    "package_name": "Mumbai City Tour",
    "user_name": "John Doe",
    "travel_date": "2026-07-15",
    "number_of_travelers": 2,
    "total_price": 30000,
    "status": "confirmed",
    "created_at": "2026-06-01T10:00:00Z"
  }
}
```

### Cancel Booking
```
PUT /bookings/:id/cancel
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Booking cancelled successfully"
}
```

### Update Booking Status (Admin)
```
PUT /bookings/:bookingId/status
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "status": "confirmed"
}

Response (200):
{
  "success": true,
  "message": "Booking status updated successfully"
}
```

---

## ⭐ Review Endpoints

### Create Review
```
POST /reviews
Authorization: Bearer <token>
Content-Type: application/json

{
  "package_id": 1,
  "rating": 5,
  "comment": "Amazing experience! Highly recommended."
}

Response (201):
{
  "success": true,
  "message": "Review created successfully",
  "reviewId": 10
}
```

### Get Package Reviews
```
GET /reviews/package/:packageId

Response (200):
{
  "success": true,
  "reviews": [
    {
      "id": 1,
      "user_name": "John Doe",
      "rating": 5,
      "comment": "Amazing experience!",
      "created_at": "2026-06-05T10:00:00Z"
    }
  ]
}
```

### Get Package Rating
```
GET /reviews/package/:packageId/rating

Response (200):
{
  "success": true,
  "averageRating": 4.5,
  "totalReviews": 12
}
```

### Get My Reviews
```
GET /reviews/user/my-reviews
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "reviews": [...]
}
```

### Delete Review
```
DELETE /reviews/:id
Authorization: Bearer <token>

Response (200):
{
  "success": true,
  "message": "Review deleted successfully"
}
```

---

## 💬 Inquiry Endpoints

### Create Inquiry
```
POST /inquiries
Content-Type: application/json

{
  "name": "Rajesh Kumar",
  "email": "rajesh@example.com",
  "subject": "Package Customization",
  "message": "I want to customize a package for my family trip"
}

Response (201):
{
  "success": true,
  "message": "Inquiry submitted successfully",
  "inquiryId": 5
}
```

### Get All Inquiries (Admin)
```
GET /inquiries?page=1&limit=10
Authorization: Bearer <admin_token>

Response (200):
{
  "success": true,
  "inquiries": [
    {
      "id": 1,
      "name": "Rajesh Kumar",
      "email": "rajesh@example.com",
      "subject": "Package Customization",
      "message": "I want to customize a package...",
      "status": "pending",
      "created_at": "2026-06-01T10:00:00Z"
    }
  ]
}
```

### Update Inquiry Status (Admin)
```
PUT /inquiries/:id/status
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "status": "resolved"
}

Response (200):
{
  "success": true,
  "message": "Inquiry status updated successfully"
}
```

---

## 📊 Dashboard Endpoints (Admin)

### Get Dashboard Stats
```
GET /dashboard/stats
Authorization: Bearer <admin_token>

Response (200):
{
  "success": true,
  "stats": {
    "totalUsers": 45,
    "totalPackages": 12,
    "totalBookings": 78,
    "totalRevenue": 1250000,
    "totalDestinations": 8,
    "monthlyStats": [
      {
        "month": "2026-06",
        "bookings": 15,
        "revenue": 225000
      }
    ]
  }
}
```

### Get Popular Destinations
```
GET /dashboard/popular-destinations
Authorization: Bearer <admin_token>

Response (200):
{
  "success": true,
  "popularDestinations": [
    {
      "destination": "Mumbai",
      "bookings": 25
    }
  ]
}
```

### Get Revenue Stats
```
GET /dashboard/revenue-stats
Authorization: Bearer <admin_token>

Response (200):
{
  "success": true,
  "revenueStats": [
    {
      "month": "2026-06",
      "bookings": 15,
      "revenue": 225000
    }
  ]
}
```

---

## ❌ Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error or missing required fields"
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "No token provided" or "Invalid or expired token"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Access denied. Insufficient permissions."
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## Status Codes

- `200`: OK - Request successful
- `201`: Created - Resource created successfully
- `400`: Bad Request - Invalid input
- `401`: Unauthorized - Authentication required
- `403`: Forbidden - Authorization failed
- `404`: Not Found - Resource not found
- `409`: Conflict - Resource already exists
- `500`: Internal Server Error - Server error

