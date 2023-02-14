/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 1) return true;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const alphabetSet = new Set(alphabet);
    let strippedString = '';
    
    for (const ltr of s.toLowerCase()) {
        if (alphabetSet.has(ltr)) strippedString += ltr;
    }
    
    let left = 0;
    let right = strippedString.length - 1;
    console.log(strippedString);
    
    while (left < right) {
        const leftLetter = strippedString[left];
        const rightLetter = strippedString[right];
        
        if (leftLetter === rightLetter) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};