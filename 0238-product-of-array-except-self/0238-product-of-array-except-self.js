/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    let idx = 0
    while (idx < nums.length) { 
        let total = 1;
        for (let i = 0; i < nums.length; i++) {
            if (idx !== i) {
                total *= nums[i];
            }
        };
        result.push(total);
        idx++;
    }
    
    return result;
};