var longestCommonSubsequence = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    
    // Create a 2D array to store the lengths of longest common subsequences
    const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
    
    // Iterate through the strings to fill the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                // If characters match, increment the length of the common subsequence by 1
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, take the maximum of the lengths without one of the characters
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    
    // Return the length of the longest common subsequence
    return dp[m][n];
};
