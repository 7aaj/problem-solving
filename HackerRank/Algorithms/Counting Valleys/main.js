function countingValleys(steps, path) {
  steps = 0;
  let counter = 0;
  path.split("").map((element) => {
    let test = counter === 0;
    element === "U" ? counter++ : counter--;
    if (counter == -1 && test) steps++;
  });
  return steps;
}

console.log(countingValleys(8, "UDDDUDUU"));

// [-1, -1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1]
