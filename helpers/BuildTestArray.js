module.exports = function buildTestArray(len = 10, start = 0, stop = 10) {
  let arr = [];
  let i = 0;
  let num = start;
  if (start > stop) {
    while (i < len) {
      if (num < stop) {
        num = start;
      }
      arr.push(num);
      num--;
      i++;
    }
    return arr;
  }
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
