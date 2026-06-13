const Destination = require('../models/Destination');

const createDestination = (req, res) => {
  const { country, state, city, description, tourist_attractions } = req.body;
  const image = req.file ? `/uploads/destinations/${req.file.filename}` : null;

  if (!country || !state || !city || !description) {
    return res.status(400).json({ success: false, message: 'Country, state, city, and description are required' });
  }

  Destination.create({ country, state, city, description, tourist_attractions, image }, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error creating destination', error: err });

    res.status(201).json({ success: true, message: 'Destination created successfully', destinationId: result.insertId });
  });
};

const getDestinationById = (req, res) => {
  const destinationId = req.params.id;

  Destination.findById(destinationId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Destination not found' });

    res.status(200).json({ success: true, destination: results[0] });
  });
};

const getAllDestinations = (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  Destination.findAll(page, limit, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, destinations: results });
  });
};

const searchDestinations = (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ success: false, message: 'Search term is required' });
  }

  Destination.search(search, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    res.status(200).json({ success: true, destinations: results });
  });
};

const updateDestination = (req, res) => {
  const destinationId = req.params.id;
  const { country, state, city, description, tourist_attractions } = req.body;
  const image = req.file ? `/uploads/destinations/${req.file.filename}` : null;

  Destination.findById(destinationId, (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });
    if (results.length === 0) return res.status(404).json({ success: false, message: 'Destination not found' });

    const updateData = {
      country: country || results[0].country,
      state: state || results[0].state,
      city: city || results[0].city,
      description: description || results[0].description,
      tourist_attractions: tourist_attractions || results[0].tourist_attractions,
      image: image || results[0].image
    };

    Destination.update(destinationId, updateData, (err, result) => {
      if (err) return res.status(500).json({ success: false, message: 'Error updating destination', error: err });

      res.status(200).json({ success: true, message: 'Destination updated successfully' });
    });
  });
};

const deleteDestination = (req, res) => {
  const destinationId = req.params.id;

  Destination.delete(destinationId, (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Error deleting destination', error: err });

    res.status(200).json({ success: true, message: 'Destination deleted successfully' });
  });
};

module.exports = { createDestination, getDestinationById, getAllDestinations, searchDestinations, updateDestination, deleteDestination };
