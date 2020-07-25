function runningSum() {
    var nums = [1, 2, 3, 4];
    var sum = 0;
    for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            nums[i] = sum;
    }
    return nums;
}

console.log(runningSum());