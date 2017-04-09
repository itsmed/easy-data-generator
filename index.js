'use strict';

const fs = require('fs');

const {
  checkFileExtension,
  errorMessage
} = require('./helpers');


function dataGenerator(args) {
  args = args || process.argv;

  const filePath = typeof args === 'string' ? args : args[2];
  
  if (checkFileExtension(filePath) === false) {
    return;
  }
  let input = '';
  
  let readStream = fs.createReadStream(filePath);
  readStream.on('error', (err) => errorMessage('No such file exists.', 'A path to a .txt file that exists', err.message));

  readStream.on('data', data => {
    console.log(data.toString().split('\r\n'));
    input += data.toString();
  });

  readStream.on('end', () => {
    console.log(input);
    input = input.replace(/\r|\r\n|\n/, '\n').split('\n')
    for(let i = 0; i < input.length; i++) {
      console.log(i, input[i], Array.isArray(input));
    }    
  });
  // console.log('file', filePath);
  // fs.readFileSync(filePath, (err, data) => {
  //   if (err) {
  //     console.warn(err);
  //   }
  //   console.log('data: ', data.toString());
  //   input += data.toString();
  // });
}

if (process.env.NODE_ENV === 'test') {
  module.exports = dataGenerator;
} else {
  module.exports = dataGenerator();
}
