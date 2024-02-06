/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramGroups = new Map();

    for (const s of strs) {
        const charCount = new Array(26).fill(0);

        for (const char of s) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        const key = charCount.join(',');

        if (anagramGroups.has(key)) {
            anagramGroups.get(key).push(s);
        } else {
            anagramGroups.set(key, [s]);
        }
    }

    const result = Array.from(anagramGroups.values());

    return result;
};
