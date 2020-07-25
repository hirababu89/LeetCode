/*
Given an integer, write a function to determine if it is a power of three.
Example 1:
Input: 27
Output: true
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) { // 326
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
};

console.log(isPowerOfThree(27));