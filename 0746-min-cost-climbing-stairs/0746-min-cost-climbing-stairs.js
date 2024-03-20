/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const n = cost.length;
    
    // Create an array to store the minimum cost to reach each step
    const dp = new Array(n);
    
    // Base case: minimum cost to reach the first and second step is the cost itself
    dp[0] = cost[0];
    dp[1] = cost[1];
    
    // Iterate through the remaining steps and calculate the minimum cost
    for (let i = 2; i < n; i++) {
        // Minimum cost to reach the current step is the cost of the current step plus the minimum cost of reaching the previous two steps
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }
    
    // The minimum cost of reaching the top is the minimum cost of reaching the last two steps
    return Math.min(dp[n - 1], dp[n - 2]);
};
