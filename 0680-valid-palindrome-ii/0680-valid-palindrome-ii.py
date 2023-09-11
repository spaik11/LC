class Solution:
    def helper(self,s,p1,p2) :
        while p1 < p2 :
            if s[p1] != s[p2]:
                return False
            
            p1 += 1
            p2 -= 1
        
        return True
    
    def validPalindrome(self, s: str) -> bool:
        l, r = 0, len(s) - 1
        
        while l < r:
            if s[l] != s[r]:
                return (self.helper(s, l + 1 ,r) or self.helper(s, l, r - 1))
            
            l, r = l + 1, r - 1
            
        return True