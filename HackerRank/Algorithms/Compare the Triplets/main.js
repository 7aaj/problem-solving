function compareTriplets(alice, bob) {
  let alicePoints = 0;
  let bobPoints = 0;
  alice.map((aliceElement, index) => {
    if (aliceElement > bob[index] && aliceElement != bob[index]) {
      alicePoints++;
    } else if (aliceElement < bob[index]) {
      bobPoints++;
    }
  });
  return [alicePoints, bobPoints];
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
