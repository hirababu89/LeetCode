// Given a string S, return the "reversed" string where all characters that are
// not a letter stay in the same place, and all letters reverse their positions.
// Example 1:
// Input: "ab-cd"
// Output: "dc-ba"
function reverse() { // 917
    var S = '?6C40E';//'Test1ng-Leet=code-Q!';
    var charArr = [];
    var ret = [];
    var j = 0;
    for (let i = 0; i < S.length; i++) {
        var val = S[i].charCodeAt();
        if (
          (val >= 65 && val <= 90) ||
          (val >= 97 && val <= 122)
        ) {
          charArr[j] = S[i];
          j++;
          ret[i] = 0;
        } else {
          ret[i] = S[i];
        }
    }
    var j = 0
    for (let i = ret.length; i >= 0; i--) {
        if (ret[i] === 0) {
            ret[i] = charArr[j];
            j++;
        }        
    }
    return ret.join('');
}

console.log(reverse());