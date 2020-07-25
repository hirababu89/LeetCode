function mergeIntervals(intervals) {
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  //console.log(intervals);
  var final = [];
  if (intervals.length > 1) {
    for (let i = 0; i < intervals.length - 1; i++) {
      var first = intervals[i];
      var second = intervals[i + 1];

      if (
        (first[1] >= second[0] && first[1] <= second[1]) ||
        (first[0] == second[0] && first[1] == second[1])
      ) {
        final.push([first[0], second[1]]);
        //i++;
      } else if (first[1] > second[0] && first[1] > second[1]) {
        final.push(first);
      } else {
        final.push(first);
        final.push(second);
      }
    }
    intervals = final;
    if (final.length > 1) {
      if (!(final[0][1] >= final[1][0] && final[0][1] <= final[1][1])) {
        return intervals;
      } else {
        mergeIntervals(intervals);
      }
    } else {
      return final;
    }
  } else {
    return intervals;
  }

  return final;
}

console.log(mergeIntervals());
