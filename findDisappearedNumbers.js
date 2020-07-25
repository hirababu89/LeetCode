/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.
Find all the elements of [1, n] inclusive that do not appear in this array.
Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
Example:
Input:
[4,3,2,7,8,2,3,1]
Output:
[5,6]*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var findDisappearedNumbers = function (nums) {
  // 448
  //nums = nums.sort();
    var result = [];
    
    for (var i = 1; i < nums.length + 1; i++) {
      if (nums.indexOf(i) === -1) res.push(i);
    }
    
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1] || nums[i] + 1 === nums[i + 1]) {
//       continue;
//     } else {
//       var diff = Math.abs(nums[i + 1] - nums[i]);
//       if (diff > 1) {
//         for (let j = nums[i] + 1; j < nums[i + 1]; j++) {
//           result.push(j);
//         }
//       } else {
//         result.push(nums[i] + 1);
//       }
//     }
//     }
   //////////////////////////////////////////////
  // for (let i = 1; i <= nums.length; i++) {
  //     if (!nums.includes(i)) result.push(i);
  // }
  return result;
};

console.log(findDisappearedNumbers(nums));
