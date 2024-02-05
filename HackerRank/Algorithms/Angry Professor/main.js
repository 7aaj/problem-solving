function angryProfessor(numberOfStudents, arrivalTimes) {
  let counter = 0;
  arrivalTimes.forEach((element) => {
    element <= 0 ? counter++ : counter;
  });
  if (counter >= numberOfStudents) return "NO";
  return "YES";
}

console.log(angryProfessor(2, [0, -1, 2, 1]));
