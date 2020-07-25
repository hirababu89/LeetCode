function sln() {
  var A = [1, 3, 2];
  var len = A.length;
  if (A[0] < A[len - 1]) {
    // monotonic increasing
    for (let i = 1; i < len; i++) {
      if (A[i] < A[i - 1]) {
        return false;
      }
    }
  } else {
    // monotonic decreasing
    for (let j = 1; j < len; j++) {
      if (A[j] > A[j - 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(sln());
