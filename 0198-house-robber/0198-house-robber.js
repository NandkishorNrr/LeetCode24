var rob = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    
    // Initialize an array to store the maximum amount of money robbed up to the current house
    const dp = new Array(nums.length);
    
    // Base cases
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    // Iterate from the third house to the last one
    for (let i = 2; i < nums.length; i++) {
        // The maximum amount of money robbed up to the current house
        // is the maximum of:
        // 1. The money robbed from the current house + the money robbed up to two houses ago
        // 2. The money robbed up to the previous house
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    
    // Return the maximum amount of money robbed considering all houses
    return dp[nums.length - 1];
};
