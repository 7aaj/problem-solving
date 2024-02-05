function simpleArraySum(arr) {
  let answer = arr.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  });
  return answer;
}
console.log(simpleArraySum([10, 20, 15, 30]));
