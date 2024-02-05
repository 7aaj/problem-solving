function plusMinus(arr) {
  const parameterLength = arr.length;
  const positive = [];
  const zero = [];
  const negative = [];
  // loop for pushing the deferent values
  for (let i = 0; i < parameterLength; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
    } else if (arr[i] == 0) {
      zero.push(arr[i]);
    } else if (arr[i] < 0) {
      negative.push(arr[i]);
    }
  }
  // the math for proportion of values
  console.log((positive.length / parameterLength).toFixed(6)),
    console.log((negative.length / parameterLength).toFixed(6)),
    console.log((zero.length / parameterLength).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
