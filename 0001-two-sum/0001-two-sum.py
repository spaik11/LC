class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        
        for i, num in enumerate(nums):
            partner = target - num
            if partner in dict:
                return [i, dict[partner]]
            
            dict[num] = i