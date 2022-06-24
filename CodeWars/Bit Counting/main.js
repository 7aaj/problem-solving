var countBits = function (n) {
  let binary = [];
  let decimal = n;
  if (n != 0) {
    while (decimal != 1) {
      // search about decimal to binary math to understand the logic
      let b = decimal % 2;
      binary.unshift(b);
      decimal = Math.floor(n / 2);
      n = decimal;
    }
    binary.unshift(1);
  } else {
    binary = [0];
  }
  return binary.sort().reverse().lastIndexOf(1) + 1;
};

console.log(countBits(15));
