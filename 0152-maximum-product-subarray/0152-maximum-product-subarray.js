/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // Edge case: if the array is empty, return 0
    if (nums.length === 0) {
        return 0;
    }

    // Initialize variables to track the maximum and minimum products
    let maxProductSoFar = nums[0];
    let minProductSoFar = nums[0];
    let maxProductTotal = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Store the current element
        let current = nums[i];

        // Calculate the new maximum and minimum products
        let tempMax = Math.max(current, maxProductSoFar * current, minProductSoFar * current);
        let tempMin = Math.min(current, maxProductSoFar * current, minProductSoFar * current);

        // Update the maximum product seen so far
        maxProductSoFar = tempMax;

        // Update the minimum product seen so far
        minProductSoFar = tempMin;

        // Update the maximum product overall
        maxProductTotal = Math.max(maxProductTotal, maxProductSoFar);
    }

    // Return the maximum product
    return maxProductTotal;
};
