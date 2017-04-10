module.exports = function buildTestArray(len = 10, start = 0, stop = 10) {
  let arr = [];
  let i = 0;
  let num = start;
  while (i < len) {
    if (num > stop) {
      num = start;
    }
    arr.push(num);
    num++;
    i++;
  }
  return arr;
};
