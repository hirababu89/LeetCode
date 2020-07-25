function happyNum() {
     historyObj = {};
     n = n + '';
     while (historyObj[n] === undefined && n !== 1) {
       historyObj[n] = true;
       sum = 0;
       console.log(n);
       for (i = 0; i < n.length; i++) {
         sum += Math.pow(parseInt(n.substring(i, i + 1)), 2);
       }
       n = sum + '';
     }
     return n === '1';
//   var n = 19;
//     while (n != 1) {
//         if (n.toString().length > 1) {
//             var arr = Array.from(n.toString()).map(Number);
//             var sum = 0;
//             for (let i = 0; i < arr.length; i++) {
//                 sum += arr[i] * arr[i];                
//             }
//             n = sum;
//       }      
//     }
//     return true;
}

console.log(happyNum());
