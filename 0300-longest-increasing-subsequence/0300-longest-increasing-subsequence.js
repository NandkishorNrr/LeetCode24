/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;

    const dp = new Array(nums.length).fill(1); // Initialize dp array with 1s

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Check all previous elements
        for (let j = 0; j < i; j++) {
            // If the current element is greater than the previous element
            // and including the current element gives a longer subsequence
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // Find the maximum value in the dp array, which represents the length of the longest increasing subsequence
    return Math.max(...dp);
};
