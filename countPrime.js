function countPrime() {
    var n = 3;
    if (n <= 1) return 0; // 1 is not a prime number

    var isPrime = [],
      count = 0;

    for (var i = 2; i < n; i++) {
      if (isPrime[i] == undefined) {
        // cannot use !isPrime[i] (isPrime[i] == false) has to be undefined
        isPrime[i] = true;
        count++;
        for (var j = 2; j * i < n; j++) {
          // mark the prime's multiples as nonprime
          isPrime[i * j] = false;
        }
      }
    }

    return count;
}

console.log(countPrime());