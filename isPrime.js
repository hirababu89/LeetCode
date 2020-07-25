function isPrime() {
    var arr = [];
  for (var i = 2; i <= 100; i++) {
    var isPrime = false;
    
    for (var j = 2; j < i; j++) {
      if (i % j === 0 && i !== j) {
        isPrime = true;
      }
    }
    if (isPrime === false) {
      arr.push(i);
    }
  }
  return arr;
}

console.log(isPrime());
