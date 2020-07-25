/*
The count-and-say sequence is the sequence of integers with the first five terms as following:
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively
, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.
Example 1:
Input: 1
Output: "1"
Explanation: This is the base case.*/
/**
 * @param {number} n
 * @return {string}
 */
var n = 4;
var countAndSay = function (n) {
    var start = '1';
    var result = '';
    var tmp = 1;
    for (i = 0; i < n - 1; i++) {
      //tmp will count all repeats
      for (var j = 0; j < start.length; j++) {
        if (start[j] !== start[j + 1] || j == start.length - 1) {
          result += tmp + start[j];
          tmp = 1;
        } else {
          tmp += 1;
        }
      }
      start = result;
      result = '';
    }
    return start;
};

console.log(countAndSay(n));
