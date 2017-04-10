const { getNames } = require('../helpers');
const { firstNames } = require('../helpers/names');

module.exports = function lastName(count) {
  return getNames(count, firstNames);
};
