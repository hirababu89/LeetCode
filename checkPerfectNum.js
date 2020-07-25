function checkPerfectNum() {
    var num = 28;
    var ret = 0;
    if (num == 0) return false;
    for (let i = 1; i <= num/2; i++) {
        if (num % i == 0) {            
            ret += i;
        }   
    }
    if (ret === num) {
        return true;
    } else {
        return false;
    }
}

console.log(checkPerfectNum());