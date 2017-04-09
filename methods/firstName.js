const { firstNames } = require('../helpers/names');

module.exports = function firstName(count) {
  if (count === undefined) {
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  }
  if (count > firstNames.length) {
    return firstNames;
  }

  let names = [];
  let i = 0;
  while (i < count) {
    let randomIndex = Math.floor(Math.random * firstNames.length);
    names.push(firstNames[i]);
    i++;
  }
  return names;
}