/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.
Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
Example 1:
Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
*/
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  // 1021
  var st = [];
  var ret = [];
  var toBeRemoved = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] == '(') {
      st.push(i);
    } else if (S[i] == ')' && st.length > 1) {
      st.pop();
    } else if (S[i] == ')' && st.length == 1) {
      toBeRemoved.push(st.pop());
      toBeRemoved.push(i);
    }
  }
  for (let i = 0; i < S.length; i++) {
    if (!toBeRemoved.includes(i)) {
      ret.push(S[i]);
    }
  }
  return ret.join('');
};

console.log(removeOuterParentheses());
