/*
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.
Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
Note:
You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
*/
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (words, word1, word2) {
  // 243
  var a = [],
    b = [];
  var min = Number.MAX_SAFE_INTEGER;

  words.forEach((word, index) => (word == word1 ? a.push(index) : null));
  words.forEach((word, index) => (word == word2 ? b.push(index) : null));
  console.log(a, b);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (Math.abs(a[i] - b[j]) < min) min = Math.abs(a[i] - b[j]);
    }
  }
  return min;
};

console.log(shortestDistance());
