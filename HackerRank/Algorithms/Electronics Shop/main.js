function getMoneySpent(keyboards, drives, budget) {
  let price = 0;
  keyboards.map((element) => {
    drives.map((ele) => {
      element + ele > price && element + ele <= budget
        ? (price = element + ele)
        : price;
    });
  });
  if (price == 0) return -1;
  return price;
}

console.log(getMoneySpent([5], [4], 5));
