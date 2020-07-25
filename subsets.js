/*
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var nums = [1, 2, 3];
var subsets = function (nums) {
  // 78
   res = [];
   subsetsRec([], nums);
   return res;
};

function subsetsRec(arr, nums) {
  res.push(
    arr.sort(function (a, b) {
      return a - b;
    })
  );
  if (nums.length !== 0) {
    for (var i = 0; i < nums.length; i++)
      subsetsRec(arr.concat(nums[i]), nums.slice(i + 1, nums.length));
  }
}

console.log(subsets(nums));
