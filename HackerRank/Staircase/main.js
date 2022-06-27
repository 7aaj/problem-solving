function staircase(n) {
  let space = " ";
  let hash = "#";
  let j = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log(`${space.repeat(i)}${hash.repeat(j)}`);
    j++;
  }
}

staircase(5);
