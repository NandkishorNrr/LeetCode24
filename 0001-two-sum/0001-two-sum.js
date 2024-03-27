/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map to store the complements of numbers we have seen so far
    const complementMap = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        // If the complement exists in the map, we have found our pair
        if (complementMap.hasOwnProperty(complement)) {
            // Return the indices of the two numbers
            return [complementMap[complement], i];
        }

        // Otherwise, store the current number and its index
        complementMap[num] = i;
    }

    // If no solution is found, return an empty array
    return [];
};
