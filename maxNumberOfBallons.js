/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:

Input: text = "nlaebolko"
Output: 1
Example 2:

Input: text = "loonbalxballpoon"
Output: 2
Example 3:

Input: text = "leetcode"
Output: 0*/
/**
 * @param {string} text
 * @return {number}
 */
var text = 'loonbalxballpoon';
var maxNumberOfBalloons = function(text) { // 1189
     let found = 0;
     let allLetters = [0, 0, 0, 0, 0]; // b=1 a=1 l=2 o=2 n=1

     for (let i = 0; i < text.length; i++) {
       const curr = text[i];
       if (curr === 'b') {
         allLetters[0] += 1;
       }

       if (curr === 'a') {
         allLetters[1] += 1;
       }

       if (curr === 'l') {
         allLetters[2] += 1;
       }

       if (curr === 'o') {
         allLetters[3] += 1;
       }

       if (curr === 'n') {
         allLetters[4] += 1;
       }
     }

     allLetters[2] = Math.floor(allLetters[2] / 2);
     allLetters[3] = Math.floor(allLetters[3] / 2);

     return Math.min(...allLetters);
};

console.log(maxNumberOfBalloons(text));