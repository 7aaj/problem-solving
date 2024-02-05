function saveThePrisoner(prisoners, sweets, chair) {
  if (((sweets % prisoners) + chair - 1) % prisoners === 0) return prisoners;
  return ((sweets % prisoners) + chair - 1) % prisoners;
}

console.log(saveThePrisoner(4, 6, 2));

// not me !!!!!!!!!!!!!!!!!!!!

// function saveThePrisoner(n, m, s) {
//   let rem = m % n;
//   if ((rem + s - 1) % n === 0) {
//     return n;
//   }

//   return (rem + s - 1) % n;
// }
// console.log(saveThePrisoner(4, 6, 2));
