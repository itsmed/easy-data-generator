const randInt = require('./randInt');

module.exports = function range(len = 10) {

  let arr = [];
  let i = 0;
  let val = 0;
  while (i <= len) {
    arr.push(val);
    val++;
    i++;
    if (val > 10) {
      val = 0;
    }
  }
  return arr;
}