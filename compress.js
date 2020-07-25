function compress() {
  var chars = ['a', 'a', 'a', 'b', 'b', 'a', 'a']; //[('a', 'a', 'b', 'b', 'c', 'c', 'c')]; //['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
  var newArr = [];
  var count = 1;
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] !== chars[i + 1]) {
      newArr.push(chars[i]);
      count += '';
      count !== '1' &&
        [].push.apply(newArr, count.length >= 2 ? count.split('') : [count]);
      count = 1;
    } else {
      count++;
    }
  }
  chars.splice(0);
  [].push.apply(chars, newArr);
  return chars.length;
}

console.log(compress());
//   var ret = [];
//   var counter = {};
//   if (chars.length == 1) return 1;
//   for (let i = 0; i < chars.length; i++) {
//     if (counter[chars[i]] == undefined) {
//       counter[chars[i]] = 1;
//     } else {
//       counter[chars[i]]++;
//     }
//   }

//     for (let [key, value] of Object.entries(counter)) {
//         if (value == 1) {
//             ret.push(key);
//         } else if (value > 1 && value < 10) {
//             ret.push(key);
//             ret.push(value.toString());
//         } else if (value > 9 && value < 100) {
//             ret.push(key);
//             console.log(Array.from(value.toString()).map(Number));
//             var newArr = Array.from(value.toString()).map(Number).map(String);
//             //ret.concat(newArr);
//             Array.prototype.push.apply(ret, newArr);
//         }
//   }

// for (let [key, value] of Object.entries(counter)) {
//     if (value == 1) {
//         ret++;
//     }
//     else if (value > 1 && value < 10) {
//         ret += 2;
//     }
//     else if (value > 9 && value < 100) {
//         ret += 3;
//     } else {
//         ret += 4;
//     }
// }
//     chars = ret;
//   return chars;
