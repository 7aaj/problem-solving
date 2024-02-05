function catAndMouse(x, y, z) {
  let catA = x;
  let catB = y;
  let mouse = z;
  catA < mouse ? (catA = mouse - catA) : (catA = catA - mouse);
  catB < mouse ? (catB = mouse - catB) : (catB = catB - mouse);
  //after the math the lowest number gets the mouse first
  if (catA < catB) {
    return "Cat A";
  } else if (catA > catB) {
    return "Cat B";
  } else return "Mouse C";
}
console.log(catAndMouse(1, 3, 2));
