function highFive() {
  // 1086
  var items = [
    [1, 91],
    [1, 92],
    [2, 93],
    [2, 97],
    [1, 60],
    [2, 77],
    [1, 65],
    [1, 87],
    [1, 100],
    [2, 100],
    [2, 76]
    ];
    var ret = [[0, 0]];
    var res = [];
  for (let i = 0; i < items.length; i++) {
      if (ret[items[i][0]] == undefined) {
          ret[items[i][0]] = new Array();
          ret[items[i][0]].push(items[i][1]);
      }
      else {
          ret[items[i][0]].push(items[i][1]);
          ret[items[i][0]].sort(function (a, b) {
            return b - a;
          });
      }
    }

    delete ret[0];
    
    for (let i = 1; i < ret.length; i++) {
        var val = ret[i].slice(0,5).reduce((a,b) => a + b, 0);
        res.push([i, Math.floor(val/5)]);
    }
    
    return res;
}

console.log(highFive());
