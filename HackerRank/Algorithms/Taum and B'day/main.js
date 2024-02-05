function taumBday(blackGifts, whiteGifts, blackCost, whiteCost, convertCost) {
  const lowestPrice = [
    BigInt(blackCost) * BigInt(blackGifts) +
      BigInt(whiteCost) * BigInt(whiteGifts),
    (BigInt(blackCost) + BigInt(convertCost)) * BigInt(whiteGifts) +
      BigInt(blackCost) * BigInt(blackGifts),
    (BigInt(whiteCost) + BigInt(convertCost)) * BigInt(blackGifts) +
      BigInt(whiteCost) * BigInt(whiteGifts),
  ];
  const numbersarray = [];
  lowestPrice.forEach((bigint) => numbersarray.push(bigint.toString()));
  return numbersarray.sort((a, b) => a - b)[0];
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924));
