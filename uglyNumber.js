function uglyNumber()
{
    var num = 14;
    while (num > 1) {
      if (num % 2 === 0) {
        num = (num / 2) | 0;
      } else if (num % 3 === 0) {
        num = (num / 3) | 0;
      } else if (num % 5 === 0) {
        num = (num / 5) | 0;
      } else {
        break;
      }
    }
    return num === 1;
}

console.log(uglyNumber());