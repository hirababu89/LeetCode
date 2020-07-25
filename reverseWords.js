/*
Given an input string, reverse the string word by word.
Example 1:
Input: "the sky is blue"
Output: "blue is sky the"*/
/**
 * @param {string} s
 * @return {string}
 */
var s = 'a good   example';
var reverseWords = function (s) { // 151
    var ret = [];
    s = s.split(' ');
    for (let i = s.length -1 ; i >= 0; i--) {           
        if (s[i] !== '') {
            ret.push(s[i]);
        }
    }      
    return ret.join(' ');
};

console.log(reverseWords(s));