const randInt = require('./randInt');

const { errorMessage } = require('../helpers');

module.exports = function range(len = 10, stop = 10) {
  if (len < 0) {
    return errorMessage('Range method requires a positive number for first argument.\nRange Signature:\t\tfunction range(length, start, stop)\nAll arguments are optional.', 'A positive integer or 0', len);
  }
  let arr = [];
  let i = 0;
  let val = 0;
  while (i < len) {
    arr.push(val);
    val++;
    i++;
    if (val > stop) {
      val = 0;
    }
  }
  return arr;
}