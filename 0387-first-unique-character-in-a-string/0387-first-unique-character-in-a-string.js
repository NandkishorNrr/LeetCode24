var firstUniqChar = function(s) {
    const charFrequency = new Map();

    // Count the frequency of each character
    for (const char of s) {
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }

    // Find the first character with frequency 1
    for (let i = 0; i < s.length; i++) {
        if (charFrequency.get(s[i]) === 1) {
            return i;
        }
    }

    // If no unique character is found
    return -1;
};
