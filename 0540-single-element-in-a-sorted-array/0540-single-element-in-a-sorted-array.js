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
