function plusMinus(arr) {
  let n = arr.length;
  let positive = [];
  let zero = [];
  let negative = [];
  // loop for pushing the deferent values
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else if (arr[i] == 0) {
      zero.push(arr[i]);
    } else if (arr[i] < 0) {
      negative.push(arr[i]);
    }
  }
  // the math for proportion of values
  return (
    console.log((positive.length / n).toFixed(6)),
    console.log((negative.length / n).toFixed(6)),
    console.log((zero.length / n).toFixed(6))
  );
}

plusMinus([-4, 3, -9, 0, 4, 1]);
