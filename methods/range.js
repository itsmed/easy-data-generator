const randInt = require('./randInt');

const { errorMessage, buildTestArray } = require('../helpers');

module.exports = function range(len = 10, start = 0, end = 10) {
  if (len < 0) {
    return errorMessage('Range method requires a positive number for first argument.\nRange Signature:\t\tfunction range(length, start, end)\nAll arguments are optional.', 'A positive integer or 0', len);
  }
  let stop = end;
  
  if (arguments.length === 2) {
    stop = start;
    start = 0;
  }
  if (arguments.length === 3) { return buildTestArray(len, start, stop); }

  let arr = [];
  let val = start;
  let i = 0;
  
  if (stop < start) {
    val = stop;
    while (i < len) {
      arr.push(val);
      val++;
      if (val > start) {
        val = stop;
      }
      i++;
    }
    return arr;
  }
  while (i < len) {
    arr.push(val);
    val++;
    i++;
    if (val > stop) {
      val = start;
    }
  }
  return arr;
}