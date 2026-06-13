USE travel_agency;

-- Sample Users
INSERT INTO users (name, email, phone, password, address, role) VALUES
('Admin User', 'admin@travelagency.com', '9999999999', '$2a$10$YourHashedPasswordHere', '123 Admin Street', 'admin'),
('John Doe', 'john@example.com', '9876543210', '$2a$10$YourHashedPasswordHere', '456 Main Street', 'customer'),
('Jane Smith', 'jane@example.com', '9765432109', '$2a$10$YourHashedPasswordHere', '789 Oak Avenue', 'customer'),
('Mike Johnson', 'mike@example.com', '9654321098', '$2a$10$YourHashedPasswordHere', '321 Pine Road', 'customer');

-- Sample Destinations
INSERT INTO destinations (country, state, city, description, tourist_attractions) VALUES
('India', 'Maharashtra', 'Mumbai', 'The city of dreams with modern architecture and beaches', 'Gateway of India, Marine Drive, Bandra-Worli Sealink'),
('India', 'Rajasthan', 'Jaipur', 'The pink city known for its heritage sites', 'City Palace, Jantar Mantar, Hawa Mahal'),
('India', 'Uttar Pradesh', 'Agra', 'Home to the world famous Taj Mahal', 'Taj Mahal, Agra Fort, Mehtab Bagh'),
('India', 'Kerala', 'Kochi', 'God\'s own country with backwaters and spice markets', 'Backwaters, Fort Kochi, Chinese Fishing Nets');

-- Sample Packages
INSERT INTO packages (name, destination_id, description, duration, price, available_seats, travel_date, image, created_by) VALUES
('Mumbai City Tour', 1, 'Explore the vibrant city of Mumbai with guided tours', 3, 15000, 30, '2026-07-15', '/uploads/packages/mumbai.jpg', 1),
('Jaipur Heritage Tour', 2, 'Discover the royal heritage of Jaipur', 4, 18000, 25, '2026-08-01', '/uploads/packages/jaipur.jpg', 1),
('Taj Mahal Express', 3, 'Experience the beauty of Taj Mahal and Agra Fort', 5, 22000, 20, '2026-07-20', '/uploads/packages/tajmahal.jpg', 1),
('Kerala Backwater Cruise', 4, 'Serene backwater cruise in God\'s own country', 6, 25000, 35, '2026-08-10', '/uploads/packages/kerala.jpg', 1);

-- Sample Bookings
INSERT INTO bookings (user_id, package_id, travel_date, number_of_travelers, total_price, status) VALUES
(2, 1, '2026-07-15', 2, 30000, 'confirmed'),
(3, 2, '2026-08-01', 1, 18000, 'pending'),
(4, 3, '2026-07-20', 3, 66000, 'confirmed');

-- Sample Reviews
INSERT INTO reviews (user_id, package_id, rating, comment) VALUES
(2, 1, 5, 'Amazing experience! Would definitely recommend.'),
(4, 3, 4, 'Great package, well organized tour.'),
(2, 2, 5, 'Fantastic! The heritage sites were breathtaking.');

-- Sample Inquiries
INSERT INTO inquiries (name, email, subject, message, status) VALUES
('Rajesh Kumar', 'rajesh@example.com', 'Package Customization', 'I want to customize a package for my family trip', 'pending'),
('Priya Singh', 'priya@example.com', 'Group Booking Discount', 'We are a group of 50 people. Do you offer group discounts?', 'resolved'),
('Amit Patel', 'amit@example.com', 'Special Requirements', 'We need a package with special accommodations for elderly members', 'pending');
