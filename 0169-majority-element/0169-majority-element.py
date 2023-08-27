class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        hashM = {}
        
        for n in nums:
            hashM[n] = hashM.get(n, 0) + 1
            
        return max(hashM, key=hashM.get)