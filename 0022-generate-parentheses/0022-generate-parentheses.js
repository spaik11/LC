/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    
    const backtrack = (openN, closedN, stack) => {
        if (openN === closedN && openN && closedN === n) {
            result.push(stack);
            return;
        }
        
        if (openN < n) {
            backtrack(openN + 1, closedN, stack + ['(']);
        }
        
        if (closedN < openN) {
            backtrack(openN, closedN + 1, stack + [')']);
        }
    }
    backtrack(0, 0, []);
    return result;
};