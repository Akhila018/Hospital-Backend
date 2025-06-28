const express = require('express');
const router = express.Router();
const { getAllHospitals, createHospital } = require('../models/hospital');

// Register a hospital
router.post('/', (req, res) => {
  const { name, location } = req.body;
  if (!name || !location) {
    return res.status(400).json({ error: 'Name and location are required' });
  }
  const hospital = createHospital({ name, location });
  res.status(201).json(hospital);
});

// List all hospitals
router.get('/', (req, res) => {
  const hospitals = getAllHospitals();
  res.json(hospitals);
});

module.exports = router; 