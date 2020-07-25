/*
Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

Example 1:

Input: name = "alex", typed = "aaleex"
Output: true
Explanation: 'a' and 'e' in 'alex' were long pressed.
Example 2:

Input: name = "saeed", typed = "ssaaedd"
Output: false
Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.
Example 3:

Input: name = "leelee", typed = "lleeelee"
Output: true
Example 4:

Input: name = "laiden", typed = "laiden"
Output: true
Explanation: It's not necessary to long press any character.*/
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var name = 'saeed',
  typed = 'ssaaedd';
var isLongPressedName = function (name, typed) {
  // 925
    var type = typed.split('');
    var same = true;
    var i = 0,
      j = 0;
    while (i < name.length || j < typed.length) {
      if (name[i] == type[j]) {
        i++;
        //type.splice(j,1);
        j++;
      } else if (type[j - 1] == type[j]) {
        j++;
      } else return false;
    }
    return same;
  
};

console.log(isLongPressedName(name, typed));
