// You are given a char array representing tasks CPU need to do. It contains capital letters A to Z where
//each letter represents a different task.Tasks could be done without the original order of the array.
//Each task is done in one unit of time.For each unit of time, the CPU could complete either one task or just be idle.
// However, there is a non-negative integer n that represents the cooldown period between two same 
// tasks(the same letter in the array), that is that there must be at least n units of time between any two same tasks.
// You need to return the least number of units of times that the CPU will take to finish all the given tasks.
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: 
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// https://www.youtube.com/watch?v=eGf-26OTI-A
// https://www.youtube.com/watch?v=ySTQCRya6B0
function task() { //621
    var tasks = ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], n = 2;
    //['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E'], n = 4;
    //['A', 'A', 'A', 'B', 'B', 'B'], n = 2;
    var arr = [];
    for (let i = 0; i < tasks.length; i++) {
        var val = tasks[i].charCodeAt() - 'A'.charCodeAt();
        if (arr[val] === undefined) {
          arr[val] = 1;
        } else {
          arr[val]++;
        }        
    }

    arr.sort();
    var maxVal = arr[arr.length - 1] - 1;
    var idleSlots = maxVal * n;

    for (let i = arr.length - 2; i>=0; i--) {
        idleSlots -= Math.min(arr[i], maxVal);        
    }
    return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
}

console.log(task());

/*
My Approach
var map = new Map();
    tasks.forEach(element => {
        if (map.get(element) === undefined) {
            map.set(element, 1);
        } else {
            var val = map.get(element);
            map.set(element, val + 1);
        }
    });

    var count = 0, idle = 0;
    while (true) {
        var wait = n + 1;

        [...map.entries()].sort((a, b) =>  b[1] - a[1]).every(function (e)  {
            console.log(e);
            if (wait === 0) return;
            if (map[e.key] === 0) continue;
            map[e.key] -= 1;
            wait--;
            count++;
        });

        if (count == tasks.length) break;
        idle += wait;
    }

    return count + idle;
    */