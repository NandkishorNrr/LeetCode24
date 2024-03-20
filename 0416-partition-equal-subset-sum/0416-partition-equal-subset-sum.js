/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    // If the total sum is odd, it's not possible to partition the array into two subsets with equal sum
    if (totalSum % 2 !== 0) {
        return false;
    }
    
    const targetSum = totalSum / 2;
    const dp = new Array(targetSum + 1).fill(false);
    dp[0] = true; // Base case: 0 is always achievable
    
    for (let num of nums) {
        for (let i = targetSum; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[targetSum];
};
