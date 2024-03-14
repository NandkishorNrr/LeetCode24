/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const numMap = new Map(); // Create a map to store number indices
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // If the current number is already in the map and the difference between current index and the previous index is less than or equal to k,
        // return true since we found a duplicate within distance k
        if (numMap.has(num) && i - numMap.get(num) <= k) {
            return true;
        }
        // Update the index of the current number
        numMap.set(num, i);
    }
    
    // If no such duplicate found within distance k, return false
    return false;
};
