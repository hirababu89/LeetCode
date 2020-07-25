function ransom() {
  // 383
  var ransomNote = 'a',
    magazine = '';
  var ret = false;
  var idx = 0;
  if (ransomNote.length <= magazine.length) {
    for (let i = 0; i < ransomNote.length; i++) {
      if (!magazine.includes(ransomNote[i])) return ret;

      magazine = magazine.split('');
      var newIdx = magazine.indexOf(ransomNote[i]); //, idx 
      if (newIdx !== -1) {
        idx = newIdx;
        var tmp = magazine.splice(idx, 1);
      } else {
        return false;
      }
      magazine = magazine.join('');
    }
    ret = true;
  }

  return ret;
}
console.log(ransom());
