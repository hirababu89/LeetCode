//Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

//Words in the list of banned words are given in lowercase, and free of punctuation.Words in the paragraph are not case sensitive.The answer is in lowercase.

// Example:

// Input:
// paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
// banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

function mostCommonWord() {
  // 819
  var paragraph = 'a.'; //'Bob hit a ball, the hit BALL flew far after it was hit.';
  var banned = [];
  let bannedWords = new Set();
  for (const word of banned) {
    bannedWords.add(word);
  }

  paragraph = paragraph
    .replace(/[^a-zA-Z]/gi, ' ')
    .toLowerCase()
    .split(' ');

  var count = new Map();
  for (const word of paragraph) {
    if (!bannedWords.has(word) && word !== '') {
      if (count.has(word)) {
        count.set(word, count.get(word) + 1);
      } else {
        count.set(word, 1);
      }
    }
  }

  return new Map([...count.entries()].sort((a, b) => b[1] - a[1])).keys().next()
    .value;
}

console.log(mostCommonWord());
