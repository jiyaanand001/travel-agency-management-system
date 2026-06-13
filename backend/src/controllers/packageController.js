const Package = require('../models/Package');
const Review = require('../models/Review');

const createPackage = (req, res) => {
  const { name, destination_id, description, duration, price, available_seats, travel_date } = req.body;
  const image = req.file ? `/uploads/packages/${req.file.filename}` : null;
  const created_by = req.user.id;

  if (!name || !destination_id || !description || !duration || !price || !available_seats || !travel_date) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  Package.create({ name, destination_id, description, duration, price, available_seats, travel_date, image, created_by }, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error creating package', error: err });

    res.status(201).json({ success: true, message: 'Package created successfully', packageId: result.insertId });
  });
};

const getPackageById = (req, res) => {
  const packageId = req.params.id;

  Package.findById(packageId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    
    if (results.length === 0) {
      return res.status(404).json({ success: false, message: 'Package not found' });
    }

    const pkg = results[0];

    // Get reviews and ratings
    Review.getAverageRating(packageId, (err, ratingResults) => {
      if (err) console.log('Error fetching ratings');
      
      const packageData = {
        ...pkg,
        averageRating: ratingResults && ratingResults.length > 0 ? ratingResults[0].average_rating : 0,
        totalReviews: ratingResults && ratingResults.length > 0 ? ratingResults[0].total_reviews : 0
      };

      res.status(200).json({ success: true, package: packageData });
    });
  });
};

const getAllPackages = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Package.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, packages: results });
  });
};

const searchPackages = (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ success: false, message: 'Search term is required' });
  }

  Package.search(search, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, packages: results });
  });
};

const filterPackages = (req, res) => {
  const { destination_id, minPrice, maxPrice } = req.query;

  Package.filter(destination_id, minPrice, maxPrice, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, packages: results });
  });
};

const updatePackage = (req, res) => {
  const packageId = req.params.id;
  const { name, destination_id, description, duration, price, available_seats, travel_date } = req.body;
  const image = req.file ? `/uploads/packages/${req.file.filename}` : null;

  Package.findById(packageId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Package not found' });

    const updateData = {
      name: name || results[0].name,
      destination_id: destination_id || results[0].destination_id,
      description: description || results[0].description,
      duration: duration || results[0].duration,
      price: price || results[0].price,
      available_seats: available_seats || results[0].available_seats,
      travel_date: travel_date || results[0].travel_date,
      image: image || results[0].image
    };

    Package.update(packageId, updateData, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error updating package', error: err });

      res.status(200).json({ success: true, message: 'Package updated successfully' });
    });
  });
};

const deletePackage = (req, res) => {
  const packageId = req.params.id;

  Package.delete(packageId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error deleting package', error: err });

    res.status(200).json({ success: true, message: 'Package deleted successfully' });
  });
};

module.exports = { createPackage, getPackageById, getAllPackages, searchPackages, filterPackages, updatePackage, deletePackage };
