/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // Create a dp array to store the least number of perfect squares that sum to each index
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 requires 0 perfect squares
    
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        // Check all possible perfect squares that can sum up to i
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }
    
    // The result is stored at index n
    return dp[n];
};