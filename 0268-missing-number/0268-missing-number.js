/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    
    // Calculate the expected sum
    const expectedSum = (n * (n + 1)) / 2;
    
    // Calculate the actual sum of numbers in the array
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the expected sum and the actual sum
    return expectedSum - actualSum;
};
