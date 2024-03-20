/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins needed to make up amount 0
    
    // Iterate through each coin value
    for (let coin of coins) {
        // Update dp[i] if using this coin reduces the number of coins needed to make up amount i
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    
    // If dp[amount] is still Infinity, it means it's not possible to make up the amount using given coins
    return dp[amount] === Infinity ? -1 : dp[amount];
};
