function calculateTime() {
  // 1165
    var keyboard = 'pqrstuvwxyzabcdefghijklmno';//'abcdefghijklmnopqrstuvwxyz',
    var word = 'leetcode';//'cba';
    var total = 0, idx = 0, prevIdx = 0;
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < keyboard.length; j++) {
          if (word[i] == keyboard[j]) {
              idx = j;
              prevIdx = keyboard.indexOf(word[i - 1]);
              if (total == 0) total += idx;
              else total += Math.abs(prevIdx - idx);
          }          
      }
    }
    return total;
}

console.log(calculateTime());
