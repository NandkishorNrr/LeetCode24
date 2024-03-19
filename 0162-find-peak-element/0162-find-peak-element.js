/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // Check if the mid element is a peak
        if (nums[mid] > nums[mid + 1]) {
            // If the element to the left is smaller, mid is the peak
            if (mid === 0 || nums[mid] > nums[mid - 1]) {
                return mid;
            } else {
                // Otherwise, peak must be in the left subarray
                right = mid - 1;
            }
        } else {
            // If mid element is not a peak, peak must be in the right subarray
            left = mid + 1;
        }
    }
    
    // If the loop terminates without finding a peak, return the index of the last element
    return left;
};
