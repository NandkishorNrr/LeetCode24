var canConstruct = function(ransomNote, magazine) {
    // Create an array to store the count of each character in magazine
    const charCount = new Array(26).fill(0);
    
    // Count the occurrences of each character in magazine
    for (const char of magazine) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    // Check if the characters required for ransom note are present in magazine
    for (const char of ransomNote) {
        const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        // If the count of a character in ransom note exceeds its count in magazine, return false
        if (charCount[index] === 0) {
            return false;
        }
        charCount[index]--;
    }
    
    // If all characters in ransom note can be constructed from magazine, return true
    return true;
};
