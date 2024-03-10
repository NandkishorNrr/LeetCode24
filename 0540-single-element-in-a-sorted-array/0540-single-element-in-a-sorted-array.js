function singleNonDuplicate(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        // Ensure mid is even index
        if (mid % 2 === 1) {
            mid--;
        }

        // Check if mid and its adjacent element are equal
        if (nums[mid] !== nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 2;
        }
    }

    return nums[left];
}

// Example usage:
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8])); // Output: 2
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));  // Output: 10
