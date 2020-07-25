var arr = [1, 0, 2, 3, 0, 4, 5, 0];
function dupZero() {    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i += 1;
            // var temp = arr.splice(i + 1, arr.length - i - 1);//, arr.length - 2 - i);
            // temp.pop();
            // arr[i + 1] = 0;
            // arr = arr.concat(temp);
            // i++;
        }
    }
    console.log(arr);
}

console.log(dupZero());