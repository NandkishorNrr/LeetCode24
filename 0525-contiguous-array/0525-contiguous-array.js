/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const map = new Map(); // Create a map to store running sum index
    map.set(0, -1); // Initial sum of 0

    let maxLen = 0;
    let count = 0; // Variable to keep track of the difference between counts of 0s and 1s

    for (let i = 0; i < nums.length; i++) {
        // Increment the count if 1, decrement if 0
        count += nums[i] === 1 ? 1 : -1;

        // If the current count was encountered before,
        // calculate the length of the subarray
        if (map.has(count)) {
            maxLen = Math.max(maxLen, i - map.get(count));
        } else {
            map.set(count, i); // Store the index of the first occurrence of the count
        }
    }

    return maxLen;
};
