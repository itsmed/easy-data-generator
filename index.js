'use strict';

const fs = require('fs');

const {
  checkFileExtension,
  errorMessage
} = require('./helpers');


function DataGenerator() {
  const filePath = process.argv[2];
  
  if (checkFileExtension(filePath) === false) {
    return;
  }
  
  let readStream = fs.createReadStream(filePath);
  readStream.on('error', (err) => errorMessage('No such file exists.', 'A path to a .txt file that exists', err.message));
}

module.exports = new DataGenerator();
