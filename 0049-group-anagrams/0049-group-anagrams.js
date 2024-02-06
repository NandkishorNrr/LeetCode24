/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Create a map to store groups of anagrams
    const anagramGroups = new Map();

    // Iterate through each string in the input array
    for (const s of strs) {
        // Sort the characters in the string to create a unique key for anagrams
        const sortedS = s.split('').sort().join('');

        // If the sorted key is already in the map, add the string to the existing group
        if (anagramGroups.has(sortedS)) {
            anagramGroups.get(sortedS).push(s);
        } else {
            // If the key is not in the map, create a new group with the current string
            anagramGroups.set(sortedS, [s]);
        }
    }

    // Convert the map values (groups of anagrams) to an array
    const result = Array.from(anagramGroups.values());

    return result;
};