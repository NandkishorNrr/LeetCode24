/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    
    // Calculate sum of the first k elements
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
    
    let maxAverage = sum / k;
    
    // Iterate through the array and update sum and maxAverage
    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k]; // Update sum by removing the leftmost element and adding the rightmost element
        maxAverage = Math.max(maxAverage, sum / k);
    }
    
    return maxAverage;
};
