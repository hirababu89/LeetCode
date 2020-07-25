// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai).
// n vertical lines are drawn such that the two endpoints of line i is at(i, ai) and(i, 0).Find two lines,
//     which together with x - axis forms a container, such that the container contains the most water.

// Note: You may not slant the container and n is at least 2.
function maxArea() {
  // 11
    var height = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];//[1, 8, 6, 2, 5, 4, 8, 3, 7];
  var area = 0;

  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j <= height.length - 1; j++) {
      var len = j - i;
      var bre = height[i] > height[j] ? height[j] : height[i];
      var newArea = len * bre;
      if (newArea > area) {
        area = newArea;
      }
    }
  }

  return area;
}

console.log(maxArea());
