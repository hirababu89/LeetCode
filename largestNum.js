function largest() {
  var nums = [3, 30, 34, 5, 9];

  if (nums.join('') == 0) return '0';
  let res = nums.map((val) => val + '');
  res.sort((a, b) => (b + a) - (a + b));
  return res.join('');

  // nums = nums.sort(function (a, b) {
  //   return a - b;
  // });
  // console.log(nums);
  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] % 9 == 0 && nums[i].toString().search(9) > 0) {
  //     }
  // }
}

console.log(largest());
