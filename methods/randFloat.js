const { errorMessage } = require('../helpers');

module.exports = function randFloat(decimalPlaces = 2, size = 3) {
  let i = 1;
  if (decimalPlaces < 0) {
    decimalPlaces = 0;
  }
  if (decimalPlaces > 20) {
    return errorMessage('First argument to float must be less than 20.\n\t\tFloat Signature: float(decimalPlaces, size)', 'A number less than 20', decimalPlaces);
  }
  while (size > 0) {
    i *= 10;
    size--;
  }
  return (Math.random() * i).toFixed(decimalPlaces);
};
