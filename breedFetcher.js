const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    // Print the error if one occurred
    
    if (error) {
      return callback(error,null);
    } // Print the error if one occurred
  
    const data = JSON.parse(body);
  
    
    let result = data[0];
   
    if (result) {
      callback(null,result.description);
    } else {

      callback("breed not found");
    }
  });
};

module.exports = { fetchBreedDescription };
