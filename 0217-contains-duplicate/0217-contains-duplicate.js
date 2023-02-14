/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hash = {};

    for (const num of nums) {
        if (hash.hasOwnProperty(num)) {
            return true;
        }
        hash[num] = 0;
    }
    return false;
};