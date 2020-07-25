function sparseMatrix() {
  var A = [
    [1, 0, 0],
    [-1, 0, 3],
  ];

  var B = [
    [7, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];

  var AB = [];
  var temp = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      var y = 0;
      for (let k = 0; k < A[i].length; k++) {
        var x = A[i][k] * B[k][j];
        y += x;
      }
      if (!isNaN(y)) temp.push(y);
    }
  }
  AB.push(temp);
  return AB;
}

console.log(sparseMatrix());
