/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length;
    k = k % n; // Get the actual rotation steps (in case k > n)

    reverse(nums, 0, n - 1); // Step 1: Reverse the entire array
    reverse(nums, 0, k - 1); // Step 2: Reverse the first k elements
    reverse(nums, k, n - 1); // Step 3: Reverse the remaining n - k elements
};

// Helper function to reverse elements of nums from start index to end index
function reverse(nums, start, end) {
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
