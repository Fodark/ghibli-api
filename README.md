# Ghili API

This Node.js package provides a wrapper for the [Studio Ghibli API](https://ghibliapi.herokuapp.com/), without having to manually process HTTP requests. It provides the same endpoints as the original API but includes also the possibility to filter the results based on certain fields. More details below.

Options can be passed either as a string, if requiring a specific resource in the form of UUID as in the original APIs, or an object, with the fields which are to be filtered, e.g.

```javascript
{
    title: 'laputa'
}
```

```javascript
{
    gender: 'male',
    eye_color: 'green'
}
```

If no options are provided, every result is returned.

### Example

```javascript
const ghibli = require('ghibli-api');

ghibli.getFilms({title: 'laputa'}).then(response => {
    if(response.ok) {
        console.log(response.data); // data contains the results
    } else {
        console.log(response.error); // something went wrong
    }
})
```

### Available endpoints

#### getFilms
  
Available options:

- UUID
- title
- director
- producer
- year

#### getPeople
  
Available options:

- UUID
- name
- gender
- age
- eye_color
- hair_color

#### getSpecies
  
Available options:

- UUID
- name
- classification
- eye_color
- hair_color

#### getLocations
  
Available options:

- UUID
- name
- climate
- terrain
- surface_water

#### getVehicles
  
Available options:

- UUID
- name
- description
- length