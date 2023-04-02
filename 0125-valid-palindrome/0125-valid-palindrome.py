class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()

        str1=''
        for i in s:
            if i.isalnum():
                str1=str1+i
                
        p=str1.strip()

        if p==p[::-1]:
            return True
        else:
            return False