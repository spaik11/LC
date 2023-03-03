/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1,
          right = nums.length - 1;

        while (left < right) {
          if (nums[i] + nums[left] + nums[right] === 0) {
            result.push([nums[i], nums[left], nums[right]]);
            left++;
            while (nums[left] === nums[left - 1] && left < right) {
              left++;
            }
          } else if (nums[i] + nums[left] + nums[right] > 0) {
            right--;
          } else {
            left++;
          }
        }
    }

    return result;
};