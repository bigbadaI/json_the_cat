const request = require('request');
const args = process.argv.splice(2);
let catBreed = args.toString('');




request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if (error)
    console.log('error:', error); // Print the error if one occurs
  if (body.length <= 2)
    console.log("Sorry no data on " + catBreed + " please check spelling");
  if (body.length > 2) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
