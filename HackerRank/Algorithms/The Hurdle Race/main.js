function hurdleRace(k, height) {
  let heighestJump = Math.max(...height) - k;
  return heighestJump < 0 ? 0 : heighestJump;
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
