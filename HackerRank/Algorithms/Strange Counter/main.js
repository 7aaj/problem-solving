function strangeCounter(time) {
  let initial = 3;

  while (initial < time) {
    time = time - initial;
    initial = initial * 2;
  }

  return initial - time + 1;
}

console.log(strangeCounter(6));
// console.log([1, 2, 3, 4, 5, 6, 5, 4, 5, 4, 5, 4].sort());
