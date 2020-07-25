/*
Given two positive integers x and y, an integer is powerful if it is equal to x^i + y^j for some integers i >= 0 and j >= 0.
Return a list of all powerful integers that have value less than or equal to bound.
You may return the answer in any order.  In your answer, each value should occur at most once.
Example 1:
Input: x = 2, y = 3, bound = 10
Output: [2,3,4,5,7,9,10]
Explanation: 
2 = 2^0 + 3^0
3 = 2^1 + 3^0
4 = 2^0 + 3^1
5 = 2^1 + 3^1
7 = 2^2 + 3^1
9 = 2^3 + 3^0
10 = 2^0 + 3^2 */
/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var x = 2, y = 3, bound = 10;
var powerfulIntegers = function(x, y, bound) { // 970
    var ret = [];

    for (let i = 0; i < Math.sqrt(bound); i++) {
        var numX = Math.pow(x, i);
        for (let j = 0; j < Math.sqrt(bound); j++) {
            var numY = Math.pow(y, j);
            var sum = numX + numY;
            if (sum <= bound && !ret.includes(sum)) {
                ret.push(sum);
            }
        }      
    }
    return ret;
};

console.log(powerfulIntegers(x, y, bound));