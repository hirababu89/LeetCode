/*
Given a non-negative integer c, your task is to decide whether 
there're two integers a and b such that a2 + b2 = c.
Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
*/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // 633

    for (var i = 0; i * i <= c; i++) {
      var left = c - i * i;
      if (Math.sqrt(left) % 1 === 0) {
        return true;
      }
    }
    return false;
};

console.log(judgeSquareSum(8));
