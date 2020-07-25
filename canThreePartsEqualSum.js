/*
Given an array A of integers, return true if and only if we can partition the array 
into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] 
+ ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

Example 1:
Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1*/
/**
 * @param {number[]} A
 * @return {boolean}
 */
var A = [10, -10, 10, -10, 10, -10, 10, -10];//[0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1];//[0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
var canThreePartsEqualSum = function (A) { // 1013
    let value = A.reduce((a, b) => a + b, 0) / 3;
    if (value % 1 != 0) return false;
    let count = 0;
    let currentSum = 0;
    for (var num of A) {
      currentSum += num;
      if (currentSum === value) {
        currentSum = 0;
        count++;
      }
    }
    return count === 3;
};

console.log(canThreePartsEqualSum(A));