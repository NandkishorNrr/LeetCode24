var isInterleave = function(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    const l = s3.length;
    
    // If the lengths of s1 and s2 don't add up to the length of s3, they cannot form s3 by interleaving
    if (m + n !== l) {
        return false;
    }
    
    // Initialize a DP table with dimensions (m+1) x (n+1)
    const dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));
    
    // Base case: empty strings can form an empty string
    dp[0][0] = true;
    
    // Fill in the first row of the DP table
    for (let j = 1; j <= n; j++) {
        dp[0][j] = s2[j - 1] === s3[j - 1] && dp[0][j - 1];
    }
    
    // Fill in the first column of the DP table
    for (let i = 1; i <= m; i++) {
        dp[i][0] = s1[i - 1] === s3[i - 1] && dp[i - 1][0];
    }
    
    // Fill in the rest of the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Check if the current character in s3 matches the character in s1 or s2
            dp[i][j] = (s1[i - 1] === s3[i + j - 1] && dp[i - 1][j]) || 
                       (s2[j - 1] === s3[i + j - 1] && dp[i][j - 1]);
        }
    }
    
    // Return the value in the bottom-right corner of the DP table
    return dp[m][n];
};
