// Working
// const args = process.argv;
// // breedName is any name I gave this, args 2 is the input from the user on cmd at position 3 (index 2)
// let breedName = args[2];


// const request = require("request");
// // adding '+ breedName' to the query of the url allows any breed to be searched for.
// let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;


// request(url, function(error, response, body) {
//   if (error) {
//     console.error(error);
//   } else if (!breedName) {
//     return console.log("Error: Breed not found.");
//   }
//   // console.log(typeof body);
//   const data = JSON.parse(body);
//   // data returns an array of object, so we need to go a level inside to see that it is empty (using [0]).
//   if (!data[0]) {
//     return console.log("Error: Breed not found.");
//   }
//   // data[0] acceses the first item of the array in the body of the text > description singles out a specfic property
//   console.log((data[0]["description"]));
// // console.log(typeof data);
// });


// Refactored as a callback
const request = require("request");

// const args = process.argv;
// // breedName is any name I gave this, args 2 is the input from the user on cmd at position 3 (index 2)
// let breedName = args[2];

const fetchBreedDescription = function(breedName, callback) {
  // adding '+ breedName' to the query of the url allows any breed to be searched for.
  let url = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    console.log(data);
    if (data.length === 0) {
      return callback("Breed not found.", null);
    }
    return callback(null, data[0]["description"]);
  });
};






module.exports = { fetchBreedDescription };