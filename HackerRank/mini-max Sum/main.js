function miniMaxSum(arr) {
  let arrayResult = 0;
  // loop to have the sum of the array numbers
  for (let i = 0; i < arr.length; i++) {
    // saving the array sum in a variable
    arrayResult += arr[i];
  }
  console.log(`${arrayResult - Math.max(...arr)} ${arrayResult - Math.min(...arr)}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
