var firstUniqChar = function(s) {
    const charIndex = new Map();

    // Iterate through the string to store the index of each character
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (charIndex.has(char)) {
            charIndex.set(char, -1); // Mark as repeated
        } else {
            charIndex.set(char, i); // Store the index of the first occurrence
        }
    }

    // Find the minimum index of characters that occurred only once
    let result = s.length;
    for (const index of charIndex.values()) {
        if (index !== -1 && index < result) {
            result = index;
        }
    }

    // If no unique character is found
    return result === s.length ? -1 : result;
};

// Example usage:
console.log(firstUniqChar("leetcode"));      // Output: 0
console.log(firstUniqChar("loveleetcode"));   // Output: 2
console.log(firstUniqChar("aabb"));           // Output: -1
