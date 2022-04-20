const json = `{
  "result": true,
  "count": 42,
  "a[href]": true,
  "with space": "yes"
}`;
const obj = JSON.parse(json);

console.log(obj);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

// get filesystem module
const fs = require('fs');
const os = require('os');
const util = require('util');

// using the readFileSync() function
// and passing the path to the file
const buffer = fs.readFileSync("ariaInHtmlInfo.json");

// use the toString() method to convert
// Buffer into String
const jsonFromFile = buffer.toString();
const objFromJson = JSON.parse(jsonFromFile);
const prefix = 'export default const obj =\n ';

fs.writeFile('output.js', util.inspect(objFromJson, { compact: false, depth: null }) + os.EOL, err => {
  if (err) {
    console.error(err);
    return;
  }
});

fs.writeFile('output.json', JSON.stringify(objFromJson, null, 4) + os.EOL, err => {
  if (err) {
    console.error(err);
    return;
  }
});
