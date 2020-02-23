const axios = require('axios').default;
const BASE_URL = 'https://ghibliapi.herokuapp.com';

getFilms = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/films`);
        return (null, response.data);
      } catch (error) {
        return (error, null);
      }
};

getPeople = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/people`);
      return (null, response.data);
    } catch (error) {
      return (error, null);
    }
};

getLocations = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/locations`);
      return (null, response.data);
    } catch (error) {
      return (error, null);
    }
};

getSpecies = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/species`);
      return (null, response.data);
    } catch (error) {
      return (error, null);
    }
};

getVehicles = async () => {
  try {
      const response = await axios.get(`${BASE_URL}/vehicles`);
      return (null, response.data);
    } catch (error) {
      return (error, null);
    }
};

module.exports = {
  getFilms,
  getPeople,
  getLocations,
  getSpecies,
  getLocations
};