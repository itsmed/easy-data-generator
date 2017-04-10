module.exports = function randInt(min, max) {
  if (max !== undefined && min !== undefined) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    return Math.floor(Math.random() * 100);
  }
}