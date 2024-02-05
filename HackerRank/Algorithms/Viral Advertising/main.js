function viralAdvertising(days) {
  let advertise = 5;
  let cumulativeLikes = 2;
  for (let index = 0; index < days; index++) {
    advertise = Math.floor(advertise / 2);
    if (index > 0) cumulativeLikes += advertise;
    if (index === days - 1) continue;
    advertise = advertise * 3;
  }
  return cumulativeLikes;
}

console.log(viralAdvertising(5));
