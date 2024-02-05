function jumpingOnClouds(cloudsArr) {
  let minJumps = 0;
  for (let jump = 0; jump < cloudsArr.length; ) {
    if (cloudsArr[jump + 2] === 0) {
      minJumps++;
      jump += 2;
      continue;
    }
    if (cloudsArr[jump + 1] === 0) {
      minJumps++;
      jump++;
      continue;
    }
    jump++;
  }
  return minJumps;
}

console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
