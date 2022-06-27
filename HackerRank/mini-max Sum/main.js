function miniMaxSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    result += arr[i];
  }
  return console.log(
    `${result - Math.max(...arr)} ${result - Math.min(...arr)}`
  );
}

miniMaxSum([1, 2, 3, 4, 5]);
