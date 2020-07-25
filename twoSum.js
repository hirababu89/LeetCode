/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
Note:
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var numbers = [2, 3, 4], //[2, 7, 11, 15],
  target = 6; //9;
var twoSum = function () {
  // 167
  var arr = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i < j) {
        if (numbers[i] + numbers[j] === target) {
          arr.push(i + 1);
          arr.push(j + 1);
        }
      }
    }
  }
  return arr;
};

console.log(twoSum());
