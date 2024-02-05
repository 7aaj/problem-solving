function bonAppetit(itemsOrdered, item, money) {
  let price = itemsOrdered.reduce((accumulator, current) => {
    return accumulator + current;
  });
  price = (price - itemsOrdered[item]) / 2;
  if (money - price <= 0) {
    return console.log("Bon Appetit");
  }
  console.log(money - price);
}

bonAppetit([3, 10, 2, 9], 1, 7);
