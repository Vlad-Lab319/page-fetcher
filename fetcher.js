const request = require('request');
const fs = require('fs');

const args = process.argv.splice(2);
const path = args[0];
const file = args[1];

let data;

// const fetchHandle = request(path, (error, response, body) => {
//   data = body;
//   fs.writeFile(file, data, err => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   })
//   return data;
// });

// return fetchHandle;

request(path, (error, response, body) => {
  data = body;
  fs.writeFile(file, data, err => {
    if (err) {
      console.error(err);
      return;
    }
  })
  console.log(`Downloaded and saved ${data.length} bytes to ${file}`);
  return;
});

// const fileLength = request;
// console.log(fileLength);
