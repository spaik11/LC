/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};

    for (const str of strs) {
        const s = str.split('').sort().join('');
        if (!hash[s]) hash[s] = [];
        hash[s].push(str);
    }

    return Object.values(hash);
};
