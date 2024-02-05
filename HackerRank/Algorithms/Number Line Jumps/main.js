function kangaroo(x1, v1, x2, v2) {
  let answer = "NO";
  let testCase = 0;
  while (testCase != 100000) {
    x1 += v1;
    x2 += v2;
    if (x1 == x2) {
      answer = "YES";
      break;
    }
    testCase++;
  }
  return answer;
}

console.log(kangaroo(4523, 8092, 9419, 8076));
