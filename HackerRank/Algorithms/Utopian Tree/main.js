function utopianTree(cycles) {
  let height = 1;
  for (let cycleOrder = 0; cycleOrder < cycles; cycleOrder++) {
    if (cycleOrder % 2 !== 0) {
      height += 1;
      continue;
    }
    height += height;
  }
  return height;
}

console.log(utopianTree(4));
