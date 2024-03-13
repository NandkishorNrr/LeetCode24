/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b); // Sort the array
    
    let left = 0;
    let right = nums.length - 1;
    let count = 0;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            count++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    
    return count;
};
