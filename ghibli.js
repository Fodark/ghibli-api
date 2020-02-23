const axios = require('axios').default;
const BASE_URL = 'https://ghibliapi.herokuapp.com';
const {isUUID} = require('validator');

getFilms = async (options) => {
  options = options || '';
  let URL = `${BASE_URL}/films`;

  if(typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`
  }

  try {
    const response = await axios.get(URL);
    let data = response.data;

    if(options instanceof Object) {
      if(options.title) {
        data = data.filter(el => el.title.toLowerCase().includes(options.title))
      }
      if(options.director) {
        data = data.filter(el => el.director.toLowerCase().includes(options.director)
        )
      }
      if(options.producer) {
        data = data.filter(el => el.producer.toLowerCase().includes(options.producer))
      }
      if(options.year) {
        data = data.filter(el => el.release_date === options.year)
      }
    }

    return {'ok': true, 'data': data, 'error': null};
  } catch (error) {
    return {'ok': false, 'data': null, 'error': error};
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