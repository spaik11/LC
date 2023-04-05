class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sHash = {}
        for c in s:
            sHash[c] = 1 + sHash.get(c, 0)
        
        tHash = {}
        for c in t:
            tHash[c] = 1 + tHash.get(c, 0)
        
        return sHash == tHash