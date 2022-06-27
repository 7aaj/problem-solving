function miniMaxSum(arr) {
  let result = 0;
  // loop to have the sum of the array numbers
  for (let i = 0; i < arr.length; i++) {
    // saving the array sum in a variable
    result += arr[i];
  }
  return console.log(
    `${result - Math.max(...arr)} ${result - Math.min(...arr)}`
  );
}

miniMaxSum([1, 2, 3, 4, 5]);
