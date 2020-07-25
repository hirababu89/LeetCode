/*
Given an integer array, find three numbers whose product is maximum and output the maximum product.
Example 1:
Input: [1,2,3]
Output: 6

Example 2:
Input: [1,2,3,4]
Output: 24

Note:

The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [-8, -7, -6, 1, 2];
var maximumProduct = function (nums) { // 628
  let sorted = nums.sort((a, b) => a - b),
    len = nums.length;
  let res1 = sorted[0] * sorted[1] * sorted[len - 1],
    res2 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  return Math.max(res1, res2);
};

console.log(maximumProduct(nums));
