/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all meetings.

Example 1:

Input: [[0,30],[5,10],[15,20]]
Output: false
Example 2:

Input: [[7,10],[2,4]]
Output: true*/
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var intervals = [[7, 10], [2, 4]];
//[
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ];
var canAttendMeetings = function (intervals) {
  // 252
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[i][1] > intervals[i + 1][0]) {
      return false;
    }
  }

  return true;
};

console.log(canAttendMeetings(intervals));
