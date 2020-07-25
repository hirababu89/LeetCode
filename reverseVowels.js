/*
Write a function that takes a string as input and reverse only the vowels of a string.
Example 1:
Input: "hello"
Output: "holle"
Example 2:
Input: "leetcode"
Output: "leotcede"*/
/**
 * @param {string} s
 * @return {string}
 */
var s = 'leetcode';
var reverseVowels = function (s) {
  // 345
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  var vowArr = [];
  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    //if (vowels.includes(s[i])) {
    if (vowels.indexOf(s[i]) != -1) {
      // compare each element in array instead
      vowArr.push(s[i]);
      s[i] = '*';
    }
  }
  var j = 0;
  for (let i = s.length - 1; i > 0; i++) {
    if (s[i] == '*') {
      s[i] = vowArr[j];
      j++;
    }
  }
  s = s.join('');
  return s;
};

console.log(reverseVowels(s));
