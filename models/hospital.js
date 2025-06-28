const { LocalStorage } = require('node-localstorage');
const { v4: uuidv4 } = require('uuid');
const localStorage = new LocalStorage('./hospitalData');

const HOSPITALS_KEY = 'hospitals';

function getAllHospitals() {
  return JSON.parse(localStorage.getItem(HOSPITALS_KEY) || '[]');
}

function saveAllHospitals(hospitals) {
  localStorage.setItem(HOSPITALS_KEY, JSON.stringify(hospitals));
}

function createHospital({ name, location }) {
  const hospitals = getAllHospitals();
  const newHospital = { id: uuidv4(), name, location };
  hospitals.push(newHospital);
  saveAllHospitals(hospitals);
  return newHospital;
}

module.exports = {
  getAllHospitals,
  createHospital,
}; 