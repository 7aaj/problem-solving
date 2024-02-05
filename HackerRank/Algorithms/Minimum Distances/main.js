function minimumDistances(arr) {
  const minimumDistances = [];
  arr.map((element, index, array) => {
    if (array.indexOf(element) != array.lastIndexOf(element)) {
      minimumDistances.push([
        array.lastIndexOf(element) - array.indexOf(element),
      ]);
    }
  });
  if (minimumDistances.length === 0) return -1;
  return Math.min(...minimumDistances);
}

console.log(minimumDistances([3, 1, 2, 1, 2, 3]));
