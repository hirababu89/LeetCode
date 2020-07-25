/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
Example 2:

Input: [[7,10],[2,4]]
Output: 1*/
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intervals = [
  [7, 10],
  [2, 4],
];

var minMeetingRooms = function(intervals) { // 253
    intervals.sort((a, b) => a[0] - b[0]);
    const rooms = [];
    for (let i = 0; i < intervals.length; ++i) {
      let needNew = true;
      for (let j = 0; j < rooms.length; ++j) {
        if (rooms[j][1] <= intervals[i][0]) {
          rooms[j] = intervals[i];
          needNew = false;
          break;
        }
      }
      if (needNew) {
        rooms.push(intervals[i]);
      }
    }
    return rooms.length;
};

console.log(minMeetingRooms(intervals));