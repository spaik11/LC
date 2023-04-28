class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l, r = 0, 1
        maxProfit = 0
        
        while r < len(prices):
            currProfit = prices[r] - prices[l]
            if prices[l] > prices[r]:
                l = r
            else:
                maxProfit = max(currProfit, maxProfit)
            r += 1
            
        return maxProfit