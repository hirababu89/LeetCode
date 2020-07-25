/*Given a non-empty array of integers, return the third maximum number in this array. 
If it does not exist, return the maximum number. The time complexity must be in O(n).
Example 1:
Input: [3, 2, 1]
Output: 1
Explanation: The third maximum is 1.*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [3, 2, 1];
var thirdMax = function(nums) { // 414
    let arr = Array.from(new Set(nums));
    if (arr.length < 3) return Math.max(...arr);
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    return Math.max(...arr);
};
console.log(thirdMax(nums));