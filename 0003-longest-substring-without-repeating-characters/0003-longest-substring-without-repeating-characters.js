/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let result = 0;
    const hash = new Set();
    
    for (let right = 0; right < s.length; right++) {
        while (hash.has(s[right])) {
            hash.delete(s[left]);
            left++;
        }
        hash.add(s[right]);
        
        if (right - left + 1 > result) {
            result = right - left + 1;
        }
    }
    
    return result;
};