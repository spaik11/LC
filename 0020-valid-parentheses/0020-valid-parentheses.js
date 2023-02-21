/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack = [];
    
    for (const item of s) {
        if (item in map) {
            if (stack.length > 0 && stack[stack.length - 1] === map[item]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(item);
        }
    }
    return stack.length === 0;
};
