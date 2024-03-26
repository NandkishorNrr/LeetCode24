/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) {
        return 0; // If there is only one element or no elements, no jump needed
    }

    let maxReach = nums[0]; // Maximum reachable index after current jump
    let steps = nums[0]; // Number of steps we can take from the current position
    let jumps = 1; // Initialize jumps to 1 since we need at least one jump to start

    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
        // If we reach the end or beyond, return the number of jumps
        if (i === nums.length - 1) {
            return jumps;
        }

        // Update the maximum reachable index after the current jump
        maxReach = Math.max(maxReach, i + nums[i]);

        // Reduce the steps by 1 since we've taken a step
        steps--;

        // If steps become 0, we need to take a jump
        if (steps === 0) {
            jumps++; // Increment jumps since we're taking a new jump
            // Update steps to the number of steps required to reach the new maxReach
            steps = maxReach - i;
        }
    }

    return jumps;
};
