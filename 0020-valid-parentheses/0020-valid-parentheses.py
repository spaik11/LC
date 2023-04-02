class Solution:
    def isValid(self, s: str) -> bool:
        bracketDict = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        stack = []
        
        for bracket in s:
            if bracket in bracketDict:
                if len(stack) > 0 and stack[-1] == bracketDict[bracket]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(bracket)
                
        return True if not stack else False