function designerPdfViewer(array, word) {
  //learned this from internet
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const alphabetLower = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  let highestNumber = [];
  word.split("").map((element) => {
    if (element === element.toUpperCase()) {
      highestNumber.push(array[alphabet.indexOf(element)]);
    } else {
      highestNumber.push(array[alphabetLower.indexOf(element)]);
    }
  });
  return Math.max(...highestNumber) * word.length;
}
console.log(
  designerPdfViewer(
    [
      1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      5,
    ],
    "abc"
  )
);

// const alpha = Array.from(Array(26)).map((e, i) => i + 65);
// const alphabet = alpha.map((x) => String.fromCharCode(x));
// const alphabetLower = alpha.map((x) => String.fromCharCode(x).toLowerCase());
// console.log([[alphabet], [alphabetLower]]);
