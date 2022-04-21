/* Code for converting JSON file to JavaScript module */

// get filesystem module
const fs = require('fs');
const os = require('os');
const util = require('util');

// use the readFileSync() function with path to the file
const buffer = fs.readFileSync("ariaInHtmlInfo.json");

// use the toString() method to convert buffer to String
const jsonFromFile = buffer.toString();

// parse the JSON string
const objFromJson = JSON.parse(jsonFromFile);

// use util.inspect to write the JavaScript object to a file
const prefix = 'export default const ariaInHTMLInfo = ';
const suffix = `;${os.EOL}`;
fs.writeFile('output.mjs', prefix + util.inspect(objFromJson, { compact: false, depth: null }) + suffix, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// for verification purposes, use JSON.stringify on the JavaScript object
fs.writeFile('output.json', JSON.stringify(objFromJson, null, 4) + os.EOL, err => {
  if (err) {
    console.error(err);
    return;
  }
});
