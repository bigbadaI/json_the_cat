
const  { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, data) => {
  
  if (err) {
    console.log('Error fetch detail:', err);
  } else {
    console.log(data);
  }
});