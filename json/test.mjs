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

/* Code for converting an imported ES6 module to JSON */

import { ariaInHtmlInfo } from './output.mjs';
import { writeFile } from 'fs';
import { EOL } from 'os';

// Convert the imported JavaScript object to JSON with stringify method
writeFile('outputFromImport.json', JSON.stringify(ariaInHtmlInfo, null, 4) + EOL, err => {
  if (err) {
    console.error(err);
    return;
  }
});
