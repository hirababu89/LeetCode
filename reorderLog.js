function reorderLog() {
  // 937
    var logs = ['7 96', 'd 0 5', 'r 439', '1 bw', '6 dkf'];
//   var logs = [
//     'a1 9 2 3 1',
//     'g1 act car',
//     'zo4 4 7',
//     'ab1 off key dog',
//     'a8 act zoo',
//     'a2 act car',
//   ];
  // var arr = [
  //   'dig1 8 1 5 1',
  //   'let1 art can',
  //   'dig2 3 6',
  //   'let2 own kit dig',
  //   'let3 art zero',
  // ];

    var customSort = function (a, b) {
        var isANum = !isNaN(parseInt(a.split(' ')[1])),
            isBNum = !isNaN(parseInt(b.split(' ')[1]));
        
        if (isANum && isBNum) return 0;
        if (!isANum && !isBNum) {
            var comp =  a
              .substring(a.indexOf(' '))
                .localeCompare(b.substring(b.indexOf(' ')));
            
            if (comp === 0) return a.localeCompare(b);
            return comp;
            // -1 less , +1 greater, 0 equal
        }
        if (isANum) return 1;
        else return -1;
    }
    console.log(logs);
    return logs.sort(customSort);    
  };

console.log(reorderLog());
