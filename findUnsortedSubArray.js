/*
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.
You need to find the shortest such subarray and output its length.
Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */

var findUnsortedSubarray = function (nums) {
  // 581
  var nums = [1, 3, 2, 2, 2]; //[2, 6, 4, 8, 10, 9, 15];
  var nums1 = nums.slice();
  nums1.sort((a, b) => {
    return a - b;
  });
  var ret = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums1[i]) {
      ret.push(i);
    }
  }
  if (ret.length == 0) return 0;
  return ret[ret.length - 1] - ret[0] + 1;
};

console.log(findUnsortedSubarray());
