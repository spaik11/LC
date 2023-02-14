/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const partner = target - nums[i];

        if (partner in hash) {
            return [hash[partner], i];
        }
        hash[nums[i]] = i;
    }
};