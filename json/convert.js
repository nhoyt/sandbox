/* Code for converting JSON file to JavaScript ES6 module */

// get built-in node.js modules
const fs = require('fs');
const os = require('os');
const util = require('util');

// read JSON file into buffer object
const buffer = fs.readFileSync("ariaInHtmlInfo.json");

// convert buffer object to String
const jsonFromFile = buffer.toString();

// convert JSON string to JavaScript object
const objFromJson = JSON.parse(jsonFromFile);

// use util.inspect to convert the JavaScript object into a String and
// then write it to a file that can be imported as a JavaScript module
const prefix = 'export const ariaInHtmlInfo = ';
const suffix = `;${os.EOL}`;
fs.writeFile('output.mjs', prefix + util.inspect(objFromJson, { compact: false, depth: null }) + suffix, err => {
  if (err) {
    console.error(err);
    return;
  }
});

// for verification purposes, use JSON.stringify on the JavaScript object
fs.writeFile('outputFromParse.json', JSON.stringify(objFromJson, null, 4) + os.EOL, err => {
  if (err) {
    console.error(err);
    return;
  }
});
