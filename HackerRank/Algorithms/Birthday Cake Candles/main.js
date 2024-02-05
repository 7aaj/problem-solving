function birthdayCakeCandles(candles) {
  return (
    candles
      .sort((a, b) => a - b)
      .reverse()
      .lastIndexOf(candles[0]) + 1
  );
}

console.log(birthdayCakeCandles([-1, -2, -5, -1, -5, -4, -1]));
