/*
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
Note that after backspacing an empty text, the text will continue empty.
Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
*/
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var S = 'ab#c',
  T = 'ad#c';
var backspaceCompare = function (S, T) {
  // 844
  var sArr = [], tArr = [];

    for (var i = 0; i < S.length; i++) {
        if (S[i] === '#') {
            sArr.pop();
        } else {
            sArr.push(S[i]);
      }
    }
    
    for (var i = 0; i < T.length; i++) {
      if (T[i] === '#') {
        tArr.pop();
      } else {
        tArr.push(T[i]);
      }
    }

    if ((sArr.join('')).localeCompare(tArr.join('')) === 0 ) {
        return true;
    } else {
        return false;
    }
};

console.log(backspaceCompare(S, T));
