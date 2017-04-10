const { getNames } = require('../helpers');
const { lastNames } = require('../helpers/names');

module.exports = function firstName(count) {
  return getNames(count, lastNames);
};
