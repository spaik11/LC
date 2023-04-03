class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagramDict = {}
        
        for str in strs:
            anagramKey = ''.join(sorted(str))

            if anagramKey in anagramDict:
                anagramDict[anagramKey].append(str)
            else:
                anagramDict[anagramKey] = [str]
                
        return list(anagramDict.values())