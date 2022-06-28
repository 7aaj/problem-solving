function staircase(n) {
  const whiteSpace = " ";
  const symbol = "#";
  let numberOfSymbols = 1;
  // Decrement loop for whitespace Decrement
  for (let i = n - 1; i >= 0; i--) {
    console.log(`${whiteSpace.repeat(i)}${symbol.repeat(numberOfSymbols)}`);
    // j Increment to increase the hash symbol
    numberOfSymbols++;
  }
}

staircase(5);
