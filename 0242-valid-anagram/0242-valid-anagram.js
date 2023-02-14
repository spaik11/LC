/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hash = {};

    for (const letter of s) {
        if (letter in hash) {
            hash[letter]++;
        } else {
            hash[letter] = 1;
        }
    }

    for (const letter of t) {
        if (!(letter in hash) || hash[letter] === 0) {
            return false;
        }
        hash[letter]--;
    }

    return true;
};