/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var nums = [1, 3, 5, 6], target = 7;
var searchInsert = function(nums, target) { // 35
    if (nums.length == 1) {
      if (nums[0] > target || nums[0] == target) return 0;
      else if (nums[0] < target) return nums.length;
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (target > nums[i]) {
          continue;
        } else if (target < nums[i]) {
          return i;
        } else if (nums[i] == target) {
          return i;
        }
      }
      return nums.length;
    }
};

console.log(searchInsert(nums, target));