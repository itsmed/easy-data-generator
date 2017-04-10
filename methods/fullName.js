const {
  firstNames,
  lastNames
} = require('../helpers/names');

module.exports = function fullName(count) {
  if (count === undefined) {
    let indexOne = Math.floor(Math.random() * firstNames.length);
    let indexTwo = Math.floor(Math.random() * lastNames.length);

    return firstNames[indexOne].concat(' ', lastNames[indexTwo])
  }
  else {
    let arr = [];
    let i = 0;
    if (count > firstNames.length) { count = firstNames.length; }
    while (i < count) {
      let indexOne = Math.floor(Math.random() * firstNames.length);
      let indexTwo = Math.floor(Math.random() * lastNames.length);

      arr.push(firstNames[indexOne].concat(' ', lastNames[indexTwo]));
      i++;
    }
    return arr;
  }
}
