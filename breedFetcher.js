const request = require('request');

const args = process.argv.slice(2);
request('https://api.thecatapi.com/v1/breeds', function(error, response, body) {
  if (error) {
    console.error('error:', error);
  } // Print the error if one occurred

  const data = JSON.parse(body);
  
  let result = '';
  for (let item of data) {
    if (item['name'] === args[0]) {
      result = item['description'];
      break;
    }
    result = (`${args[0]} was not found!`);
  }
  console.log(result);
});
