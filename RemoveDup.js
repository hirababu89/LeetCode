function removeDup() { // 26
    var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];//[1, 1, 2];
    var ret = [];
    for (let i = 0; i < nums.length; i++) {        
        if (ret.includes(nums[i])) {
            nums.splice(i, 1);
            i--;
        } else {
            ret.push(nums[i]);
        }        
    }

    return nums.length;
}

console.log(removeDup());