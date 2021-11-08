function bSot(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.time("time");
let arr = [5, 3, 2, 6, 2, 4, 7, 23, 2];
console.log(bSot(arr));
console.timeEnd("time");
