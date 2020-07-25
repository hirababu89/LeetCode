var head = {
  value: 4,
  next: {
    value: 1,
    next: {
      value: 4,
      next: {
        value: 6,
        next: {
          value: 1,
          next: {
            value: 6,
            next: {
              value: 8,
              next: {
                value: 2,
                next: {
                  value: 10,
                  next: {
                    value: 2,
                    next: {
                      value: 8,
                      next: {
                        value: 10                        
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

// var head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2,  n = 3;
//var head = [4,6,8,2], 
var m = 1, n = 2;

 var deleteNodes = function (head, m, n) {
//     for (var i = 1; m * i < head.length; i++) {
//       head.splice(m * i, n);
//     }
//     return head;
  var lastActive = head,
        navigator = head,
    i;
    
  for (i = 1; navigator.next !== undefined && navigator.next !== null; i++) {
    if (i === m) {
      lastActive = navigator;
    }
    navigator = navigator.next;
    if (i === m + n) {
      lastActive.next = navigator;
      i = 0; // ini to 0 since i++ next loop
    }
    }
    if (i > m && i <= m+n) {
        lastActive.next = null;
    }
    
  return head;
};

console.log(JSON.stringify(deleteNodes(head, m, n)));
