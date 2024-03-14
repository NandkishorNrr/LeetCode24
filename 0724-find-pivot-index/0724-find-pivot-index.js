/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // Calculate the total sum of the array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);
    
    let leftSum = 0;
    
    // Iterate through the array and check if the sum of elements to the left equals the sum of elements to the right
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i; // Return the index if found
        }
        leftSum += nums[i]; // Update the left sum for the next iteration
    }
    
    return -1; // Return -1 if no pivot index found
};
