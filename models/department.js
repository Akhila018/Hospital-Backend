const { LocalStorage } = require('node-localstorage');
const { v4: uuidv4 } = require('uuid');
const localStorage = new LocalStorage('./hospitalData');

const DEPARTMENTS_KEY = 'departments';

function getAllDepartments() {
  return JSON.parse(localStorage.getItem(DEPARTMENTS_KEY) || '[]');
}

function saveAllDepartments(departments) {
  localStorage.setItem(DEPARTMENTS_KEY, JSON.stringify(departments));
}

function createDepartment({ hospital_id, name }) {
  const departments = getAllDepartments();
  const newDepartment = { id: uuidv4(), hospital_id, name };
  departments.push(newDepartment);
  saveAllDepartments(departments);
  return newDepartment;
}

function getDepartmentsByHospital(hospital_id) {
  return getAllDepartments().filter(dep => dep.hospital_id === hospital_id);
}

module.exports = {
  getAllDepartments,
  createDepartment,
  getDepartmentsByHospital,
}; 