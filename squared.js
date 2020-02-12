function squared(arr) {
  return _.partition(arr, n => Math.sqrt(n) % 1 === 0);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(squared(array));