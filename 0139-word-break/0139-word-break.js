/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    // Create a set for faster lookup
    const wordSet = new Set(wordDict);
    
    // Create a dp array to store whether substring s[0...i] can be segmented
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // An empty string can always be segmented
    
    // Iterate through each character in s
    for (let i = 1; i <= s.length; i++) {
        // Iterate through all possible prefixes of s[0...i]
        for (let j = 0; j < i; j++) {
            // Check if the substring s[j...i-1] (inclusive) can be segmented
            // and if the substring s[j...i-1] is present in the wordDict
            if (dp[j] && wordSet.has(s.substring(j, i))) {
                // If both conditions are met, mark dp[i] as true
                dp[i] = true;
                // Move to the next character
                break;
            }
        }
    }
    
    // If dp[s.length] is true, it means the entire string can be segmented
    return dp[s.length];
};

