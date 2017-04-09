'use strict';

const fs = require('fs');
const chalk = require('chalk');

function DataGenerator() {
  const filePath = process.argv[2];
  
  if (checkFileExtension(filePath) === false) {
    return;
  }
  
  let readStream = fs.createReadStream(filePath);
  readStream.on('error', (err) => errorMessage('No such file exists.', 'A path to a .txt file that exists', err.message));
}

function checkFileExtension(filePath) {
  let fileName = filePath.split('/')[filePath.split('/').length - 1] || filePath;
  let extension = fileName.split('.')[1];

  if (extension !== 'txt') {
    errorMessage('Only plain text file extensions are supported', '.txt', '.' + extension);
    return false;
  }
}

function errorMessage(message, expected, received) {
    console.log(chalk.bold('-----------------------------------------------------------------\n\n\n'));
    console.log(chalk.red(chalk.bold(message)), '\n');
    console.log(chalk.white('Expected: ', chalk.bold(expected)), '\n');
    console.log(chalk.white('Got: '), chalk.red(chalk.bold(received)));
    console.log(chalk.bold('\n\n\n\n\n-----------------------------------------------------------------'));  
}

module.exports = new DataGenerator();
