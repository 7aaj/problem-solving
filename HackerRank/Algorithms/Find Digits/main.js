function findDigits(number) {
  let divisorTester = number;
  let testsArr = number.toString().split("");
  let counter = 0;
  testsArr.map((element) => {
    divisorTester % +element == 0 ? counter++ : counter;
  });
  return counter;
}

console.log(findDigits(1012));
