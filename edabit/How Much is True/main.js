function countTrue(arr) {
  return arr.sort().reverse().lastIndexOf(true) + 1;
}
