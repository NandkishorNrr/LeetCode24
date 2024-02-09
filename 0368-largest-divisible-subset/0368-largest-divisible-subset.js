var largestDivisibleSubset = function(nums) {
    if (nums.length === 0) return [];
    
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    
    const dp = new Array(nums.length).fill(1); // Initialize dp array with 1s
    let maxIndex = 0; // Initialize maxIndex to keep track of the index of the largest divisible subset
    
    // Perform dynamic programming
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1); // Update dp[i] with the maximum length of subset ending at index i
            }
        }
        if (dp[i] > dp[maxIndex]) {
            maxIndex = i; // Update maxIndex if we found a longer subset ending at index i
        }
    }
    
    const result = [];
    let currNum = nums[maxIndex];
    let currLen = dp[maxIndex];
    
    // Reconstruct the largest divisible subset using dp array
    for (let i = maxIndex; i >= 0; i--) {
        if (currNum % nums[i] === 0 && dp[i] === currLen) {
            result.unshift(nums[i]); // Add current number to the result array
            currNum = nums[i];
            currLen--; // Decrease the current length
        }
    }
    
    return result;
};
