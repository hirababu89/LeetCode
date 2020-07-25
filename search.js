function search() {
    var nums = [4, 5, 6, 7, 0, 1, 2];
    var target = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            return i;
        }            
    }
    return -1;
}

console.log(search());