/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
     let left = 0,
    right = height.length - 1,
    largestArea = 0;

  while (left < right) {
    const wallHeight = Math.min(height[right], height[left]);
    largestArea = Math.max(wallHeight * (right - left), largestArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return largestArea;
};