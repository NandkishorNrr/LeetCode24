/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null;
    
    // Step 1: Find the candidate for the majority element
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    
    // Step 2: Validate the candidate
    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }
    
    // Step 3: Check if the candidate is the majority element
    return count > nums.length / 2 ? candidate : -1; // If majority element always exists, return candidate; otherwise, return -1.
};
