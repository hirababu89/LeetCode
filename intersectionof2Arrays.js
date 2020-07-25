function sln() {
  var nums1 = [1, 2, 2, 1];
  var nums2 = [2, 2];
  var ret = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        ret.push(nums1[i]);
      }
    }
  }

  var res = new Set(ret);
  var ar = Array.from(res);
  return ar;
}

console.log(sln());
