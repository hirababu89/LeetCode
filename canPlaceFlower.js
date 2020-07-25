// Suppose you have a long flowerbed in which some of the plots are planted and some are not.
//     However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.

// Given a flowerbed(represented as an array containing 0 and 1, where 0 means empty and 1 means not empty),
//     and a number n, return if n new flowers can be planted in it without violating the no - adjacent - flowers rule.

// Example 1:
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: True
let flowerbed = [1, 0, 0, 0, 0,0, 1],
  n = 2;
function canPlaceFlower() {
    if (n === 0) return true;
    let planted = 0;
    for (let i = 0; i < flowerbed.length; i++) {
      if (flowerbed[i] == 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
        planted++;
        flowerbed[i] = 1;
      }
    }
    return planted >= n;
    // if (n === 0) return false;
    // for (let i = 0; i < flowerbed.length;) {
    //     if (flowerbed[i] == 0 && flowerbed[i + 1] === 0) {
    //         flowerbed[i] = 1;
    //     } 
    //       if (flowerbed[i] === 1) {
    //         i += 2;
    //         if (i > flowerbed.length && n !== 0) {
    //           return false;
    //         }

    //         if (flowerbed[i] !== 1 && flowerbed[i + 1] !== 1) {
    //           flowerbed[i] = 1;
    //           n--;
    //         }
    //       } else {
    //         i++;
    //       }

    //     if (n == 0) {
    //       return true;
    //     } 
    // }
    // return false;
}

console.log(canPlaceFlower());