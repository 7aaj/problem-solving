function equalizeArray(arr) {
  const lengthOfParameter = arr.length;
  const testerArr = Array.from(new Set(arr));
  const arrayOfSameElemnts = [];
  arr.map((element) => {
    testerArr.map((ele, index) => {
      if (element === testerArr[index]) {
        arrayOfSameElemnts.push([]);
        arrayOfSameElemnts[index].push(element);
      }
    });
  });
  arrayOfSameElemnts.length = testerArr.length;
  const arrayOfLengthes = [];
  arrayOfSameElemnts.map((arrlength) => arrayOfLengthes.push(arrlength.length));
  return lengthOfParameter - Math.max(...arrayOfLengthes);
}

console.log(
  equalizeArray([
    69, 86, 100, 69, 55, 83, 15, 69, 86, 69, 79, 16, 86, 24, 24, 55, 16, 69,
    100, 79, 16, 83, 83, 79, 15, 15, 86, 16, 55, 18, 100, 100, 86, 16, 83, 79,
    86, 83, 100, 83, 55, 15, 86, 86, 55, 100, 55, 18, 55, 100, 86, 69, 83, 24,
    16, 55, 100, 16, 100, 24, 16, 55, 15, 79, 16, 18, 16, 16, 83, 83, 69, 18,
    100, 79, 16, 24, 79, 16, 69, 86, 83, 79, 83, 18, 15, 100, 24, 83,
  ])
);
