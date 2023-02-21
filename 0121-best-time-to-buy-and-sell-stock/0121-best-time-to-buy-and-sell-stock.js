/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let left = 0;
    let right = 1;
    
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const currentProfit = prices[right] - prices[left];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
            }
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};