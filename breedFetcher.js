const request = require('request');

const args = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  
  let result = ''
  for (let item of data) {
    if (item['name'] === args[0]) {
      result = item['description']
      
    }
    result = (`${args[0]} was not found!`);
  }
  console.log(result)
});
