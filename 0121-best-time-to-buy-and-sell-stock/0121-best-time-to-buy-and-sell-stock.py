class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        left, right = 0, 1
        maxProfit = 0
        
        while right < len(prices):
            currentProfit = prices[right] - prices[left]
            if prices[left] > prices[right]:
                left = right
            else:
                maxProfit = max(currentProfit, maxProfit)
            right += 1
        
        return maxProfit