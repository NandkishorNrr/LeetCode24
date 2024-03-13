/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroPointer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Move non-zero element to the position pointed by nonZeroPointer
            nums[nonZeroPointer] = nums[i];
            // Increment nonZeroPointer to point to the next position
            nonZeroPointer++;
        }
    }
    
    // Fill the remaining elements with zeros
    for (let i = nonZeroPointer; i < nums.length; i++) {
        nums[i] = 0;
    }
};
