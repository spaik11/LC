class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        
        for i in range(len(nums)):
            partner = target - nums[i]
            if partner in dict:
                return [i, dict[partner]]

            dict[nums[i]] = i
            