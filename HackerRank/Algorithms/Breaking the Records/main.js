function breakingRecords(scores) {
  let maximumScore = scores[0];
  let minimumScore = scores[0];
  let bestRecordBreaks = 0;
  let lowestRecordBreaks = 0;
  for (let score of scores) {
    // checks if the score are more than or equal to first index or the array
    if (score >= maximumScore) {
      // if its just more the post ecrement works
      if (score > maximumScore) bestRecordBreaks++;
      maximumScore = score;
    } else if (score <= minimumScore) {
      if (score < minimumScore) lowestRecordBreaks++;
      minimumScore = score;
    }
  }
  return [bestRecordBreaks, lowestRecordBreaks];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
