function gradingStudents(grades) {
  const answerArr = [];
  for (let index = 0; index < grades.length; index++) {
    let roundTester = +grades[index].toString().split("")[1];
    if (grades[index] + 2 < 40) {
      answerArr.push(grades[index]);
      continue;
    }
    if (grades[index] == 100) {
      answerArr.push(grades[index]);
      continue;
    }
    if (roundTester + 2 == 10 || roundTester + 2 == 5) {
      answerArr.push(grades[index] + 2);
    } else if (roundTester + 1 == 10 || roundTester + 1 == 5) {
      answerArr.push(grades[index] + 1);
    } else {
      answerArr.push(grades[index]);
    }
  }
  return answerArr;
}

console.log(
  gradingStudents([
    22, 86, 30, 0, 16, 51, 53, 42, 48, 22, 69, 12, 27, 34, 24, 95, 16, 32, 22,
    52, 56, 71, 95,
  ])
);
