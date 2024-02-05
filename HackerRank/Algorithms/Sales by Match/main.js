function sockMerchant(n, arr) {
  let matched = 0;
  const filterdArr = arr.filter(
    (el, index, arr) => arr.indexOf(el) !== arr.lastIndexOf(el)
  );
  if (filterdArr.length === 0) return 0;
  filterdArr
    .sort((a, b) => a - b)
    .reduce((prev, current) => {
      prev === current ? (matched += 0.5) : matched;
      prev !== current ? (matched = Math.ceil(matched)) : matched;
      return current;
    });
  return Math.ceil(matched);
}

console.log(sockMerchant(9, [10, 20, 30]));
