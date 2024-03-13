/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let maxCount = 0;
    let count = 0;
    
    // Initialize count with the number of vowels in the first k characters
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }
    
    maxCount = count; // Initialize maxCount with the count of vowels in the first k characters
    
    // Iterate through the string and update count and maxCount
    for (let i = k; i < s.length; i++) {
        if (vowels.has(s[i - k])) {
            count--; // Remove the leftmost character from the window
        }
        if (vowels.has(s[i])) {
            count++; // Add the rightmost character to the window
        }
        maxCount = Math.max(maxCount, count);
    }
    
    return maxCount;
};
