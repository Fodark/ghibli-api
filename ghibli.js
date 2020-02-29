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
        data = data.filter(el => el.title.toLowerCase().includes(options.title.toLowerCase()));
      }
      if(options.director) {
        data = data.filter(el => el.director.toLowerCase().includes(options.director.toLowerCase()));
      }
      if(options.producer) {
        data = data.filter(el => el.producer.toLowerCase().includes(options.producer.toLowerCase()));
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

getPeople = async (options) => {
  options = options || '';
  let URL = `${BASE_URL}/people`;

  if(typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`
  }
  
  try {
    const response = await axios.get(URL);
    let data = response.data;

    if(options instanceof Object) {
      if(options.name) {
        data = data.filter(el => el.name.toLowerCase().includes(options.name.toLowerCase()));
      }
      if(options.gender) {
        data = data.filter(el => el.gender.toLowerCase().includes(options.gender.toLowerCase()));
      }
      if(options.age) {
        data = data.filter(el => el.age.toLowerCase().includes(options.age.toLowerCase()));
      }
      if(options.eye_color) {
        data = data.filter(el => el.eye_color.toLowerCase().includes(options.eye_color.toLowerCase()));
      }
      if(options.hair_color) {
        data = data.filter(el => el.hair_color.toLowerCase().includes(options.hair_color.toLowerCase()));
      }
    }

    return {'ok': true, 'data': data, 'error': null};
  } catch (error) {
    return {'ok': false, 'data': null, 'error': error};
  }
};

getSpecies = async (options) => {
  options = options || '';
  let URL = `${BASE_URL}/species`;

  if(typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`
  }

  try {
    const response = await axios.get(`${URL}`);
    let data = response.data;

    if(options instanceof Object) {
      if(options.name) {
        data = data.filter(el => el.name.toLowerCase().includes(options.name.toLowerCase()));
      }
      if(options.classification) {
        data = data.filter(el => el.classification.toLowerCase().includes(options.classification.toLowerCase()));
      }
      if(options.eye_color) {
        data = data.filter(el => el.eye_colors.toLowerCase().includes(options.eye_color.toLowerCase()));
      }
      if(options.hair_color) {
        data = data.filter(el => el.hair_colors.toLowerCase().includes(options.hair_color.toLowerCase()));
      }
    }

    return {'ok': true, 'data': data, 'error': null};
  } catch (error) {
    return {'ok': false, 'data': null, 'error': error};
  }
};

getLocations = async (options) => {
  options = options || '';
  let URL = `${BASE_URL}/locations`;

  if(typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`
  }

  try {
    const response = await axios.get(`${URL}`);
    let data = response.data;

    if(options instanceof Object) {
      if(options.name) {
        data = data.filter(el => el.name.toLowerCase().includes(options.name.toLowerCase()));
      }
      if(options.climate) {
        data = data.filter(el => el.climate.toLowerCase().includes(options.climate.toLowerCase()));
      }
      if(options.terrain) {
        data = data.filter(el => el.terrain.toLowerCase().includes(options.terrain.toLowerCase()));
      }
      if(options.surface_water) {
        data = data.filter(el => el.surface_water.toLowerCase().includes(options.surface_water.toLowerCase()));
      }
    }

    return {'ok': true, 'data': data, 'error': null};
  } catch (error) {
    return {'ok': false, 'data': null, 'error': error};
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