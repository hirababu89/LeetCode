function sln() {
  var root = [10, 5, 15, 3, 7, null, 18];
  var L = 7;
  var R = 15;
  var ret = 0;
  for (let index = 0; index < root.length; index++) {
    if (root[index] >= L && root[index] <= R) {
      ret += root[index];
    }
  }
  console.log(ret);
}

console.log(sln());
