var frequencySort = function(s) {
    // Count the frequency of each character
    const charMap = {};
    for (let char of s) {
        charMap[char] = (charMap[char] || 0) + 1;
    }
    
    // Sort characters based on their frequencies
    const sortedChars = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
    
    // Reconstruct the sorted string
    let sortedString = '';
    for (let char of sortedChars) {
        sortedString += char.repeat(charMap[char]);
    }
    
    return sortedString;
};
