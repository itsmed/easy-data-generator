const errorMessage = require('./errorMessage');

module.exports = function checkFileExtension(filePath) {
  let fileName = filePath.split('/')[filePath.split('/').length - 1] || filePath;
  let extension = fileName.split('.')[1];

  if (extension !== 'txt') {
    errorMessage('Only plain text file extensions are supported', '.txt', '.' + extension);
    return false;
  }
}