function pageCount(bookLength, page) {
  let leftToRight = -1;
  let rightToLeft = 0;
  bookLength % 2 === 0 ? (rightToLeft = 1) : rightToLeft;
  for (let index = 0; index < page; index++) {
    leftToRight++;
  }
  for (let index = page; index < bookLength; index++) {
    rightToLeft++;
  }
  return Math.min(
    ...[(leftToRight / 2).toFixed(), Math.floor(rightToLeft / 2)]
  );
}

console.log(pageCount(6, 5));

// return Math.floor(Math.min(...[bookLength / 2 - page / 2, page / 2]));
