class Solution:
    def numUniqueEmails(self, emails: List[str]) -> int:
        unique = set()
        
        # split at @
        # if left side includes . or +, calculate and put it in hash map
        
        # then check right side and see if its the same?
        
        for e in emails:
            local, domain = e.split("@")
            local = local.split("+")[0].replace(".", "")
            email = local + "@" + domain
            print(email)
            unique.add(email)
            
        print(unique)
                
        return len(unique)