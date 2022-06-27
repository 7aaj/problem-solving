function staircase(n) {
  let space = " ";
  let hash = "#";
  let j = 1;
  // Decrement loop for whitespace Decrement
  for (let i = n - 1; i >= 0; i--) {
    console.log(`${space.repeat(i)}${hash.repeat(j)}`);
    // j Increment to increase the hash sign
    j++;
  }
}

staircase(5);
