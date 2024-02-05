function permutationEquation(array) {
  const answer = [];
  for (let index = 1; index <= array.length; index++) {
    let y = array.indexOf(array.indexOf(index) + 1) + 1;
    answer.push(y);
  }
  return answer;
}

console.log(permutationEquation([4, 3, 5, 1, 2]));

1;
3;
5;
4;
2;
