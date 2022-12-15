// Import the necessary libraries
const request = require('request');
const cheerio = require('cheerio');

// Define the URL of the API endpoint
const API_URL = 'https://www.poemist.com/api/v1/randompoems';

console.log("ye")

// Make a request to the API endpoint to retrieve a random poem
request(API_URL, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    // Parse the response body as JSON
    const poem = JSON.parse(body);

    // Print the title and text of the poem
    console.log(poem.title);

    console.log(poem.content);
  }
});