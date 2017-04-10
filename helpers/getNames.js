module.exports = function getNames(count, arr) {
  if (count === undefined) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  if (count > arr.length) {
    return arr;
  }

  let newArr = [];
  let i = 0;
  while (i < count) {
    let randomIndex = Math.floor(Math.random * arr.length);
    newArr.push(arr[i]);
    i++;
  }
  return newArr;
}