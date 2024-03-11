var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let charMap = new Map();
    let windowStart = 0;

    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currentChar = s[windowEnd];

        if (charMap.has(currentChar)) {
            windowStart = Math.max(windowStart, charMap.get(currentChar) + 1);
        }

        charMap.set(currentChar, windowEnd);
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }

    return maxLength;
};

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
