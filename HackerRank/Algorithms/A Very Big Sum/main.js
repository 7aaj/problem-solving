function aVeryBigSum(ar) {
  ar = ar.reduce((previousValue, currentValue) => previousValue + currentValue);
  return ar;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
