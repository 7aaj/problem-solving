function timeConversion(array) {
  array = array.split(":");
  if (array[array.length - 1].includes("PM")) {
    if (array[0] == 12 && array[array.length - 1].includes("PM")) {
      return `${array[0]}:${array[1]}:${array[2].slice(0, 2)}`;
    } else {
      return `${+array[0] + 12}:${array[1]}:${array[2].slice(0, 2)}`;
    }
  } else {
    if (array[0] == 12 && array[array.length - 1].includes("AM")) {
      return `${+array[0] - 12}0:${array[1]}:${array[2].slice(0, 2)}`;
    }
    return `${array[0]}:${array[1]}:${array[2].slice(0, 2)}`;
  }
}

console.log(timeConversion("12:05:45PM"));
// 19:05:45
