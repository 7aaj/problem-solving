function beautifulDays(startingDay, endingDay, divisor) {
  let count = 0;
  while (startingDay != endingDay + 1) {
    let reversdnumber = +startingDay.toString().split("").reverse().join("");
    Number.isInteger((startingDay - reversdnumber) / divisor) ? count++ : count;
    startingDay++;
  }
  return count;
}

console.log(beautifulDays(12, 120, 9));
