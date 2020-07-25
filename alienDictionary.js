// In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.
// Example 1:
// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

function alien() {
  var words = ['word', 'world', 'row'];
  var order = 'worldabcefghijkmnpqstuvxyz';
  var alphabet = new Array(26);
  for (let i = 0; i < order.length; i++) {
    alphabet[order.charCodeAt(i) - 'a'] = i;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; i++) {
      var min = Math.min(words[i].length(), words[j].length());
      for (let k = 0; k < min.length; k++) {
        var iChar = words[i].charAt(k);
        var jChar = words[j].charAt(k);
        if (alphabet[iChar - 'a'] < alphabet[jChar - 'a']) {
          break;
        } else if (alphabet[jChar - 'a'] < alphabet[iChar - 'a']) {
          return false;
        } else if (k == min - 1 && words[i].length() > words[j].length()) {
          return false;
        }
      }
    }
    return true;
  }
  //   search: for (let i = 0; i < words.length - 1; i++) {
  //     var str1 = words[i];
  //     var str2 = words[i + 1];
  //     var j = 0;
  //     while (j < str1.length || j < str2.length) {
  //       if (str1[j] != str2[j]) {
  //         var idx1 = order.indexOf(str1[j]);
  //         var idx2 = order.indexOf(str2[j]);
  //         if (idx1 > idx2) {
  //           return false;
  //         } else {
  //           continue search;
  //         }
  //       } else {
  //         j++;
  //       }
  //     }
  //   }
  //   return true;
}

console.log(alien());
