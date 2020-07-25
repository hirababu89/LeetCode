function dailyTemp() {
    var T = [73, 74, 75, 71, 69, 72, 76, 73];
    var ret = new Array(T.length).fill(0);
    lop:
    for (let i = 0; i < T.length; i++) {
        if (T[i] < T[i+1]) {
            ret[i] = 1;
        } else {
            for (let j = i + 1; j < T.length; j++){
                if (T[i] < T[j]) {
                    ret[i] = j - i;
                    continue lop;
                }
            }
        }        
    }
    return ret;
}

console.log(dailyTemp());