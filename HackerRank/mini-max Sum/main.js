function miniMaxSum(arr) {
  let arrSum = 0;
  // loop to have the sum of the array numbers
  for (let i = 0; i < arr.length; i++) {
    // saving the array sum in a variable
    arrSum += arr[i];
  }
  console.log(`${arrSum - Math.max(...arr)} ${arrSum - Math.min(...arr)}`);
}

miniMaxSum([1, 2, 3, 4, 5]);
