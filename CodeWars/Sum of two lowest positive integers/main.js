function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); //should be 13

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])); //should be 6

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])); //should be 10

console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1])); //should be 24

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4])); //should be 16

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])); //should be 7

console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453])); //should be 3453455
