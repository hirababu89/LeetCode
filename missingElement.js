function missingElement() {
  var nums = [4, 7, 9, 10];
  var k = 3;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] - nums[i - 1] > 1) {
        let diff = nums[i] - nums[i - 1] - 1;
        if (diff >= k) {
          return nums[i - 1] + k;
        } else {
          k -= diff;
        }
      }
    }
    if (k > 1) return nums[nums.length - 1] + k;  
}

console.log(missingElement());
