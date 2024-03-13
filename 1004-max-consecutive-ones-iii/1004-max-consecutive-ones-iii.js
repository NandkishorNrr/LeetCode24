/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let maxLen = 0;
    let zeroCount = 0;
    
    // Initialize window with first k elements
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }
        
        // Shrink the window if zeroCount exceeds k
        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }
        
        // Update maxLen if the current window is longer
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return maxLen;
};
