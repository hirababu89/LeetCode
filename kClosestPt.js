function closest() {
  var points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ];
  var K = 2;
  var op = new Array();
  var seq = [];
  for (let i = 0; i < points.length; i++) {
    var num1 = points[i][0] * points[i][0];

    var num2 = points[i][1] * points[i][1];

    var val = Math.sqrt(num1 + num2);

    seq.push({ key: i, value: val });
  }
  //console.log(seq);
  seq.sort(function (a, b) {
    return a.value - b.value;
  });
  //console.log(seq);
  var d = 0;
  while (d < K) {
    var obj = seq[d].key;
    op.push(points[obj]);
    console.log('op :', op);
    d++;
  }
}

console.log(closest());
