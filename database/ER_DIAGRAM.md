# Travel Agency Management System - Database Design

## 📊 ER Diagram

```
┌─────────────────┐
│     USERS       │
├─────────────────┤
│ id (PK)         │
│ name            │
│ email (UNIQUE)  │
│ phone           │
│ password        │
│ address         │
│ role            │
│ profile_picture │
│ created_at      │
│ updated_at      │
└─────────────────┘
         |
         ├─── (1:N) ──→ BOOKINGS
         ├─── (1:N) ──→ REVIEWS
         └─── (1:N) ──→ PACKAGES (created_by)

┌──────────────────────┐
│   DESTINATIONS       │
├──────────────────────┤
│ id (PK)              │
│ country              │
│ state                │
│ city                 │
│ description          │
│ tourist_attractions  │
│ image                │
│ created_at           │
│ updated_at           │
└──────────────────────┘
         |
         └─── (1:N) ──→ PACKAGES

┌──────────────────────┐
│     PACKAGES         │
├──────────────────────┤
│ id (PK)              │
│ name                 │
│ destination_id (FK)  │
│ description          │
│ duration             │
│ price                │
│ available_seats      │
│ travel_date          │
│ image                │
│ created_by (FK)      │
│ created_at           │
│ updated_at           │
└──────────────────────┘
         |
         ├─── (1:N) ──→ BOOKINGS
         └─── (1:N) ──→ REVIEWS

┌──────────────────────┐
│     BOOKINGS         │
├──────────────────────┤
│ id (PK)              │
│ user_id (FK)         │
│ package_id (FK)      │
│ travel_date          │
│ number_of_travelers  │
│ total_price          │
│ status               │
│ created_at           │
│ updated_at           │
└──────────────────────┘

┌──────────────────────┐
│      REVIEWS         │
├──────────────────────┤
│ id (PK)              │
│ user_id (FK)         │
│ package_id (FK)      │
│ rating               │
│ comment              │
│ created_at           │
│ updated_at           │
└──────────────────────┘

┌──────────────────────┐
│    INQUIRIES         │
├──────────────────────┤
│ id (PK)              │
│ name                 │
│ email                │
│ subject              │
│ message              │
│ status               │
│ created_at           │
│ updated_at           │
└──────────────────────┘
```

## 📋 Table Relationships

### Users Table
- Primary Key: `id`
- Unique: `email`
- Relationships: One user can have multiple bookings, reviews, and packages created

### Destinations Table
- Primary Key: `id`
- Relationships: One destination can have multiple packages

### Packages Table
- Primary Key: `id`
- Foreign Keys: `destination_id` (references destinations), `created_by` (references users)
- Relationships: One package can have multiple bookings and reviews

### Bookings Table
- Primary Key: `id`
- Foreign Keys: `user_id` (references users), `package_id` (references packages)
- Relationships: Many-to-many relationship through Bookings

### Reviews Table
- Primary Key: `id`
- Foreign Keys: `user_id` (references users), `package_id` (references packages)
- Relationships: Many-to-many relationship through Reviews

### Inquiries Table
- Primary Key: `id`
- No foreign keys (stores contact inquiries)

## 🔑 Indexes

- `idx_user_email` on `users(email)` - For fast email lookups during login
- `idx_package_destination` on `packages(destination_id)` - For destination-based searches
- `idx_booking_user` on `bookings(user_id)` - For user booking queries
- `idx_booking_package` on `bookings(package_id)` - For package booking queries
- `idx_booking_status` on `bookings(status)` - For booking status filtering
- `idx_review_package` on `reviews(package_id)` - For package review retrieval
- `idx_review_user` on `reviews(user_id)` - For user review retrieval
- `idx_inquiry_status` on `inquiries(status)` - For inquiry status filtering
