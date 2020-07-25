/*
Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. 
Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.
Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var nums = [1, 1, 1, 2, 1];//[1, 3, 1, 5, 4];//[3, 1, 4, 1, 5],
var k = 1;//0;//2;
var findPairs = function (nums, k) {
    // check c# solution

    
    // var count = 0, arr = [], tup = [];
    // nums.sort();
    // if (k > 0) {
    //     arr = Array.from(new Set(nums));
    // } else {
    //     arr = nums;
    // }
    
    // //console.log(nums, arr);
    // for (let i = 0; i < arr.length -1 ; i++) {
    //     for (let j = i + 1; j < arr.length; j++) {
    //         var key = '(' + arr[i]+ ',' + arr[j] + ')';
    //         if (Math.abs(arr[j] - arr[i]) == k && tup[key] == undefined) {
    //           count++;              
    //           tup[key] = 1;
    //         }     
    //   }
    // }
    // return count;
};

console.log(findPairs(nums, k));