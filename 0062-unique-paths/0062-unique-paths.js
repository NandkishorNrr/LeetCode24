/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // Create a 2D array to store the number of paths to reach each cell
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    
    // Base case: there's only one way to reach cells in the first row and first column
    for (let i = 0; i < m; i++) {
        dp[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        dp[0][j] = 1;
    }
    
    // Calculate the number of paths for each cell based on the paths from its top and left cells
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    
    // The result is stored in the bottom-right cell
    return dp[m - 1][n - 1];
};
