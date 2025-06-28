const express = require('express');
const router = express.Router();
const { getAllDepartments, createDepartment, getDepartmentsByHospital } = require('../models/department');

// Create a department
router.post('/', (req, res) => {
  const { hospital_id, name } = req.body;
  if (!hospital_id || !name) {
    return res.status(400).json({ error: 'Hospital ID and name are required' });
  }
  const department = createDepartment({ hospital_id, name });
  res.status(201).json(department);
});

// List all departments
router.get('/', (req, res) => {
  const departments = getAllDepartments();
  res.json(departments);
});

// List departments by hospital
router.get('/by-hospital/:hospital_id', (req, res) => {
  const { hospital_id } = req.params;
  const departments = getDepartmentsByHospital(hospital_id);
  res.json(departments);
});

module.exports = router; 