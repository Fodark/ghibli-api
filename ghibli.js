const axios = require('axios').default;

const BASE_URL = 'https://ghibliapi.herokuapp.com';
const { isUUID } = require('validator');

const getFilms = async (opts) => {
  const options = opts || '';
  let URL = `${BASE_URL}/films`;

  if (typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`;
  }

  try {
    const response = await axios.get(URL);
    let { data } = response;

    if (options instanceof Object) {
      if (options.title && typeof (options.title) === 'string') {
        data = data.filter((el) => el.title
          .toLowerCase()
          .includes(options.title.toLowerCase()));
      }
      if (options.director && typeof (options.director) === 'string') {
        data = data.filter((el) => el.director
          .toLowerCase()
          .includes(options.director.toLowerCase()));
      }
      if (options.producer && typeof (options.producer) === 'string') {
        data = data.filter((el) => el.producer
          .toLowerCase()
          .includes(options.producer.toLowerCase()));
      }
      if (options.year && typeof (options.year) === 'string') {
        data = data.filter((el) => el.release_date === options.year);
      }
    }

    return { ok: true, data, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

const getPeople = async (opts) => {
  const options = opts || '';
  let URL = `${BASE_URL}/people`;

  if (typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`;
  }

  try {
    const response = await axios.get(URL);
    let { data } = response;

    if (options instanceof Object) {
      if (options.name && typeof (options.name) === 'string') {
        data = data.filter((el) => el.name
          .toLowerCase()
          .includes(options.name.toLowerCase()));
      }
      if (options.gender && typeof (options.gender) === 'string') {
        data = data.filter((el) => el.gender
          .toLowerCase()
          .includes(options.gender.toLowerCase()));
      }
      if (options.age && typeof (options.age) === 'string') {
        data = data.filter((el) => el.age
          .toLowerCase()
          .includes(options.age.toLowerCase()));
      }
      if (options.eye_color && typeof (options.eye_color) === 'string') {
        data = data.filter((el) => el.eye_color
          .toLowerCase()
          .includes(options.eye_color.toLowerCase()));
      }
      if (options.hair_color && typeof (options.hair_color) === 'string') {
        data = data.filter((el) => el.hair_color
          .toLowerCase()
          .includes(options.hair_color.toLowerCase()));
      }
    }

    return { ok: true, data, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

const getSpecies = async (opts) => {
  const options = opts || '';
  let URL = `${BASE_URL}/species`;

  if (typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`;
  }

  try {
    const response = await axios.get(`${URL}`);
    let { data } = response;

    if (options instanceof Object) {
      if (options.name && typeof (options.name) === 'string') {
        data = data.filter((el) => el.name
          .toLowerCase()
          .includes(options.name.toLowerCase()));
      }
      if (options.classification && typeof (options.classification) === 'string') {
        data = data.filter((el) => el.classification
          .toLowerCase()
          .includes(options.classification.toLowerCase()));
      }
      if (options.eye_color && typeof (options.eye_color) === 'string') {
        data = data.filter((el) => el.eye_colors
          .toLowerCase()
          .includes(options.eye_color.toLowerCase()));
      }
      if (options.hair_color && typeof (options.hair_color) === 'string') {
        data = data.filter((el) => el.hair_colors
          .toLowerCase()
          .includes(options.hair_color.toLowerCase()));
      }
    }

    return { ok: true, data, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

const getLocations = async (opts) => {
  const options = opts || '';
  let URL = `${BASE_URL}/locations`;

  if (typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`;
  }

  try {
    const response = await axios.get(`${URL}`);
    let { data } = response;

    if (options instanceof Object) {
      if (options.name && typeof (options.name) === 'string') {
        data = data.filter((el) => el.name
          .toLowerCase()
          .includes(options.name.toLowerCase()));
      }
      if (options.climate && typeof (options.climate) === 'string') {
        data = data.filter((el) => el.climate
          .toLowerCase()
          .includes(options.climate.toLowerCase()));
      }
      if (options.terrain && typeof (options.terrain) === 'string') {
        data = data.filter((el) => el.terrain
          .toLowerCase()
          .includes(options.terrain.toLowerCase()));
      }
      if (options.surface_water && typeof (options.surface_water) === 'string') {
        data = data.filter((el) => el.surface_water
          .toLowerCase()
          .includes(options.surface_water.toLowerCase()));
      }
    }

    return { ok: true, data, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

const getVehicles = async (opts) => {
  const options = opts || '';
  let URL = `${BASE_URL}/vehicles`;

  if (typeof options === 'string' && isUUID(options)) {
    // specific document
    URL = `${URL}/${options}`;
  }

  try {
    const response = await axios.get(`${URL}`);
    let { data } = response;

    if (options instanceof Object) {
      if (options.name && typeof (options.name) === 'string') {
        data = data.filter((el) => el.name
          .toLowerCase()
          .includes(options.name.toLowerCase()));
      }
      if (options.description && typeof (options.description) === 'string') {
        data = data.filter((el) => el.description
          .toLowerCase()
          .includes(options.description.toLowerCase()));
      }
      if (options.length && typeof (options.length) === 'string') {
        data = data.filter((el) => el.length
          .toLowerCase()
          .includes(options.length.toLowerCase()));
      }
    }

    return { ok: true, data, error: null };
  } catch (error) {
    return { ok: false, data: null, error };
  }
};

const ghibli = {
  getFilms,
  getPeople,
  getLocations,
  getSpecies,
  getVehicles,
};

module.exports = ghibli;
