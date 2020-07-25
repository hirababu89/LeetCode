/*
Given an array of integers A, return the largest integer that only occurs once.
If no integer occurs once, return -1.
Example 1:
Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: 
The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.
Example 2:
Input: [9,9,8,8]
Output: -1
Explanation: 
There is no number that occurs only once.*/
/**
 * @param {number[]} A
 * @return {number}
 */
var A = [9, 9, 8, 8];//[5, 7, 3, 9, 4, 9, 8, 3, 1];
var largestUniqueNumber = function (A) { // 1133
    var num;
    A.sort((a, b) => {
        return b - a;
    });
    
    for (let i = 0; i < A.length; i++) {
        if(getNum(A[i]) == 1) {
            num = A[i];
            break;
        }
    }

    return num === undefined ? -1 : num; 
};

function getNum(a) {
    return A.filter((i) => i == a).length;
}

console.log(largestUniqueNumber(A));