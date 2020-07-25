/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var maxSubArray = function (nums) {
  // 53
  var max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    var sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) max = sum;
    }
  }
  return max;
};

console.log(maxSubArray(nums));
