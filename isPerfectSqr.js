/*Given a positive integer num, write a function which returns True if num is a perfect square else False.
Follow up: Do not use any built-in library function such as sqrt.
Example 1:
Input: num = 16
Output: true
*/
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) { // 367
  for (let i = 0; i * i <= num; i++) {
    if (i * i == num) return true;
  }
  return false;
};

console.log(isPerfectSquare(16));
