//Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

//Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
// s = "dddccdbba"
// return 8;

function firstUniqChar() {
  // 387
  let s = 'dddccdbba';
  let map = new Map();
  if (s.length <= 0) return -1;
  var ret = -1;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == undefined) {
      map.set(s[i], 1);
    } else {
      var val = map.get(s[i]);
      map.set(s[i], val + 1);
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return ret;
}

console.log(firstUniqChar());

//https://youtu.be/5co5Gvp_-S0
