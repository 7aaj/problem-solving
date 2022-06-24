function getSum(a, b) {
  let aArr = [];
  let sum = 0;
  if (a == b) {
    return +a;
  } else if (a < b) {
    // loop so i can get the numbers between [a & b]
    for (i = +a; i < +b; i++) {
      // pushing the numbers between [a & b] in a array
      aArr.push(+a);
      +a++;
    }
    // loop for add the between numbers together
    for (let j = 0; j < aArr.length; j++) {
      sum += aArr[j];
    }
    return sum + +b;
  } else if (a > b) {
    for (i = +b; i < +a; i++) {
      aArr.push(+b);
      +b++;
    }
    for (let j = 0; j < aArr.length; j++) {
      sum += aArr[j];
    }
    return sum + +a;
  }
}
console.log(getSum("410", "52656"));
