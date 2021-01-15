const request = require('request');




const fetchBreedDescription = function(breedName, callback) {
 
  // console.log(breedName);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, body) => {
    if (error) {
      return callback(error, null);
    }
    if (breedName === undefined) {
      return callback(Error("Please fill out a breed name"), null);
    }
      
    const data = JSON.parse(body.body);
    
    if (data.length === 0) {
      return callback(Error("Sorry no data on " + breedName + " please check spelling"), null);
    }
    callback(null, data[0].description);
  });
  
};
module.exports = {
  fetchBreedDescription
};
