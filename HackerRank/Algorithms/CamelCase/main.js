function camelcase(string) {
  let counter = 1;
  string.split("").map((element) => {
    element === element.toUpperCase() ? counter++ : counter;
  });
  return counter;
}

console.log(camelcase("saveChangesInTheEditor"));
