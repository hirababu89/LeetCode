/*
Given a 32-bit signed integer, reverse digits of an integer.
Example 1:
Input: 123
Output: 321
Example 2:
Input: -123
Output: -321
Example 3:
Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit
 signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your 
 function returns 0 when the reversed integer overflows.*/
/**
 * @param {number} x
 * @return {number}
 */
var x = -2147483648;//-120;
var reverse = function (x) {
  // 7
  if (x < 0) var neg = true;
  var arr = ('' + x).split('').map(Number);
  var ret = [],
    j = 0;
  if (neg) {
    ret.push('-');
    j = 1;
  }
    while (arr[arr.length - 1] === 0) {
      arr.splice(arr.length - 1, 1);
  }
  for (i = j; i < arr.length; i++) {
    ret[arr.length - i] = arr[i];
  }
  
    ret = ret.join('');
        
    if (parseInt(ret) > Math.pow(2, 31) || Math.pow(-2, 31) > parseInt(ret)) return 0;
    else return ret;
};

console.log(reverse(x));
