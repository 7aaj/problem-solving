function sevenBoom(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].toString().includes("7") === true) {
      return "Boom!";
    } else {
      continue;
    }
  }
  return "there is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 67]));
